import { useEffect, useState } from "react";
import StatsGrid from "../components/dashboard/StatsGrid";
import DetectionHistory from "../components/dashboard/DetectionHistory";

const DashBoard = () => {
  const [history, setHistory] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    real: 0,
    fake: 0,
    uncertain: 0,
  });

  useEffect(() => {
     fetch('${import.meta.env.VITE_API_URL}/history')
      .then(res => res.json())
      .then(data => setHistory(data));
  }, [])

  useEffect(() => {
    // const stored = JSON.parse(localStorage.getItem("history")) || [];
    // setHistory(stored);

    const total = history.length;
    const real = history.filter(
      (item) => item.prediction === "Real News"
    ).length;

    const fake = history.filter(
      (item) => item.prediction === "Fake News"
    ).length;

    const uncertain = history.filter(
      (item) => item.prediction === "Uncertain News"
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

export default DashBoard;