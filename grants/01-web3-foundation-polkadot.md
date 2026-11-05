# 🏦 Submissões de Grants de Infraestrutura: Web3 Foundation & Polkadot Treasury (OpenGov)

Este documento contém as propostas estruturadas para a **Frente 3A (Grants de Infraestrutura de Ecossistema)**, posicionando o **Maha Grid** como uma ferramenta de governança agêntica, educação prática para DAOs e banco de testes em `cadCAD/TokenSpice` para mecanismos de tesouraria no ecossistema Polkadot/Kusama.

---

## 1. Aplicação: Web3 Foundation Grants Program (W3F)

### 📌 Título do Projeto
**Maha Grid: Agentic DAO Governance Sandbox, cadCAD/TokenSpice Treasury Simulator & Phygital Public Goods Kit**

### 🎯 Categoria & Alinhamento Estratégico
- **Foco**: Infraestrutura de Governança, Ferramentas de Simulação Econômica para OpenGov e Educação Prática de Ecossistema.
- **Problema no Ecossistema Polkadot/Kusama**: Mecanismos avançados como o *Polkadot OpenGov* (Conviction Voting, Tracks simultâneas, Origins e Gestão de Tesouraria) possuem alta complexidade cognitiva e estão sujeitos a vetores de captura (apatia de eleitores, conluio de baleias e propostas extrativas). Faltam ferramentas acessíveis e simuladores auditáveis onde humanos e agentes de IA possam testar estratégias de coalizão antes de alocar capital real.
- **Nossa Solução (Maha Grid)**:
  1. **Motor de Simulação cadCAD / TokenSpice (`simulations/maha_grid_sim.py`)**: Modela os 9 Ciclos de evolução de uma tesouraria descentralizada sob ação de múltiplos arquétipos de agentes (`Steward`, `Coalition Builder`, `Public Good Maximalist`, `Opportunistic Extractor`).
  2. **Interface Phygital Aberta (Tabuleiro Físico + Farcaster Mini App)**: Transforma equações diferenciais estocásticas de governança em um jogo de 81 casas onde cada "Escada" representa um primitivo de coordenação bem-sucedido e cada "Serpente" modela um vetor real de ataque à tesouraria.
  3. **Passaporte de Reputação Não-Especulativo (`contracts/MahaGridSBT.sol`)**: Emite Soulbound Tokens (ERC-5192) atestando participação comprovada em simulações e playtests (*"Completei a Jornada de 9 Ciclos do Maha Grid"*).

### 🛠️ Marcos de Entrega (Milestones)

| Milestone | Entregáveis Técnicos | Prazo | Orçamento Solicitado |
| :--- | :--- | :---: | :---: |
| **M1 — Core Simulation Engine & Farcaster Mini App** | Motor Python estilo cadCAD/TokenSpice com testes automatizados (`simulations/`), manifesto Farcaster Frame v2 (`public/.well-known/farcaster.json`) e Dashboard interativo open-source sob licença MIT. | Mês 1 | **$10,000 USD** |
| **M2 — Soulbound Attestation Contract & Playtest Telemetry** | Contrato `MahaGridSBT.sol` (ERC-5192), integração de atestações de 9 Ciclos e publicação do 1º Relatório de Impacto de Playtest com dados reais da comunidade Farcaster. | Mês 2 | **$10,000 USD** |
| **M3 — Polkadot OpenGov Kit & Nodespace Berlin Validation** | Apostila multilíngue (PT/EN/DE), arquivos Print-and-Play abertos para qualquer embaixador Polkadot rodar oficinas locais, e execução presencial no Nodespace (Web3 Summit Berlim). | Mês 3 | **$10,000 USD** |
| **TOTAL** | **100% Open Source (MIT / CC-BY-SA 4.0)** | **3 Meses** | **$30,000 USD** |

---

## 2. Proposta de Referendo: Polkadot Treasury (OpenGov)

### 🗳️ Especificação On-Chain da Proposta
- **Track Sugerida**: `Small Spender` / `Medium Spender` (Public Goods & Ecosystem Education)
- **Beneficiário**: Multisig 3/5 dos Stewards do Maha Grid
- **Título do Referendo**: *Referendum: Maha Grid Phygital Governance Lab at Web3 Summit Berlin Nodespace & Open-Source OpenGov Simulation Kit*

### 💡 Justificativa de Retorno para a Tesouraria (ROI de Bem Público)
1. **Onboarding Qualificado para o OpenGov**: Participantes do Web3 Summit Berlim (Nodespace) e usuários do Farcaster aprendem na prática como funcionam quórum, votação de convicção, proteção contra ataques Sybil e responsabilidade fiduciária na tesouraria.
2. **Prova de Tração Prévia (Build-in-Public)**: Diferente de propostas que pedem financiamento para uma ideia abstrata, o Maha Grid chega ao referendo com **repositório ativo, simulação executável, Mini App funcional no Farcaster e histórico público de playtests**.
3. **Material Replicável Globalmente**: Todo o material gráfico do tabuleiro 9x9, cartas de dilemas e scripts de simulação ficam disponíveis gratuitamente para que qualquer coletivo Polkadot realize workshops presenciais em sua cidade.

### 📊 Detalhamento Orçamentário (Oficina Berlim + Kit Aberto)

| Rubrica | Descrição Detalhada | Valor (DOT / USD Eq.) |
| :--- | :--- | :---: |
| **Produção do Kit Phygital (Berlim Nodespace)** | Impressão ecológica de 25 tabuleiros táticos 9x9, 25 baralhos de 54 cartas, apostilas multilíngues (EN/DE/PT) e tags NFC para SBT. | $4,500 |
| **Operação e Coordenação Presencial (Nodespace)** | Logística de oficina, facilitação de 12 sessões documentadas de playtest e execução da SIP no Web3 Summit Berlim. | $6,500 |
| **Desenvolvimento & Telemetria Open-Source** | Manutenção do Farcaster Mini App, indexação de atestações Soulbound e publicação do Relatório Científico de Governança Agêntica. | $7,000 |
| **Total do Referendo OpenGov** | **Bem Público Auditável** | **$18,000 USD** |
