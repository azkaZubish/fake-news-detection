const StatsCard = ({ title, value, change, type }) => {
  const color =
    type === "real"
      ? "text-primary"
      : type === "fake"
      ? "text-danger"
      : "text-yellow-500";

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-2xl font-bold mt-1">{value}</h2>

      <p className={`text-sm mt-2 ${color}`}>
        {change}
      </p>
    </div>
  );
};

export default StatsCard;