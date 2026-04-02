import StatsGrid from "../components/dashboard/StatsGrid";
import RecentArticles from "../components/dashboard/RecentArticles";
import DetectionHistory from "../components/dashboard/DetectionHistory";

const Dashboard = () => {
  return (
    <div className="animate-fadeIn">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Monitor and analyze news articles
        </p>
      </div>

      <StatsGrid />

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="md:col-span-2">
          <RecentArticles />
        </div>

        <DetectionHistory />

      </div>
    </div>
  );
};

export default Dashboard;