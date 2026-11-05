# 📋 Modelo de Aplicação: Questbook (Domain Allocator Model — Arbitrum / Compound / Polygon)

> **Plataforma Alvo**: `Questbook.app` (Delegated Domain Allocators — DDA)  
> **Domínio Recomendado**: *New Protocols & Ideas / Developer Tooling / Governance & Public Goods Simulator*  
> **Projeto**: **Maha Grid & The Embassy — Web4 Agentic Governance, H-A-H Coalition Engine & Phygital Sandbox**

---

## 1. Cabeçalho Padrão Questbook (Application Metadata)

| Campo no Questbook | Preenchimento Oficial (Pronto para Copiar) |
| :--- | :--- |
| **Project Title** | `Maha Grid & The Embassy: Web4 H-A-H (Human-Agent-Human) Coalition Sandbox for DAO Proposals` |
| **Applicant Name / Team** | `Maha Grid Steward Collective (Human + AI Dual Stewardship)` |
| **Funding Requested** | `$25,000 USDC` (Distribuído em 3 Milestones Auditáveis via KarmaHQ GAP) |
| **GitHub Repository** | `https://github.com/compilatorum/maha-grid` |
| **Live Mini-App / Demo** | `https://compilatorum.github.io/maha-grid/` (Funciona dentro e fora do Farcaster) |
| **KarmaHQ GAP Profile** | Integrado via `grants/04-karmahq-gap-profile-and-milestones.md` |

---

## 2. Resumo Executivo (Abstract)

As DAOs modernas sofrem com duas falhas simétricas: **fadiga humana de votação** (*Serpente Karkotaka*) e **propostas isoladas/competitivas que fragmentam a tesouraria** (*Serpente Kaliya*).

O **Maha Grid & The Embassy** introduz um protocolo de **Web4 Agêntica** onde humanos e agentes de IA atuam juntos como **Stewards (Zeladores)** em um jogo estruturado de **9 Ciclos (81 casas)**:
1. **Protocolo H-A-H (`Human-Agent-Human`)**: Cada proponente delega seus parâmetros ao seu *AI Steward*. Na **Embassy (Câmara Diplomática)**, os agentes negociam fusões de propostas concorrentes, resolvem conflitos de termos e geram coalizões de soma positiva antes da votação on-chain.
2. **Protocolo HaaS (`Human-as-a-Service`)**: Quando agentes enfrentam dilemas éticos subjetivos ou precisam de validação no mundo físico (ex: playtests presenciais no *Nodespace Berlim*), o protocolo contrata **Zeladores Humanos sob demanda** via micro-bounties auditáveis.
3. **Motor cadCAD / TokenSpice & Soulbound Reputation**: Simula o impacto financeiro na tesouraria e emite SBTs não-especulativos (`ERC-5192`) para participantes que completam os 9 Ciclos.

---

## 3. Alinhamento com a Rubrica do Domain Allocator (Questbook Evaluation Rubric)

| Critério da Rubrica Questbook | Como o Maha Grid & Embassy Pontua Nota Máxima (5/5) |
| :--- | :--- |
| **1. Clareza de Escopo & Entregáveis** | Código open-source já operacional (`simulations/maha_grid_sim.py`, `src/embassy_agent_engine.py`, `contracts/MahaGridSBT.sol`), com métricas quantitativas por milestone. |
| **2. Redução de Fricção na Governança da DAO** | O módulo `Steward H-A-H` sintetiza debates longos em resumos de 3 pontos para votantes e identifica conflitos e acordos automaticamente antes do snapshot/on-chain vote. |
| **3. Sustentabilidade & Reutilização (Public Good)** | Qualquer track do Questbook pode usar a **Embassy** para fundir propostas duplicadas de candidatos em uma única coalizão eficiente (alocação baseada em *Shapley Value*). |
| **4. Accountability On-Chain** | Cada entrega de milestone gera automaticamente o payload para o **KarmaHQ (GAP)** e cunha atestação Soulbound. |

---

## 4. Estrutura de Milestones, KPIs e Orçamento (Questbook Milestone Table)

### 🔹 Milestone 1: Motor H-A-H da Embassy & Mini-App Omnicanal (Dentro e Fora do Farcaster)
- **Prazo**: Semana 1 a Semana 4 (Mês 1)
- **Valor Solicitado**: `$8,000 USDC`
- **Entregáveis Técnicos**:
  1. Motor `src/embassy_agent_engine.py` com negociação automatizada entre *AI Stewards*, detecção de conflitos (`alta`/`media`/`baixa`) e cálculo de divisão de recursos (*Shapley Split*).
  2. Mini-App e Bot (`@maha-embassy-bot`) operando em modo dual: nativo no Farcaster (`fc:frame` v2) e standalone Web PWA fora do Farcaster.
- **Critério de Aceitação (Definition of Done)**:
  - Repositório público com testes passando (`python3 -m unittest`) e 15 simulações de coalizão H-A-H documentadas.

### 🔹 Milestone 2: Marketplace HaaS (Human-as-a-Service) & Contratos SBT ERC-5192
- **Prazo**: Semana 5 a Semana 8 (Mês 2)
- **Valor Solicitado**: `$9,000 USDC`
- **Entregáveis Técnicos**:
  1. Deploy do contrato `contracts/MahaGridSBT.sol` em testnet/L2 (Arbitrum/Base/Optimism) com suporte a atestações de *Human Stewards*.
  2. Dispatcher de tarefas **HaaS** permitindo que agentes requisitem arbitragem ética, auditoria de entregáveis e validação de playtest físico por Zeladores Humanos.
  3. Execução de 3 sessões documentadas de Playtest do Jogo das Coalizões (mínimo 25 participantes únicos).
- **Critério de Aceitação (Definition of Done)**:
  - Hash das transações de mint dos SBTs + Relatório de Impacto de Playtest publicado no repositório e no KarmaHQ.

### 🔹 Milestone 3: Integração Direta com Propostas Reais da DAO & Kit Phygital Nodespace
- **Prazo**: Semana 9 a Semana 12 (Mês 3)
- **Valor Solicitado**: `$8,000 USDC`
- **Entregáveis Técnicos**:
  1. Adaptador de exportação 1-clique que converte acordos de coalizão da Embassy diretamente em formulários **Questbook**, **KarmaHQ GAP** e **OpenGov/Snapshot**.
  2. Publicação da Apostila Multilíngue (PT/EN/DE) e Kit Print-and-Play para oficinas presenciais (*Nodespace Web3 Summit Berlim*).
- **Critério de Aceitação (Definition of Done)**:
  - Pelo menos 5 propostas reais de comunidade processadas pelo funil de coalizão da Embassy com feedback auditado pelos Domain Allocators.
