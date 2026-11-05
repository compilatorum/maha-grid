# 🏛️🐍 Maha Grid & The Embassy — Governança Web4 Agêntica, H-A-H, HaaS & Jogo Phygital (9 Ciclos)

> **Bem Público Financiável (Web3 + Web4 Agêntica)**: *Onde IA e Humanos atuam como Stewards/Zeladores (`Human-Agent-Human` e `Human-as-a-Service`) no Jogo das Coalizões para DAO Proposals — operando dentro e fora do Farcaster, validado presencialmente no Nodespace (Web3 Summit Berlim 2027) e estruturado para Questbook, KarmaHQ (GAP), Web3 Foundation, Polkadot OpenGov, Flows (Nouns DAO) e Clanker Ecosystem Fund.*

---

## 🗺️ 1. Visão Macro & Topologia Web4 Agêntica (The Embassy)

```mermaid
graph TD
    A[💡 Ideia, Tabuleiro 9x9 & Protótipo Físico] --> B{🤖 Mini-App & Bot Omnicanal<br/>Dentro e Fora do Farcaster}
    A --> D[🧩 Nodespace Web3 Summit<br/>Berlim 2027 + SIP]
    
    B --> E[🏛️ THE MAHA EMBASSY<br/>Jogo das Coalizões Web4]
    D --> E
    
    subgraph EMBASSY_CORE["🤝 Zeladoria Dual: IA + Humanos como Stewards"]
        E --> HAH[🔄 Protocolo H-A-H<br/>Human-Agent-Human Negotiation]
        E --> HAAS[🛎️ Protocolo HaaS<br/>Human-as-a-Service Bounties]
    end

    HAH --> F[💰 Propostas de Coalizão & Accountability]
    HAAS --> F

    F --> G[📘 Questbook<br/>Domain Allocator Grants]
    F --> K[🛡️ KarmaHQ GAP<br/>On-Chain Attestations]
    F --> W[🏦 Web3 Foundation &<br/>Polkadot OpenGov]
    F --> N[🌊 Flows / Nouns DAO &<br/>🦄 Clanker Ecosystem Fund]
    F --> FCF[🟣 Farcaster Frames Grants &<br/>Bountycaster / Rounds.wtf]
```

---

## 📂 2. Mapa Completo de Documentos, Modelos de Grants e Specs

### 🧠 Especificações Web4 Agêntica, Embassy, Bot & Mini-App (Dentro e Fora do Farcaster)
| Arquivo | Descrição |
| :--- | :--- |
| [`specs/01-embassy-web4-hah-haas-architecture.md`](./specs/01-embassy-web4-hah-haas-architecture.md) | Arquitetura da **Embassy** adaptada para o Jogo das Coalizões em DAO Proposals: Zeladoria Dual (AI + Human Stewards), fluxo **H-A-H (`Human-Agent-Human`)** e marketplace **HaaS (`Human-as-a-Service`)**. |
| [`specs/02-omnifront-bot-and-miniapp-spec.md`](./specs/02-omnifront-bot-and-miniapp-spec.md) | Especificação completa do **`@maha-embassy-bot`** e do **Mini-App Omnicanal** com paridade dentro do Farcaster (`fc:frame` v2, Neynar webhooks) e fora do Farcaster (Standalone Web4 PWA, Telegram/Discord, REST & MCP Server). |
| [`src/embassy_agent_engine.py`](./src/embassy_agent_engine.py) | Motor executável em Python da **Embassy**: negociação H-A-H entre AI Stewards, detecção de conflitos, divisão pelo *Valor de Shapley*, despacho de tarefas HaaS e exportação JSON em [`simulations/output/embassy_coalition_bundle.json`](./simulations/output/embassy_coalition_bundle.json). |

### 💰 Modelos de Documentos para Grants, Questbook, KarmaHQ, Farcaster Frames & DAO Proposals
| Arquivo | Plataforma / Protocolo Alvo |
| :--- | :--- |
| [`grants/01-web3-foundation-polkadot.md`](./grants/01-web3-foundation-polkadot.md) | **Web3 Foundation Grants** ($30k em 3 milestones) & **Polkadot Treasury OpenGov Referendum** ($18k para Oficina Berlim + Kit Aberto). |
| [`grants/02-flows-nouns-and-clanker.md`](./grants/02-flows-nouns-and-clanker.md) | **Flows.wtf (Nouns DAO)** (streaming contínuo CC0) & **Clanker Ecosystem Fund (CEF)** (reciclagem de taxas Farcaster). |
| [`grants/03-questbook-grant-application.md`](./grants/03-questbook-grant-application.md) | **Questbook (DDA Model — Arbitrum / Compound / Polygon)**: rubrica de avaliação 5/5, KPIs verificáveis e orçamento detalhado por milestone. |
| [`grants/04-karmahq-gap-profile-and-milestones.md`](./grants/04-karmahq-gap-profile-and-milestones.md) | **KarmaHQ — GAP (Grantee Accountability Protocol)**: schema completo do projeto, status dos milestones e payload JSON de atestação EAS / Soulbound. |
| [`grants/05-farcaster-frames-grants-and-rounds.md`](./grants/05-farcaster-frames-grants-and-rounds.md) | **Farcaster Frames Grants (`Rounds.wtf`, `Bountycaster`, `Purple DAO`, `Base Builds`)**: templates de Casts, bounties HaaS e JSON dos Frames de ratificação de coalizão. |
| [`grants/06-embassy-dao-coalition-proposal-template.md`](./grants/06-embassy-dao-coalition-proposal-template.md) | **Modelo Oficial de DAO Proposal da Embassy**: Resumo de 3 pontos para votantes, auditoria de conflitos H-A-H, tabela de Valor de Shapley e assinaturas de Zeladoria Dual. |

### 🎲 Jogo Phygital, Simulação cadCAD/TokenSpice, Contratos SBT & Nodespace Berlim
| Arquivo | Descrição |
| :--- | :--- |
| [`index.html`](./index.html) | **Mini-App Interativo (In & Out Farcaster)**: Tabuleiro 9x9 (81 casas), Câmara Diplomática da Embassy (H-A-H / HaaS), exportador de templates (Questbook/KarmaHQ/Frames/Bot) e cunhagem SBT. |
| [`simulations/maha_grid_sim.py`](./simulations/maha_grid_sim.py) | Simulador estocástico estilo `cadCAD/TokenSpice` dos 9 Ciclos + relatório gerado em [`simulations/output/simulation_report.md`](./simulations/output/simulation_report.md). |
| [`contracts/MahaGridSBT.sol`](./contracts/MahaGridSBT.sol) | Contrato **Soulbound Token (ERC-5192)** para emissão da atestação não-transferível *"Completei a Jornada de 9 Ciclos do Maha Grid"*. |
| [`docs/rulebook-maha-grid.md`](./docs/rulebook-maha-grid.md) | Apostila Multilíngue (PT-BR / EN / DE) dos 9 Ciclos, 6 Escadas, 6 Serpentes e Diário de Bordo. |
| [`nodespace-berlin/01-nodespace-playbook-and-sip.md`](./nodespace-berlin/01-nodespace-playbook-and-sip.md) | E-mail para `contact@web3summit.com`, setup do Node físico e proposta de **SIP (Summit Improvement Proposal)**. |
| [`roadmap/90-day-execution-plan.md`](./roadmap/90-day-execution-plan.md) | Cronograma tático de 90 dias (Semanas 1–2, Semanas 3–4, Mês 2 e Mês 3). |

---

## 🚀 Como Executar e Testar Tudo Localmente

```bash
# 1. Rodar a simulação cadCAD/TokenSpice dos 9 Ciclos:
python3 simulations/maha_grid_sim.py

# 2. Rodar o motor de negociação H-A-H e despacho HaaS da Embassy:
python3 src/embassy_agent_engine.py

# 3. Executar a suíte completa de testes unitários (Tabuleiro + Simulação + Embassy H-A-H/HaaS):
python3 -m unittest discover -s simulations -p 'test_*.py'

# 4. Iniciar o Mini-App Omnicanal na porta 3000:
npm run dev
```

---

## 📜 Licença

Código e motores de simulação sob licença **MIT**; artefatos culturais, apostila multilíngue e templates da Embassy sob **CC0 / CC-BY-SA 4.0**.
