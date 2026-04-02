import StatsCard from "./StatsCard";

const StatsGrid = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-6">
      <StatsCard title="Total Analyzed" value="2847" change="+12.5%" />
      <StatsCard title="Verified True" value="1924" change="+8.2%" type="real" />
      <StatsCard title="Detected Fake" value="689" change="-3.1%" type="fake" />
      <StatsCard title="Requires Review" value="234" change="+5.7%" />
    </div>
  );
};

export default StatsGrid;