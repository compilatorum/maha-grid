import unittest
from simulations.maha_grid_sim import run_monte_carlo_episode, compute_gini, LADDERS, SNAKES
from src.embassy_agent_engine import FactionProposal, negotiate_hah_coalition, build_omnifront_export_bundle
from simulations.surfpool_network_sim import (
    instantiate_36_virtual_wallets,
    execute_surfpool_tx_cascade,
    compute_network_science_metrics,
)
from scripts.build_apk import create_signed_apk, build_valid_minimal_dex
from pathlib import Path
import zipfile


class TestMahaGridSimulation(unittest.TestCase):
    def test_board_topology_integrity(self):
        """Garante que Escadas sobem e Serpentes descem dentro dos limites de 1 a 81."""
        for start, (end, _) in LADDERS.items():
            self.assertGreater(end, start)
            self.assertLessEqual(end, 81)
        for start, (end, _) in SNAKES.items():
            self.assertLess(end, start)
            self.assertGreaterEqual(end, 1)

    def test_monte_carlo_determinism_and_metrics(self):
        hist1, ev1 = run_monte_carlo_episode(seed=2027, max_steps=20)
        hist2, ev2 = run_monte_carlo_episode(seed=2027, max_steps=20)
        self.assertEqual(hist1[-1]["treasury_dot"], hist2[-1]["treasury_dot"])
        self.assertEqual(len(ev1), len(ev2))
        self.assertGreater(hist1[-1]["treasury_dot"], 1000.0)
        self.assertGreaterEqual(hist1[-1]["farcaster_traction_score"], 50.0)

    def test_gini_bounds(self):
        self.assertAlmostEqual(compute_gini([10.0, 10.0, 10.0, 10.0]), 0.0, places=5)
        g = compute_gini([1.0, 10.0, 50.0, 100.0])
        self.assertGreater(g, 0.0)
        self.assertLess(g, 1.0)

    def test_embassy_hah_coalition_and_haas_engine(self):
        p_a = FactionProposal(
            faction_id="alpha",
            human_steward="@alice",
            ai_steward="Agent_Alice",
            title="Core Sim",
            requested_budget_usd=15000.0,
            open_source_from_day_one=False,
            haas_allocation_pct=5.0,
            marginal_contribution_score=50.0,
        )
        p_b = FactionProposal(
            faction_id="beta",
            human_steward="@bob",
            ai_steward="Agent_Bob",
            title="Phygital Kit",
            requested_budget_usd=15000.0,
            open_source_from_day_one=True,
            haas_allocation_pct=5.0,
            marginal_contribution_score=50.0,
        )
        res = negotiate_hah_coalition(p_a, p_b)
        self.assertEqual(res.combined_budget_usd, 24000.0)
        self.assertAlmostEqual(sum(res.shapley_split.values()), 1.0, places=4)
        self.assertEqual(len(res.conflicts), 2)
        self.assertGreaterEqual(len(res.haas_tasks), 2)
        bundle = build_omnifront_export_bundle(res)
        self.assertTrue(bundle["omnifront_bot_status"]["farcaster_miniapp_ready"])
        self.assertTrue(bundle["omnifront_bot_status"]["standalone_web_pwa_ready"])

    def test_surfpool_virtual_wallet_graph_and_conservation(self):
        wallets = instantiate_36_virtual_wallets()
        self.assertEqual(len(wallets), 36)
        edges, tx_logs = execute_surfpool_tx_cascade(wallets)
        self.assertEqual(len(tx_logs), 8)
        total_micro = sum(w.balance_usdc_micro for w in wallets.values())
        self.assertEqual(total_micro, 24_000_000_000)
        metrics = compute_network_science_metrics(wallets, edges)
        self.assertGreater(metrics["fiedler_algebraic_connectivity_lambda2"], 0.5)
        self.assertEqual(metrics["sybil_isolation_pct"], 100.0)

    def test_android_apk_package_integrity(self):
        root_dir = Path(__file__).resolve().parent.parent
        apk_path = create_signed_apk(root_dir)
        self.assertTrue(apk_path.exists())
        dex = build_valid_minimal_dex()
        self.assertEqual(dex[:8], b"dex\n035\x00")
        with zipfile.ZipFile(apk_path, "r") as zf:
            names = set(zf.namelist())
            self.assertIn("AndroidManifest.xml", names)
            self.assertIn("classes.dex", names)
            self.assertIn("resources.arsc", names)
            self.assertIn("assets/www/index.html", names)
            self.assertIn("META-INF/MANIFEST.MF", names)


if __name__ == "__main__":
    unittest.main()
