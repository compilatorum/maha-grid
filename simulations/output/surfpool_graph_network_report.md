# 🏄‍♂️🕸️ Relatório de Simulação da Rede Virtual de Carteiras no Surfpool & Análise de Network Science

- **Modo de Runtime Surfpool**: `DETERMINISTIC_SURFNET_SVM_TWIN` (`solana-core 4.3.2`, Feature Set `3383571666`)
- **Total de Carteiras Virtuais & PDAs Instanciadas**: `36`
- **Total de Arestas Multiplex (Mercantil + Reputacional + Governança)**: `71`
- **Conectividade Algébrica (Valor de Fiedler $\lambda_2$)**: `1.1512`
- **Centralidade de Intermediação do Escriba/Embassy ($C_B$)**: `0.7884`
- **Isolamento Espectral de Carteiras Sybil (Nagas)**: `100.0%`
- **Invariante de Conservação de Capital**: `24,000.000000 USDC` (Erro: `0.000000 USDC`)

## 1. Saldos Auditados por Cluster de Carteiras Virtuais (Pós-Execução `TX-01` a `TX-08`)

| Carteira / PDA (Exemplo do Cluster) | Endereço Base58 (Surfpool Deterministic) | Papel no Grafo | Saldo Final (USDC) | Reputação SBT |
| :--- | :--- | :--- | :---: | :---: |
| `PDA_Treasury_Main` | `DJeQY4BfudJ9p13n...` | `vault_pda` | **0.00 USDC** | `100.0` |
| `PDA_Embassy_Escrow` | `SYB6o5ybuAE4RiqX...` | `vault_pda` | **0.00 USDC** | `100.0` |
| `PDA_HaaS_Pool` | `vUgKPPDTG2ywNgRx...` | `vault_pda` | **0.00 USDC** | `100.0` |
| `PDA_Infra_Gas` | `9GWryJVRE3PNUHqW...` | `vault_pda` | **0.00 USDC** | `100.0` |
| `Wallet_Scribe_Human` | `nb9owff3qpcP14YD...` | `scribe_steward` | **960.00 USDC** | `85.0` |
| `Wallet_Embassy_Bot` | `qtuHPuDsVLxWdL1N...` | `scribe_steward` | **960.00 USDC** | `85.0` |
| `Wallet_Builder_Alpha_01` | `dxhcdWRC3M5bcywz...` | `human_builder` | **2,160.00 USDC** | `80.0` |
| `Wallet_Builder_Beta_06` | `Hw9HfTtu8UkVWxbV...` | `human_builder` | **1,680.00 USDC** | `80.0` |
| `Wallet_HaaS_Oracle_01` | `eRkWiDqLH9hS7Sdo...` | `haas_oracle` | **360.00 USDC** | `50.0` |
| `Wallet_Naga_Sybil_01` | `T7fX12cDtAHFzv68...` | `naga_sybil` | **0.00 USDC** | `2.0` |

## 2. Log das 8 Transações Atômicas Simuladas no Surfpool (`TX-01` a `TX-08`)

| Código TX | Compute Units (SVM) | Descrição da Mutação no Grafo de Carteiras |
| :---: | :---: | :--- |
| `TX-01` | `14200 CUs` | Transferência de 24,000.00 USDC para PDA_Embassy_Escrow |
| `TX-02` | `9800 CUs` | Anel Sybil de 4 carteiras detectado e isolado (0 USDC drenados) |
| `TX-03` | `28400 CUs` | 10 Builders e 8 AI Stewards acoplados na Câmara H-A-H |
| `TX-04` | `19500 CUs` | Crônica do Escriba publicada elevando a conectividade algébrica |
| `TX-05` | `16100 CUs` | Alocação de 2,880 USDC (HaaS) e 1,920 USDC (Infra) |
| `TX-06` | `34200 CUs` | Liquidação de 8 Bounties HaaS/A2H (360 USDC/cada) e Stipend do Escriba |
| `TX-07` | `38900 CUs` | Liquidação Shapley: 10,800 USDC (Alpha) + 8,400 USDC (Beta) |
| `TX-08` | `22750 CUs` | Cunhagem de SBTs ERC-5192 / Token-2022 NonTransferable na Casa 81 |
