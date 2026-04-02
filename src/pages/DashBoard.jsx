import TrendingNews from "../components/dashboard/TrendingNews";
import DetectionHistory from "../components/dashboard/DetectionHistory";

const Dashboard = () => {
  return (
    <>
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Overview of news insights</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <TrendingNews />
        <DetectionHistory />
      </div>
      </div>
    </>
  );
};

export default Dashboard;