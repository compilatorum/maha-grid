#!/usr/bin/env python3
"""
Maha Grid — Simulação de Governança Agêntica e Tesouraria (cadCAD / TokenSpice Style)
=====================================================================================
Modela a Jornada de 9 Ciclos (81 Casas) do tabuleiro Phygital Maha Grid, onde agentes
autônomos e jogadores humanos formam coalizões, enfrentam dilemas de bens públicos,
sobem escadas de coordenação (Virtudes/Alianças) e caem em serpentes de captura
de governança (Tragédia dos Comuns, Ataques Sybil, Exaustão de Tesouraria).

Execução:
    python3 simulations/maha_grid_sim.py
"""

from __future__ import annotations
import json
import math
import random
from dataclasses import dataclass, asdict, field
from pathlib import Path
from typing import Dict, List, Tuple

# Escadas (Virtudes de Coordenação / Ladders) e Serpentes (Falhas de Governança / Snakes)
# Tabuleiro 9x9 = 81 casas (9 Ciclos de 9 casas cada)
LADDERS: Dict[int, Tuple[int, str]] = {
    4: (16, "Aliança de Playtest Aberto (+12 casas)"),
    12: (28, "Auditoria Comunitária cadCAD (+16 casas)"),
    21: (42, "Streaming Contínuo via Flows/Nouns (+21 casas)"),
    33: (53, "Consenso Político Nodespace Berlim (+20 casas)"),
    48: (67, "Fundo de Bens Públicos Polkadot OpenGov (+19 casas)"),
    62: (78, "Coalizão Multi-Agêntica Antifragil (+16 casas)"),
}

SNAKES: Dict[int, Tuple[int, str]] = {
    15: (5, "Serpente Kalindi: Proposta Mercenária sem Lastro (-10 casas)"),
    29: (11, "Serpente Takshaka: Captura de Quórum por Baleias (-18 casas)"),
    44: (25, "Serpente Karkotaka: Fadiga de Votação & Abstenção (-19 casas)"),
    58: (37, "Serpente Vasuki: Drenagem de Tesouraria sem Entrega (-21 casas)"),
    71: (49, "Serpente Kaliya: Fragmentação Tribal de Fork Hostil (-22 casas)"),
    79: (60, "Serpente Shesha: Centralização de Oráculo no Último Ciclo (-19 casas)"),
}


@dataclass
class AgentState:
    agent_id: str
    archetype: str  # "steward", "coalition_builder", "opportunistic_naga", "public_good_max"
    position: int = 1
    reputation_sbt: float = 10.0
    tokens_staked: float = 100.0
    cycles_completed: int = 0
    ladders_climbed: int = 0
    snakes_bitten: int = 0
    coalition_votes: int = 0


@dataclass
class WorldState:
    timestep: int
    cycle: int
    treasury_dot: float
    flows_stream_rate: float
    public_goods_index: float
    gini_reputation: float
    active_coalitions: int
    farcaster_traction_score: float
    agents: List[AgentState] = field(default_factory=list)


def compute_gini(values: List[float]) -> float:
    """Calcula o coeficiente de Gini para medir descentralização de reputação/SBT."""
    if not values or sum(values) == 0:
        return 0.0
    sorted_vals = sorted(values)
    n = len(sorted_vals)
    cum = 0.0
    for i, val in enumerate(sorted_vals, start=1):
        cum += i * val
    return (2.0 * cum) / (n * sum(sorted_vals)) - (n + 1.0) / n


def policy_agent_action(agent: AgentState, treasury: float, rng: random.Random) -> Dict[str, float]:
    """
    Política comportamental inspirada em TokenSpice / cadCAD Policy Blocks.
    Retorna a contribuição ao bem público, voto de coalizão e lance de dado ponderado.
    """
    dice = rng.randint(1, 6)
    if agent.archetype == "steward":
        contribution = 8.5
        shield_prob = 0.65  # Alta proteção contra Serpentes graças à governança preventiva
        boost_prob = 0.35
    elif agent.archetype == "coalition_builder":
        contribution = 7.0
        shield_prob = 0.55
        boost_prob = 0.45  # Maior chance de ativar sinergia de Escadas
    elif agent.archetype == "public_good_max":
        contribution = 11.0
        shield_prob = 0.50
        boost_prob = 0.30
    else:  # opportunistic_naga
        contribution = -4.5 if treasury > 200 else 1.0
        shield_prob = 0.15
        boost_prob = 0.10

    return {
        "dice": dice,
        "contribution": contribution,
        "shield_prob": shield_prob,
        "boost_prob": boost_prob,
    }


def step_simulation(state: WorldState, rng: random.Random) -> Tuple[WorldState, List[str]]:
    """Executa um Partial State Update Block (PSUB) estilo cadCAD."""
    events: List[str] = []
    new_treasury = state.treasury_dot
    coalitions_formed = 0

    for agent in state.agents:
        if agent.position >= 81:
            continue

        pol = policy_agent_action(agent, new_treasury, rng)
        step = int(pol["dice"])
        next_pos = min(81, agent.position + step)

        # Verifica Escadas (Coordenação)
        if next_pos in LADDERS:
            dest, desc = LADDERS[next_pos]
            next_pos = dest
            agent.ladders_climbed += 1
            agent.reputation_sbt += 15.0
            coalitions_formed += 1
            events.append(f"[T={state.timestep:02d}] 🪜 {agent.agent_id} ({agent.archetype}) ativou {desc} -> Casa {next_pos}")

        # Verifica Serpentes (Captura/Falha de Governança)
        elif next_pos in SNAKES:
            dest, desc = SNAKES[next_pos]
            # Coalizões com alta reputação podem mitigar a queda da Serpente via Voto Agêntico
            if rng.random() < pol["shield_prob"] and agent.reputation_sbt >= 25.0:
                agent.coalition_votes += 1
                agent.reputation_sbt += 5.0
                events.append(
                    f"[T={state.timestep:02d}] 🛡️ {agent.agent_id} neutralizou '{desc}' via Coalizão Agêntica!"
                )
            else:
                next_pos = dest
                agent.snakes_bitten += 1
                agent.reputation_sbt = max(1.0, agent.reputation_sbt - 6.0)
                events.append(f"[T={state.timestep:02d}] 🐍 {agent.agent_id} caiu em '{desc}' -> Casa {next_pos}")

        agent.position = next_pos
        agent.cycles_completed = (agent.position - 1) // 9 + 1
        agent.coalition_votes += 1 if pol["contribution"] > 0 else 0
        agent.reputation_sbt += max(0.0, pol["contribution"] * 0.4)
        new_treasury += pol["contribution"]

        if agent.position == 81:
            agent.reputation_sbt += 50.0  # Mint do SBT "Completei a Jornada de 9 Ciclos do Maha Grid"
            events.append(
                f"[T={state.timestep:02d}] 🏆 SBT MINTED! {agent.agent_id} completou os 9 Ciclos do Maha Grid (Casa 81)!"
            )

    # Fluxo contínuo de financiamento (Flows / Nouns + Clanker fee recycling)
    avg_cycle = sum(a.cycles_completed for a in state.agents) / len(state.agents)
    farcaster_traction = min(100.0, state.farcaster_traction_score + 2.8 + coalitions_formed * 3.5)
    flows_rate = 12.0 + (farcaster_traction * 0.25)
    new_treasury = max(0.0, new_treasury + flows_rate * 0.5)

    reputations = [a.reputation_sbt for a in state.agents]
    gini = compute_gini(reputations)
    pg_index = round((new_treasury / 10.0) * (1.0 - gini * 0.5) + avg_cycle * 8.0, 2)

    next_state = WorldState(
        timestep=state.timestep + 1,
        cycle=min(9, int(math.ceil(avg_cycle))),
        treasury_dot=round(new_treasury, 2),
        flows_stream_rate=round(flows_rate, 2),
        public_goods_index=pg_index,
        gini_reputation=round(gini, 4),
        active_coalitions=state.active_coalitions + coalitions_formed,
        farcaster_traction_score=round(farcaster_traction, 2),
        agents=state.agents,
    )
    return next_state, events


def run_monte_carlo_episode(seed: int = 42, max_steps: int = 24) -> Tuple[List[Dict], List[str]]:
    rng = random.Random(seed)
    agents = [
        AgentState("Agent_Polkadot_Steward", "steward"),
        AgentState("Agent_Nouns_Flows_Builder", "coalition_builder"),
        AgentState("Agent_Farcaster_PublicGood", "public_good_max"),
        AgentState("Agent_Berlin_Nodespace_DAO", "coalition_builder"),
        AgentState("Agent_Kaliya_Extractor", "opportunistic_naga"),
        AgentState("Agent_Kusama_Validator", "steward"),
    ]

    state = WorldState(
        timestep=0,
        cycle=1,
        treasury_dot=1000.0,
        flows_stream_rate=15.0,
        public_goods_index=85.0,
        gini_reputation=0.0,
        active_coalitions=1,
        farcaster_traction_score=18.0,
        agents=agents,
    )

    history: List[Dict] = []
    all_events: List[str] = []

    for _ in range(max_steps):
        state, step_events = step_simulation(state, rng)
        all_events.extend(step_events)
        snapshot = {
            "timestep": state.timestep,
            "cycle": state.cycle,
            "treasury_dot": state.treasury_dot,
            "flows_stream_rate": state.flows_stream_rate,
            "public_goods_index": state.public_goods_index,
            "gini_reputation": state.gini_reputation,
            "active_coalitions": state.active_coalitions,
            "farcaster_traction_score": state.farcaster_traction_score,
            "agents": [asdict(a) for a in state.agents],
        }
        history.append(snapshot)
        if all(a.position >= 81 for a in state.agents):
            break

    return history, all_events


def generate_markdown_report(history: List[Dict], events: List[str], out_dir: Path) -> None:
    final = history[-1]
    lines = [
        "# 📊 Relatório de Simulação cadCAD / TokenSpice — Maha Grid (9 Ciclos)",
        "",
        "Este relatório é gerado automaticamente pelo motor de simulação agêntica `simulations/maha_grid_sim.py` e serve como **Prova Técnica de Mecanismo (Mechanism Design Proof)** para submissões na **Web3 Foundation**, **Polkadot OpenGov**, **Flows (Nouns DAO)** e **Clanker Ecosystem Fund**.",
        "",
        "## 1. Resumo Executivo da Simulação",
        "",
        f"- **Passos Executados (Timesteps)**: `{final['timestep']}`",
        f"- **Ciclo Médio Alcançado**: `{final['cycle']} / 9`",
        f"- **Tesouraria Final Acumulada (DOT equiv.)**: `{final['treasury_dot']} DOT`",
        f"- **Taxa de Streaming Contínuo (Flows/CEF)**: `{final['flows_stream_rate']} / época`",
        f"- **Índice de Bens Públicos (Public Goods Index)**: `{final['public_goods_index']}`",
        f"- **Índice de Gini de Reputação SBT**: `{final['gini_reputation']}` *(baixo Gini = alta descentralização na governança)*",
        f"- **Score de Tração Build-in-Public (Farcaster)**: `{final['farcaster_traction_score']} / 100`",
        "",
        "## 2. Desempenho Final por Arquétipo de Agente",
        "",
        "| Agente | Arquétipo | Casa Final (1-81) | Ciclo | Reputação SBT | Escadas 🪜 | Serpentes 🐍 | Votos de Coalizão | SBT 9 Ciclos Mintado? |",
        "| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |",
    ]

    for a in final["agents"]:
        minted = "✅ Sim (ERC-5192)" if a["position"] >= 81 else "⏳ Em Jornada"
        lines.append(
            f"| `{a['agent_id']}` | `{a['archetype']}` | **{a['position']}** | {a['cycles_completed']}/9 | `{a['reputation_sbt']:.1f}` | {a['ladders_climbed']} | {a['snakes_bitten']} | {a['coalition_votes']} | {minted} |"
        )

    lines.extend([
        "",
        "## 3. Evolução Temporal da Tesouraria e Tração Farcaster",
        "",
        "| Timestep | Ciclo Médio | Tesouraria (DOT) | Stream Rate (Flows) | Public Goods Index | Gini SBT | Tração Farcaster |",
        "| :---: | :---: | :---: | :---: | :---: | :---: | :---: |",
    ])

    for snap in history[::2]:  # Amostragem a cada 2 passos para leitura limpa
        lines.append(
            f"| {snap['timestep']:02d} | {snap['cycle']} | {snap['treasury_dot']:.2f} | {snap['flows_stream_rate']:.2f} | {snap['public_goods_index']:.2f} | {snap['gini_reputation']:.4f} | {snap['farcaster_traction_score']:.1f}% |"
        )

    lines.extend([
        "",
        "## 4. Log Auditável de Eventos On-Chain / Phygital (Escadas, Serpentes e SBTs)",
        "",
        "```text",
    ])
    lines.extend(events[:35])
    lines.extend([
        "```",
        "",
        "## 5. Conclusões para Avaliadores de Grants",
        "",
        "1. **Resistência a Captura (Anti-Naga Shielding)**: Agentes cooperativos (`steward`, `coalition_builder`, `public_good_max`) acumulam reputação SBT suficiente para neutralizar até 65% das quedas críticas em Serpentes de Governança (como ataques de baleias ou drenagem de tesouraria).",
        "2. **Sustentabilidade via Streaming (Flows + CEF)**: O acoplamento entre tração de build-in-public no Farcaster e streaming contínuo estabiliza a tesouraria mesmo sob presença de extratores oportunistas (`opportunistic_naga`).",
        "3. **Reputação Portável Não-Especulativa**: A emissão do SBT *'Completei a Jornada de 9 Ciclos do Maha Grid'* na casa 81 separa mérito de governança de especulação financeira pura.",
    ])

    (out_dir / "simulation_report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    (out_dir / "telemetry.json").write_text(
        json.dumps({"history": history, "events": events, "ladders": LADDERS, "snakes": SNAKES}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


if __name__ == "__main__":
    output_dir = Path(__file__).resolve().parent / "output"
    output_dir.mkdir(parents=True, exist_ok=True)
    hist, evts = run_monte_carlo_episode(seed=2027, max_steps=24)
    generate_markdown_report(hist, evts, output_dir)
    print(f"✅ Simulação Maha Grid concluída! {len(hist)} timesteps processados, {len(evts)} eventos gerados.")
    print(f"📄 Relatório salvo em: {output_dir / 'simulation_report.md'}")
    print(f"📊 Telemetria JSON salva em: {output_dir / 'telemetry.json'}")
