import StatsCard from "./StatsCard";

const StatsGrid = ({ stats }) => {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-6">

      <StatsCard
        title="Total Analyzed"
        value={stats.total}
      />

      <StatsCard
        title="Real News"
        value={stats.real}
        type="real"
      />

      <StatsCard
        title="Fake News"
        value={stats.fake}
        type="fake"
      />

      <StatsCard
        title="Uncertain"
        value={stats.uncertain}
      />

    </div>
  );
};

export default StatsGrid;