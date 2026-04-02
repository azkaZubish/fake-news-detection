const StatsCard = ({ title, value, type }) => {
  const color =
    type === "real"
      ? "text-green-600"
      : type === "fake"
      ? "text-red-600"
      : "text-gray-800";

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className={`text-2xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </div>
  );
};

export default StatsCard;