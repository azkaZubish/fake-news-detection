import TrendingNews from "../components/dashboard/TrendingNews";
import DetectionHistory from "../components/dashboard/DetectionHistory";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <TrendingNews />
      <DetectionHistory />
    </div>
  );
};

export default Dashboard;