// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title MahaGridSBT — Soulbound Reputation & 9-Cycle Journey Attestation (ERC-5192)
 * @notice Emite Soulbound Tokens (SBTs) não-transferíveis e atestações on-chain para
 *         jogadores e agentes que completam a "Jornada de 9 Ciclos do Maha Grid"
 *         via Farcaster Mini App (Frames v2) ou presencialmente no Nodespace (Web3 Summit Berlim).
 * @dev Alinhado à lógica Phygital não-especulativa: reputação portável para governança
 *      na DAO do Maha Grid e elegibilidade em rodadas futuras de Grants (W3F, Polkadot, Flows, CEF).
 */
contract MahaGridSBT {
    string public constant name = "Maha Grid: Jornada de 9 Ciclos (SBT)";
    string public constant symbol = "MAHA-SBT";

    /// @notice Evento padrão ERC-5192 Minimal Soulbound NFTs
    event Locked(uint256 tokenId);

    /// @notice Emitido quando um jogador/agente registra progresso ou conclui os 9 Ciclos
    event CycleCompleted(
        address indexed player,
        uint256 indexed farcasterFid,
        uint8 cycleReached,
        uint16 reputationScore,
        bool isNodespaceVerified,
        bytes32 playtestSessionHash
    );

    /// @notice Emitido quando o SBT de Conclusão dos 9 Ciclos (Casa 81) é cunhado
    event NineCyclesSbtMinted(
        uint256 indexed tokenId,
        address indexed player,
        uint256 indexed farcasterFid,
        uint16 finalReputation,
        string metadataUri
    );

    /// @notice Gap 1 (ProofGate Circuit Breaker): Emitido quando uma alocação L2 excede o limiar estatístico e exige A2H
    event ProofGateCircuitBreakerTriggered(
        address indexed envoyAgent,
        uint256 requestedAmountUsdCents,
        uint256 zScoreBps,
        bytes32 ethicalParadoxHash
    );

    /// @notice Gap 4 & Gap 5 (Web5 Sovereign Perma-Anchor + Builder WIP): Emitido ao ancorar prova de impacto soberana
    event SovereignPermaImpactAnchored(
        address indexed envoyWallet,
        uint256 indexed farcasterFid,
        bytes32 easAttestationUid,
        string ipfsCidV1,
        string arweaveTxId,
        bytes32 githubWipCommitHash
    );

    struct PlayerPassport {
        uint256 farcasterFid;
        uint8 currentCycle;        // 1 a 9
        uint8 currentSquare;       // 1 a 81
        uint16 reputationScore;    // Acumulado por coalizões e resolução de dilemas
        uint16 coalitionVotes;     // Votos em decisões de governança no Farcaster/Nodespace
        bool completedNineCycles;  // True ao atingir a casa 81
        bool nodespaceAttested;    // True se validado presencialmente em um Node físico (ex: Berlim)
        uint256 sbtTokenId;        // ID do SBT cunhado (0 se ainda não cunhado)
        bytes32 lastGithubWipHash; // Gap 4: Prova de commit real (Builder E-sport no Playground.dot)
        string permaIpfsCid;       // Gap 5: Âncora soberana IPFS CIDv1 na carteira do indivíduo (Web5)
        string permaArweaveTx;     // Gap 5: Âncora permanente Arweave Permaweb
    }

    address public stewardDao;
    uint256 public totalSupply;
    uint256 public constant PROOFGATE_MAX_ZSCORE_BPS = 20000; // 2.00 desvios-padrão (200.00%)

    mapping(address => PlayerPassport) public passports;
    mapping(uint256 => address) public ownerOf;
    mapping(uint256 => string) public tokenURI;
    mapping(address => bool) public authorizedAttesters;

    error SoulboundTransferProhibited();
    error UnauthorizedAttester();
    error AlreadyMintedNineCyclesSBT();
    error InvalidSquareOrCycle();

    modifier onlyAttester() {
        if (msg.sender != stewardDao && !authorizedAttesters[msg.sender]) {
            revert UnauthorizedAttester();
        }
        _;
    }

    constructor() {
        stewardDao = msg.sender;
        authorizedAttesters[msg.sender] = true;
    }

    /**
     * @notice ERC-5192: Todos os tokens são permanentemente bloqueados (Soulbound / Não-transferíveis).
     */
    function locked(uint256 /* tokenId */) external pure returns (bool) {
        return true;
    }

    /**
     * @notice Registra atestação de progresso Phygital (Farcaster Frame Diário ou Nodespace Playtest).
     */
    function recordCycleAttestation(
        address player,
        uint256 farcasterFid,
        uint8 square,
        uint16 reputationDelta,
        uint16 votesDelta,
        bool isNodespace,
        bytes32 sessionHash,
        string calldata completedUri
    ) external onlyAttester {
        if (square == 0 || square > 81) revert InvalidSquareOrCycle();

        PlayerPassport storage p = passports[player];
        if (p.farcasterFid == 0) {
            p.farcasterFid = farcasterFid;
        }
        p.currentSquare = square;
        p.currentCycle = uint8(((square - 1) / 9) + 1);
        p.reputationScore += reputationDelta;
        p.coalitionVotes += votesDelta;
        if (isNodespace) {
            p.nodespaceAttested = true;
        }

        emit CycleCompleted(
            player,
            p.farcasterFid,
            p.currentCycle,
            p.reputationScore,
            p.nodespaceAttested,
            sessionHash
        );

        // Se chegou à Casa 81 (Fim do 9º Ciclo) e ainda não possui SBT de conclusão, cunha automaticamente
        if (square == 81 && !p.completedNineCycles) {
            _mintNineCyclesSBT(player, completedUri);
        }
    }

    function _mintNineCyclesSBT(address player, string memory uri) internal {
        PlayerPassport storage p = passports[player];
        if (p.completedNineCycles) revert AlreadyMintedNineCyclesSBT();

        totalSupply += 1;
        uint256 newTokenId = totalSupply;

        p.completedNineCycles = true;
        p.sbtTokenId = newTokenId;
        ownerOf[newTokenId] = player;
        tokenURI[newTokenId] = uri;

        emit Locked(newTokenId);
        emit NineCyclesSbtMinted(newTokenId, player, p.farcasterFid, p.reputationScore, uri);
    }

    /**
     * @notice Calcula o peso de voto de governança quadrática/reputacional na DAO do Maha Grid.
     */
    function getGovernanceWeight(address player) external view returns (uint256) {
        PlayerPassport memory p = passports[player];
        uint256 baseWeight = uint256(p.reputationScore) + (uint256(p.coalitionVotes) * 5);
        if (p.completedNineCycles) {
            baseWeight = (baseWeight * 150) / 100; // +50% bônus por completar a Jornada de 9 Ciclos
        }
        if (p.nodespaceAttested) {
            baseWeight = (baseWeight * 125) / 100; // +25% bônus de prova física (Phygital Nodespace)
        }
        return baseWeight;
    }

    /**
     * @notice Gap 1, 4 & 5: Registra âncora soberana Web5 (IPFS + Arweave + GitHub WIP) ou aciona Circuit Breaker do ProofGate.
     */
    function anchorWeb5SovereignImpact(
        address envoyWallet,
        uint256 farcasterFid,
        bytes32 easAttestationUid,
        string calldata ipfsCidV1,
        string calldata arweaveTxId,
        bytes32 githubWipCommitHash,
        uint256 requestedAmountUsdCents,
        uint256 zScoreBps,
        bytes32 ethicalParadoxHash
    ) external onlyAttester returns (bool circuitBreakerTripped) {
        PlayerPassport storage p = passports[envoyWallet];
        if (p.farcasterFid == 0) {
            p.farcasterFid = farcasterFid;
        }
        p.lastGithubWipHash = githubWipCommitHash;
        p.permaIpfsCid = ipfsCidV1;
        p.permaArweaveTx = arweaveTxId;

        emit SovereignPermaImpactAnchored(
            envoyWallet,
            farcasterFid,
            easAttestationUid,
            ipfsCidV1,
            arweaveTxId,
            githubWipCommitHash
        );

        if (zScoreBps > PROOFGATE_MAX_ZSCORE_BPS) {
            emit ProofGateCircuitBreakerTriggered(
                msg.sender,
                requestedAmountUsdCents,
                zScoreBps,
                ethicalParadoxHash
            );
            return true;
        }
        return false;
    }

    /**
     * @notice Bloqueia qualquer tentativa de transferência (Soulbound).
     */
    function transferFrom(address, address, uint256) external pure {
        revert SoulboundTransferProhibited();
    }
}
