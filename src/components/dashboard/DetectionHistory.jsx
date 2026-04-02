const DetectionHistory = ({ history = [] }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-l-4 border-primary">
      <h2 className="text-lg mb-3">Detection History</h2>

      {history.length === 0 ? (
        <p className="text-gray-400 italic text-center mt-4">
          No history yet — start analyzing news 🚀
        </p>
      ) : (
        history.map((item, index) => (
          <div key={index}>
            {item.text} → {item.result}
          </div>
        ))
      )}
    </div>
  );
};

export default DetectionHistory;