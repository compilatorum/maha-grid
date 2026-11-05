import unittest
from simulations.maha_grid_sim import run_monte_carlo_episode, compute_gini, LADDERS, SNAKES


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


if __name__ == "__main__":
    unittest.main()
