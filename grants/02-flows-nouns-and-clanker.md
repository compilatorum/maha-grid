# 🌊 Grants Nativos e Contínuos: Flows (Nouns DAO) & Clanker Ecosystem Fund (CEF)

Este documento estrutura a **Frente 3B (Grants Nativos e Contínuos no Farcaster/Base/Nouns)**, desenhada para capturar financiamento em streaming contínuo via **Flows.wtf (Nouns DAO)** e reciclagem de taxas de protocolo via **Clanker Ecosystem Fund (CEF)**.

---

## 1. Aplicação: Flows (Nouns DAO Continuous Grants)

### ⌐◨-◨ Posicionamento Cultural e Técnico
O **Flows** combina streaming de dinheiro em tempo real (Superfluid/Base), listas curadas por tokens (TCRs) e prova social nativa no **Farcaster** para financiar *builders* que geram impacto contínuo e verificável.

### 🎯 Pitch para Curadores Nouns / Flows
- **Nome da Aplicação no Flows**: `Maha Grid — Phygital Public Goods & Nounish Governance Board Game`
- **Resumo de 1 Linha**: Um jogo de tabuleiro *phygital* aberto (9 Ciclos / 81 Casas) e Mini App no Farcaster que ensina coordenação de bens públicos e governança DAO de forma divertida, visual e auditável.
- **Por que o Maha Grid é profundamente Nounish (⌐◨-◨)?**
  1. **CC0 / Domínio Público**: As regras, cartas, arte das Escadas/Serpentes e motor de simulação são abertos para remixagem livre pela comunidade Nouns.
  2. **Build-in-Public Diário no Farcaster**: A cada ciclo de design e playtest, publicamos atualizações visuais, enquetes interativas no Frame Diário e métricas abertas nos canais `/nouns`, `/flows`, `/build` e `/dao`.
  3. **Artefato Físico + Digital**: Assim como óculos Nouns físicos conectam eventos presenciais à governança on-chain, o tabuleiro físico do Maha Grid no **Nodespace (Web3 Summit Berlim)** leva a cultura de financiamento de bens públicos contínuos para mesas presenciais globais.

### 📈 Metas de Streaming Mensal (Flows Milestones)
- **Fluxo Inicial ($500 – $1,500/mês)**: Manutenção do Frame Diário no Farcaster, 1 enquete comunitária por semana para co-criar cartas do baralho e 2 playtests abertos mensais.
- **Fluxo Escalado ($2,500+/mês)**: Produção de tiragem física *Nounish Edition* do tabuleiro Maha Grid com óculos Noggles nas Escadas de Bens Públicos e distribuição para hackerspaces parceiros.

---

## 2. Aplicação: Clanker Ecosystem Fund (CEF)

### 🦄 Alinhamento com o Clanker Ecosystem Fund
O **Clanker Ecosystem Fund (CEF)** recicla taxas de protocolo em grants diretos e infraestrutura para criadores e desenvolvedores que constroem experiências nativas no **Farcaster**. Como o **Maha Grid** utiliza o Farcaster não apenas para divulgação, mas como seu **Sistema Operacional de Jogo e Coordenação**, ele se encaixa diretamente na tese do fundo.

### 🛠️ Arquitetura Farcaster-First do Maha Grid
1. **Mini App / Frame v2 Nativo (`public/.well-known/farcaster.json`)**:
   - Construído sobre o padrão oficial de Mini Apps do Farcaster e compatível com o kit da Neynar (`npx @neynar/create-farcaster-mini-app@latest`).
   - Permite que qualquer usuário no feed jogue o **"Desafio Diário de Governança"**, lance o dado D6, vote em coalizões para neutralizar Serpentes e acompanhe o contador de cartas desenhadas sem sair do cliente Farcaster.
2. **Tokenização Não-Especulativa & Reputação Portável (`MahaGridSBT.sol`)**:
   - Em vez de lançar tokens puramente especulativos que exaurem a atenção da comunidade, o Maha Grid usa o Farcaster FID como âncora de identidade para cunhar **Soulbound Tokens (ERC-5192)** de mérito: *"Completei a Jornada de 9 Ciclos do Maha Grid"*.
   - Esses SBTs destravam poder de voto na governança do próprio jogo e servem como atestação on-chain de alta reputação para o ecossistema Farcaster.
3. **Ciclo de Retenção Social (Viral Loop nos Feeds)**:
   - Cada vez que um jogador cai em uma Serpente crítica (ex: *Casa 58 — Serpente Vasuki*), o Mini App gera um Cast compartilhável convocando amigos do canal `/gaming` ou `/dao` para co-assinarem o **Escudo de Coalizão**, gerando engajamento orgânico diário no protocolo Farcaster.

### 💰 Uso dos Recursos do Grant CEF ($15,000 USD)
- **40% ($6,000)**: Infraestrutura de Webhook Neynar, patrocínio de gas (Paymaster Base) para cunhagem gratuita dos SBTs de 9 Ciclos pelos jogadores do Farcaster.
- **35% ($5,250)**: Desenvolvimento de novos modos de jogo multi-player síncronos entre canais do Farcaster (ex: `/polkadot` vs `/nouns` em torneios cooperativos de tesouraria).
- **25% ($3,750)**: Documentação aberta e templates para que outros criadores de jogos de tabuleiro migrem suas mecânicas para Farcaster Mini Apps.
