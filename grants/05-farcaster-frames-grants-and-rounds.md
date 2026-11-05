# 🟣 Modelo para Farcaster Frames Grants, Rounds.wtf, Bountycaster & Base Builds

> **Canais e Programas Alvo**: `Rounds.wtf`, `Bountycaster`, `Purple DAO`, `Flows.wtf`, `Clanker Ecosystem Fund (CEF)`, `Base Builds`  
> **Diferencial**: Propostas e prestações de contas nativas em **Farcaster Frames v2 / Mini Apps**, onde a própria comunidade vota, testa a coalizão **H-A-H** e aceita micro-tarefas **HaaS (Human-as-a-Service)** sem sair do feed.

---

## 1. Modelo de Submissão para Rodadas no Farcaster (`Rounds.wtf` / `/grants` / `/build`)

Copie e publique o Cast abaixo (com a URL do Mini-App anexada como embed para renderizar o Frame interativo):

```text
🏛️🐍 [SUBMISSÃO DE GRANT / BUILD-IN-PUBLIC] Maha Grid & The Embassy (Web4 Agêntica)

Construímos um Sistema Operacional Phygital de Governança em 9 Ciclos (81 Casas) onde Humanos e Agentes de IA atuam como Stewards/Zeladores:

1️⃣ Protocolo H-A-H (Human-Agent-Human): Seu Agente Steward negocia fusões de propostas e coalizões de DAO na Embassy antes do voto on-chain.
2️⃣ Human-as-a-Service (HaaS): Agentes contratam humanos via bounties para arbitragem ética e playtests presenciais (Nodespace Berlim).
3️⃣ Simulação cadCAD/TokenSpice + SBT ERC-5192 não-especulativo.

🎮 Jogue no Frame abaixo (funciona dentro e fora do Farcaster):
🔗 https://compilatorum.github.io/maha-grid/
📦 Código MIT/CC0: https://github.com/compilatorum/maha-grid

cc @web3foundation @polkadot @flows /build /dao /gaming
```

---

## 2. Modelo de Bounty HaaS (`Human-as-a-Service`) via `@bountycaster`

Quando um **AI Steward** na Embassy detecta um impasse de governança (ex: *Casa 58 — Serpente Vasuki*) ou precisa de um facilitador humano presencial, o bot publica automaticamente este formato compatível com o **Bountycaster**:

```text
@bountycaster create
🛎️ [HaaS Request #04 — The Maha Embassy] Auditoria Humana de Coalizão & Playtest Phygital

Nosso AI Steward simulou a fusão das propostas #PROP-07 e #PROP-12 no Ciclo 6 do Maha Grid, mas detectou um conflito ético de prioridade sobre abertura de dados.

Precisamos de 3 Zeladores Humanos (Human Stewards) para:
1. Revisar o transcript da negociação H-A-H no Mini-App da Embassy.
2. Votar no desempate ético e assinar a atestação KarmaHQ GAP.

💰 Recompensa: 50 USDC + 15 Reputação SBT (ERC-5192)
🔗 Abrir na Embassy: https://compilatorum.github.io/maha-grid/#embassy
```

---

## 3. Especificação dos 4 Frames Interativos de Governança (`fc:frame` JSON Specs)

### Frame A — Frame Diário do Tabuleiro (9 Ciclos / 81 Casas)
```json
{
  "version": "next",
  "imageUrl": "https://raw.githubusercontent.com/compilatorum/maha-grid/main/public/og-frame.svg",
  "button": {
    "title": "🐍 Jogar Frame Diário & Embassy Web4",
    "action": {
      "type": "launch_frame",
      "name": "Maha Grid & The Embassy",
      "url": "https://compilatorum.github.io/maha-grid/",
      "splashImageUrl": "https://raw.githubusercontent.com/compilatorum/maha-grid/main/public/og-frame.svg",
      "splashBackgroundColor": "#0b0f19"
    }
  }
}
```

### Frame B — Frame de Negociação H-A-H na Embassy (Coalition Merger)
Permite que dois proponentes aceitem os termos negociados pelos seus respectivos *AI Stewards* diretamente no feed:
```json
{
  "frame_type": "embassy_hah_ratification",
  "proposal_coalition_id": "COAL-2027-01",
  "summary_for_voters": [
    "Fusão de escopo reduz orçamento total em 18% sem corte de entregáveis.",
    "Divisão Shapley: 45% Equipe A | 35% Equipe B | 12% Pool HaaS | 8% Infra Agêntica.",
    "Índice de Gini de Reputação projetado: 0.19 (Aprovado pelo Escudo Anti-Takshaka)."
  ],
  "actions": [
    { "index": 1, "label": "🤝 Ratificar Coalizão (H-A-H)", "type": "post_redirect" },
    { "index": 2, "label": "🛎️ Chamar Oráculo Humano (HaaS)", "type": "post" },
    { "index": 3, "label": "📊 Ver Telemetria cadCAD", "type": "link", "target": "https://compilatorum.github.io/maha-grid/" }
  ]
}
```
