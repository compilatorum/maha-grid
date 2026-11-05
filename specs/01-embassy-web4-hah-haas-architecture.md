# 🏛️🤖 Arquitetura Web4 Agêntica: A "Embassy" no Jogo das Coalizões para DAO Proposals

> **Paradigma**: *Web4 Agêntica • Zeladoria Simbiótica (IA + Humanos como Stewards) • Human-Agent-Human (H-A-H) • Human-as-a-Service (HaaS) • Diplomacia de Coalizões para DAO Proposals*

---

## 1. O que é a Web4 Agêntica no Maha Grid?

Enquanto a Web3 introduziu propriedade verificável (tokens, DAOs, contratos inteligentes), a **Web4 Agêntica** introduz **agência autônoma coordenada com responsabilidade humana**. No **Maha Grid**, governar um bem público não é nem uma tecnocracia puramente algorítmica, nem uma burocracia humana lenta sujeita à fadiga de votação (*Serpente Karkotaka*).

O sistema opera sob **Zeladoria Dual (Dual Stewardship)**:
1. **AI Stewards (Zeladores Sintéticos)**: Monitoram tesourarias 24/7, simulam propostas em `cadCAD/TokenSpice`, detectam anomalias de quórum, redigem rascunhos técnicos para *Questbook* e atualizam provas de impacto no *KarmaHQ (GAP)*.
2. **Human Stewards (Zeladores Humanos)**: Atuam como guardiões éticos, articuladores políticos presenciais (ex: *Nodespace Berlim*), validadores de contexto subjetivo e signatários fiduciários de última instância.

---

## 2. Topologia H-A-H (Human-Agent-Human) & HaaS (Human-as-a-Service)

```mermaid
graph LR
    H1[🧑 Humano A<br/>Proponente / Builder] -->|1. Intenção Política| A1[🤖 Agente Embaixador A<br/>AI Steward]
    A1 <-->|2. Negociação de Coalizão<br/>Simulação cadCAD & Matriz de Payoff| A2[🤖 Agente Embaixador B<br/>AI Steward de Outra Facção]
    A2 -->|3. Proposta Otimizada| H2[🧑 Humano B<br/>Delegado / Avaliador DAO]
    
    subgraphEMB["🏛️ THE MAHA EMBASSY (Câmara Diplomática)"]
        A1
        A2
        HAAS[🛎️ Human-as-a-Service - HaaS<br/>Oráculo Ético, Playtest Físico & Assinatura Multisig]
        A1 -->|Requisita Tarefa HaaS + Bounty| HAAS
        A2 -->|Requisita Tarefa HaaS + Bounty| HAAS
    end

    style H1 fill:#e0f2fe,stroke:#0284c7
    style H2 fill:#e0f2fe,stroke:#0284c7
    style A1 fill:#fef3c7,stroke:#d97706
    style A2 fill:#fef3c7,stroke:#d97706
    style HAAS fill:#f3e8ff,stroke:#9333ea
```

### 🔄 Como funciona o fluxo `Human-Agent-Human (H-A-H)`?
Em vez de humanos negociarem diretamente em fóruns fragmentados (gerando ruído e exaustão), cada participante ou sub-DAO possui seu **Agente Embaixador** dentro da **Embassy**:
1. **Humano A → Agente A**: O humano define seus valores, limites orçamentários e objetivos estratégicos (ex: *"Apoio propostas de educação em governança desde que o índice de Gini SBT fique abaixo de 0.25"*).
2. **Agente A ↔ Agente B (Jogo das Coalizões)**: Os agentes simulam dezenas de combinações de emendas, divisão de milestones e alocações de tesouraria no tabuleiro de 81 casas do Maha Grid até encontrarem um **Equilíbrio de Pareto / Nash Cooperativo**.
3. **Agente B → Humano B**: O humano recebe um resumo executivo de 3 linhas (no Farcaster Frame ou Web App fora do Farcaster) com o pacto de coalizão pronto para ratificação em 1 clique.

### 🛎️ Como funciona o `Human-as-a-Service (HaaS)`?
Na Web4 Agêntica, agentes possuem carteiras de tesouraria (Smart Accounts ERC-4337 / Safe) mas **não possuem corpo físico, intuição cultural ou responsabilidade civil presencial**. Quando uma coalizão de agentes chega a um impasse ou precisa de validação no mundo físico, a **Embassy** dispara um chamado **HaaS (Human-as-a-Service)**:

| Tipo de Requisição HaaS | Quem Solicita | O que o Zelador Humano executa | Recompensa / Atestação |
| :--- | :--- | :--- | :--- |
| **`HaaS-01: Arbitragem de Dilema Ético`** | Coalizão de AI Stewards | Desempata uma disputa subjetiva de mérito de bem público que modelos matemáticos não conseguem precificar. | Bounty em USDC/DOT + `+12 SBT` + Atestação KarmaHQ |
| **`HaaS-02: Diplomacia Presencial (Nodespace)`** | Agente Embaixador da DAO | Conduz uma mesa real de playtest no Web3 Summit Berlim, coleta assinaturas NFC e grava depoimento de impacto. | Reembolso logístico + `+25 SBT` + Badge *Embassy Envoy* |
| **`HaaS-03: Curadoria e Auditoria de Milestone`** | Bot de Accountability | Verifica presencialmente ou via chamada de vídeo se um entregável físico/comunitário do *Questbook* foi cumprido. | Taxa de Revisão (Grant Steward Fee) + `+15 SBT` |
| **`HaaS-04: Co-Assinatura Fiduciária (Safe 3/5)`** | Tesouraria Autônoma | Valida a conformidade legal/comunitária antes de liberar uma tranche de financiamento on-chain. | Stipend de Zeladoria + Reputação On-Chain |

---

## 3. Adaptação da "Embassy" para o Jogo das Coalizões em DAO Proposals

A **Embassy (Embaixada do Maha Grid)** é a camada institucional onde o jogo de tabuleiro (9 Ciclos / 81 Casas) se conecta diretamente com propostas reais de governança (**DAO Proposals**).

### 🗺️ Os 4 Salões da Embassy (Mapeados aos 9 Ciclos)

1. **Salão de Admissão & Triagem (Ciclos 1–2 | Casas 01–18)**
   - Propostas brutas entram via Farcaster Cast, formulário Web ou CLI.
   - O *AI Steward* classifica a proposta e verifica se ela é vulnerável à **Serpente Kalindi (Casa 15 — Proposta Mercenária sem Lastro)**.
2. **Câmara de Formação de Coalizões H-A-H (Ciclos 3–5 | Casas 19–45)**
   - Propostas concorrentes mas complementares são convidadas pela Embassy a **fundir escopos** (subindo a **Escada da Casa 21 → 42: Streaming Coordenado**).
   - Agentes calculam o *Shapley Value* de cada membro da coalizão (quanto cada builder ou agente contribui para o sucesso da proposta conjunta).
3. **Tribunal HaaS & Simulação de Impacto (Ciclos 6–7 | Casas 46–63)**
   - Antes de ir à votação na DAO (Polkadot OpenGov, Questbook ou Nouns), a proposta passa pelo teste de estresse em `simulations/maha_grid_sim.py`.
   - Se houver risco de captura (**Serpente Vasuki — Casa 58**), o protocolo aciona um chamado **HaaS** para que 3 Zeladores Humanos auditem o orçamento.
4. **Chancelaria Multi-DAO & Prestação de Contas (Ciclos 8–9 | Casas 64–81)**
   - A proposta aprovada pela coalizão é exportada automaticamente nos formatos nativos de **Questbook**, **KarmaHQ (GAP)**, **Polkadot OpenGov** e **Farcaster Frames**.
   - Ao concluir a entrega do último milestone (Casa 81), tanto os humanos quanto os agentes da coalizão recebem a atestação Soulbound (`MahaGridSBT.sol`).
