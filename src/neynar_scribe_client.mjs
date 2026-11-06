#!/usr/bin/env node
/**
 * Maha Grid & The Embassy — Neynar SDK Scribe & Tri-Token Orchestrator
 * ====================================================================
 * Utiliza o SDK oficial `@neynar/nodejs-sdk` para:
 * 1. Construir o Perfil Autoetnográfico Vivo (◈) a partir do Grafo Social Farcaster.
 * 2. Publicar a Meta-Análise Edificante do Escriba Híbrido (⟁ Efeito Observador / Simulacro Positivo ⟡).
 * 3. Orquestrar payloads de transações para os 3 Tokens:
 *    - Token Mercantil (USDC / DOT / $DEGEN / $CLANKER para Bounties HaaS e A2H)
 *    - Token Reputacional (MAHA-SBT ERC-5192 + KarmaHQ GAP Attestation)
 *    - Token de Governança (Shapley Coalition Weight + Conviction Vote)
 */

import { NeynarAPIClient, Configuration } from "@neynar/nodejs-sdk";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Inicializa o cliente oficial da Neynar (ou opera em modo Simulação Offline se NEYNAR_API_KEY não estiver definida)
 */
export function initNeynarClient(apiKey = process.env.NEYNAR_API_KEY) {
  const effectiveKey = apiKey || "NEYNAR_API_DOCS";
  const config = new Configuration({ apiKey: effectiveKey });
  return {
    client: new NeynarAPIClient(config),
    isLiveKey: Boolean(apiKey && apiKey !== "NEYNAR_API_DOCS"),
  };
}

/**
 * 1. Constrói o Tensor de Perfil Autoetnográfico (◈) de um Steward no Grafo Social
 */
export async function buildAutoethnographicProfile({ fid = 888888, username = "maha-scribe.eth" } = {}) {
  const { client, isLiveKey } = initNeynarClient();
  let socialGraphData = null;

  if (isLiveKey) {
    try {
      const response = await client.fetchBulkUsers({ fids: [fid] });
      socialGraphData = response.users?.[0] || null;
    } catch (err) {
      console.warn("[Neynar Scribe] Fallback para telemetria sintética local:", err.message);
    }
  }

  return {
    glyph: "◈",
    paradigm: "Autoethnographic_Social_Graph_Node",
    fid,
    username: socialGraphData?.username || username,
    displayName: socialGraphData?.display_name || "Maha Grid Hybrid Scribe (Human + AI Steward)",
    followerCount: socialGraphData?.follower_count ?? 1420,
    powerBadge: socialGraphData?.power_badge ?? true,
    journeyState: {
      currentSquare: 67,
      currentCycle: 8,
      laddersClimbed: 5,
      snakesNeutralizedViaCoalition: 4,
      haasTasksCompleted: 7,
      a2hEcosystemServicesRendered: 5,
    },
    autoethnographyChronicle: [
      {
        cycle: 1,
        square: 4,
        castHash: "0xcca1...0001",
        reflection: "Iniciamos o Build-in-Public no canal /dao. A abertura precoce atraiu 3 playtesters para a Aliança da Casa 04→16.",
      },
      {
        cycle: 6,
        square: 58,
        castHash: "0xcca1...0058",
        reflection: "Enfrentamos a Serpente Vasuki (risco de exaustão de tesouraria). O chamado A2H convocou 3 Zeladores Humanos que reequilibraram o orçamento.",
      },
      {
        cycle: 8,
        square: 67,
        castHash: "0xcca1...0067",
        reflection: "Na Embassy, nossa meta-análise edificante uniu duas propostas concorrentes em uma única coalizão com 94% de eficiência de Pareto.",
      },
    ],
  };
}

/**
 * 2. Gera a Crônica do Escriba (⟁ Efeito Observador / Simulacro Positivo ⟡) pronta para Cast & Frame v2
 */
export function composeScribeEdifyingCast(profile, coalitionId = "EMB-COALITION-2027-01") {
  const castText =
    `⟁📜 [CRÔNICA DO ESCRIBA #08 — EFEITO OBSERVADOR]\n\n` +
    `Ao observarmos as propostas de @steward_alpha e @steward_beta sob a ótica do Bem Comum na Embassy (${coalitionId}), a competição virou simbiose:\n` +
    `• Orçamento otimizado em -20% ($24,000 USDC)\n` +
    `• Divisão Shapley: 45% / 35% / 12% HaaS / 8% Infra\n` +
    `• Gini SBT caiu para 0.1840 ⟡\n\n` +
    `Ratifique no Frame ou no Web4 App 👇 /dao /build`;

  return {
    channelId: process.env.MAHA_CHANNEL_ID || "dao",
    text: castText,
    embeds: [
      {
        url: "https://compilatorum.github.io/maha-grid/#embassy",
      },
    ],
    observerEffectMetrics: {
      glyph: "⟡",
      simulacrumPolarity: "POSITIVE_REGENERATIVE",
      cooperationLiftPct: "+312%",
      giniReductionPct: "-73.0%",
    },
  };
}

/**
 * 3. Facilita e estrutura as transações dos 3 Tokens (Mercantil, Reputacional e Governança)
 */
export function buildTriTokenTransactionBundle({
  coalitionId = "EMB-COALITION-2027-01",
  humanStewardAddress = "0x71C000000000000000000000000000000000089A",
  farcasterFid = 888888,
} = {}) {
  return {
    timestamp: new Date().toISOString(),
    coalitionId,
    triTokenArchitecture: {
      // 1. TOKEN MERCANTIL (Bounties HaaS / A2H & Streaming Flows)
      mercantileTokenTx: {
        tokenType: "MERCANTILE_LIQUIDITY",
        supportedAssets: ["USDC (Base/Arbitrum)", "DOT (Polkadot AssetHub)", "$DEGEN", "$CLANKER"],
        txIntent: "DISPATCH_HAAS_AND_A2H_BOUNTY",
        chainId: "eip155:8453", // Base Mainnet
        to: humanStewardAddress,
        amountUSDC: 120.0,
        memo: `A2H/HaaS Scribe & Ethical Oracle Reward for ${coalitionId}`,
        farcasterFrameTxPayload: {
          chainId: "eip155:8453",
          method: "eth_sendTransaction",
          params: {
            abi: ["function transfer(address to, uint256 amount) returns (bool)"],
            to: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // Base USDC
            value: "0",
          },
        },
      },

      // 2. TOKEN REPUTACIONAL (Soulbound ERC-5192 + KarmaHQ GAP EAS Attestation)
      reputationalTokenTx: {
        tokenType: "REPUTATIONAL_SOULBOUND",
        standard: "ERC-5192 (MahaGridSBT.sol) + EAS KarmaHQ GAP",
        transferable: false,
        contractPath: "contracts/MahaGridSBT.sol",
        method: "recordCycleAttestation",
        args: {
          player: humanStewardAddress,
          farcasterFid,
          square: 81,
          reputationDelta: 50,
          votesDelta: 5,
          isNodespace: true,
          completedUri: "ipfs://bafybeimaha9cyclescompleted/metadata.json",
        },
      },

      // 3. TOKEN DE GOVERNANÇA (Poder de Decisão H-A-H & Peso Quadrático/Shapley)
      governanceTokenTx: {
        tokenType: "GOVERNANCE_CONVICTION_SHAPLEY",
        standard: "Embassy H-A-H Coalition Weight + Polkadot OpenGov / Questbook Rubric",
        method: "getGovernanceWeight",
        formula: "(reputationScore + coalitionVotes * 5) * 1.50 (9-Cycles Bonus) * 1.25 (Nodespace Bonus)",
        computedVotingPower: 243.75,
        shapleyAllocationShare: 0.12, // 12% Pool de Zeladores Humanos (HaaS/A2H)
        ratifiedTargets: ["Questbook_DDA", "KarmaHQ_GAP", "Polkadot_OpenGov", "Flows_Nouns", "Clanker_CEF"],
      },
    },
  };
}

// Execução direta via CLI (`npm run neynar:scribe`)
if (process.argv[1] === __filename) {
  const profile = await buildAutoethnographicProfile();
  const scribeCast = composeScribeEdifyingCast(profile);
  const triTokenBundle = buildTriTokenTransactionBundle();

  const outDir = path.resolve(__dirname, "../simulations/output");
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "neynar_scribe_tritoken_telemetry.json");

  fs.writeFileSync(
    outFile,
    JSON.stringify({ profile, scribeCast, triTokenBundle }, null, 2),
    "utf-8"
  );

  console.log("✅ [Neynar Scribe & Tri-Token Client] SDK @neynar/nodejs-sdk carregado com sucesso!");
  console.log(`◈ Perfil Autoetnográfico gerado para FID ${profile.fid} (${profile.username}) — Casa ${profile.journeyState.currentSquare}/81`);
  console.log(`⟁ Crônica do Escriba pronta para o canal /${scribeCast.channelId} (Lift Cooperativo: ${scribeCast.observerEffectMetrics.cooperationLiftPct})`);
  console.log(`🪙 Bundle Tri-Token (Mercantil + Reputacional SBT + Governança Shapley) salvo em: ${outFile}`);
}
