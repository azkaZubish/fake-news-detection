import { useEffect, useState } from "react";
import StatsGrid from "../components/dashboard/StatsGrid";
import DetectionHistory from "../components/dashboard/DetectionHistory";

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    real: 0,
    fake: 0,
    uncertain: 0,
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(stored);

    const total = stored.length;
    const real = stored.filter(
      (item) => item.result === "Real News"
    ).length;

    const fake = stored.filter(
      (item) => item.result === "Fake News"
    ).length;

    const uncertain = stored.filter(
      (item) => item.result === "Uncertain News"
    ).length;

    setStats({ total, real, fake, uncertain });

  }, []);

  return (
    <div className="animate-fadeIn">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Monitor and analyze news articles
        </p>
      </div>

      <StatsGrid stats={stats} />

      <div className="mt-6">
        <DetectionHistory history={history} />
      </div>

    </div>
  );
};

export default Dashboard;