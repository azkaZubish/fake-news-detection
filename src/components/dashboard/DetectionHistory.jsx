const DetectionHistory = ({ history = [] }) => {
  return (
    <div>
      <h2 className="text-lg mb-3">Detection History</h2>

      {history.length === 0 ? (
        <p>No history yet</p>
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