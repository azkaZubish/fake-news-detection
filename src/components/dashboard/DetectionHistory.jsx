const DetectionHistory = ({ history = [] }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-primary">
      <h2 className="text-lg font-semibold mb-4">
        Detection History
      </h2>

      {history.length === 0 ? (
        <p className="text-gray-400 text-center mt-4">
          No history yet
        </p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start bg-gray-50 p-4 rounded-lg mb-3 border"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 line-clamp-2">
                {item.text}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {item.date}
              </p>
            </div>

            <span
              className={`text-xs px-3 py-1 rounded-full ml-4 ${item.result === "Fake News"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
                }`}
            >
              {item.result}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default DetectionHistory;