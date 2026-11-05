# 🛡️ Modelo de Perfil e Prestação de Contas: KarmaHQ — GAP (Grantee Accountability Protocol)

> **Plataforma Alvo**: `gap.karmahq.xyz` (Optimism / Arbitrum / Polkadot / Gitcoin / Nouns Accountability Standard)  
> **Padrão On-Chain**: Ethereum Attestation Service (`EAS`) + `MahaGridSBT.sol` (`ERC-5192`)  
> **Objetivo**: Registrar publicamente o perfil do projeto **Maha Grid & The Embassy**, os pacotes de concessão (Grants), o progresso dos milestones e os endossos de Zeladores Humanos e Agentes (**H-A-H Dual Stewardship**).

---

## 1. Project Profile Schema (Cadastro Inicial no KarmaHQ GAP)

Copie os campos abaixo diretamente na criação do projeto em `gap.karmahq.xyz`:

- **Project Title**: `Maha Grid & The Embassy (Web4 Agentic Governance & Phygital Commons)`
- **Project Description**:
  > Maha Grid é um ecossistema *phygital* de governança agêntica estruturado em 9 Ciclos (81 Casas). Combina um jogo de tabuleiro físico-digital (Farcaster Mini App + Standalone Web4 PWA), simulações econômicas em Python (`cadCAD/TokenSpice`) e a **Embassy** — uma câmara diplomática onde humanos e agentes de IA atuam como *Stewards/Zeladores* (`Human-Agent-Human` e `Human-as-a-Service`) para formar coalizões e auditar DAO Proposals.
- **Problem Statement**:
  > Propostas em DAOs sofrem com fragmentação competitiva, baixa participação de eleitores qualificados e falta de prestação de contas padronizada pós-aprovação.
- **Solution Model**:
  > 1. Simulação prévia de propostas no tabuleiro de 81 casas do Maha Grid.
  > 2. Negociação assistida por IA (`H-A-H`) na Embassy para fundir propostas complementares.
  > 3. Acionamento de Zeladores Humanos sob demanda (`HaaS`) para auditoria ética e presencial (*Nodespace Berlim*).
  > 4. Emissão automática de atestações de entrega no KarmaHQ e Soulbound Tokens (`ERC-5192`).
- **Links Oficiais**:
  - **GitHub**: `https://github.com/compilatorum/maha-grid`
  - **Website / Mini-App**: `https://compilatorum.github.io/maha-grid/`

---

## 2. Estrutura de Milestones para Registro no KarmaHQ GAP

### Milestone #1 — Core Simulation Engine, Farcaster Mini-App & Embassy H-A-H Protocol
- **Status**: `Completed ✅`
- **Completion Summary (Proof of Delivery)**:
  - Implementado o motor de simulação de 9 Ciclos em [`simulations/maha_grid_sim.py`](../simulations/maha_grid_sim.py) com relatório automatizado em [`simulations/output/simulation_report.md`](../simulations/output/simulation_report.md).
  - Implementado o motor de negociação de coalizões H-A-H e despacho HaaS em [`src/embassy_agent_engine.py`](../src/embassy_agent_engine.py).
  - Publicado o Mini-App omnicanal ([`index.html`](../index.html)) compatível com Farcaster (`fc:frame` v2) e navegadores externos.
- **Verifiable Links**:
  - `https://github.com/compilatorum/maha-grid/blob/main/simulations/output/simulation_report.md`
  - `https://github.com/compilatorum/maha-grid/blob/main/specs/01-embassy-web4-hah-haas-architecture.md`

### Milestone #2 — Soulbound Attestations (`MahaGridSBT.sol`) & HaaS Playtest Validation
- **Status**: `In Progress 🔄`
- **Target Metrics (KPIs)**:
  - `>= 30` carteiras/FIDs com atestação de participação nos 9 Ciclos.
  - `>= 10` requisições **HaaS (Human-as-a-Service)** concluídas e assinadas por Zeladores Humanos.
  - Índice de Gini de reputação SBT mantido `< 0.25` na simulação e nos playtests reais.

### Milestone #3 — Multi-DAO Coalition Deployment & Nodespace Berlin 2027 Lab
- **Status**: `Planned 📅`
- **Target Metrics (KPIs)**:
  - `>= 5` propostas reais de DAOs articuladas via coalizão na **Embassy** e submetidas a **Questbook**, **Polkadot OpenGov**, **Flows** e **Clanker**.
  - Execução presencial do Node e da SIP no Web3 Summit Berlim.

---

## 3. Payload JSON para Atestação Automatizada via EAS / KarmaHQ SDK

O bot `@maha-embassy-bot` e o script `src/embassy_agent_engine.py` geram exatamente este formato JSON para submissão via KarmaHQ GAP SDK / Ethereum Attestation Service (EAS):

```json
{
  "schema": "karmahq.gap.v2.milestone_update",
  "projectUID": "maha-grid-embassy-web4",
  "grantProgram": "Questbook / W3F / Flows / Clanker Multi-Track",
  "milestoneIndex": 1,
  "title": "Core Simulation Engine, Omnichannel Mini-App & Embassy H-A-H Protocol",
  "status": "COMPLETED",
  "stewardshipModel": {
    "paradigm": "Web4_Dual_Stewardship_HAH_HaaS",
    "aiStewardId": "agent:maha-embassy-steward-v1",
    "humanStewardVerifier": "fid:888888",
    "haasAuditTaskId": "HAAS-2026-001"
  },
  "proofOfWork": {
    "repository": "https://github.com/compilatorum/maha-grid",
    "simulationTelemetry": "simulations/output/telemetry.json",
    "sbtContract": "contracts/MahaGridSBT.sol",
    "metrics": {
      "timestepsSimulated": 24,
      "finalTreasuryDot": 1458.55,
      "reputationGini": 0.2016,
      "coalitionParetoEfficiency": 0.94
    }
  },
  "attestationSignature": "0xSignedByHumanAndAgentStewards_ERC5192_Verified"
}
```
