const DetectionHistory = ({ history = [] }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-primary">
      <h2 className="text-lg font-semibold mb-4">
        Detection History
      </h2>

      {history.length === 0 ? (
        <p className="text-gray-400 italic text-center mt-4">
          No history yet — start analyzing news 🚀
        </p>
      ) : (
        history.map((item, index) => (
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded mb-2">
            <span className="text-sm">{item.text}</span>

            <span className={`text-xs px-2 py-1 rounded ${item.result === "Fake"
                ? "bg-red-100 text-danger"
                : "bg-green-100 text-primary"
              }`}>
              {item.result}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default DetectionHistory;