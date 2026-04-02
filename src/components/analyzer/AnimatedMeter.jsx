const AnimatedMeter = ({ result, loading }) => {
  if (loading) return <p>Analyzing...</p>;
  if (!result) return <p>No result yet</p>;

  return (

    <div className="bg-white shadow-lg p-6 rounded-xl border-t-4 border-primary 
animate-fadeIn">
      <h2
        className={`text-xl font-bold ${result.prediction === "Fake News"
          ? "text-danger"
          : result.prediction === "Real News"
            ? "text-primary"
            : "text-yellow-500"
          }`}
      >
        {result.prediction}
      </h2>
      <p>Confidence: {result.confidence}%</p>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Confidence</span>
          <span>{result.confidence}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
          <div
            className={`h-3 rounded-full ${result.prediction === "Fake News"
                ? "bg-danger"
                : result.prediction === "Real News"
                  ? "bg-primary"
                  : "bg-yellow-500"
              }`}
            style={{ width: `${result.confidence}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMeter;