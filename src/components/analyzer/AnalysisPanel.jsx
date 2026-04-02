const AnalysisPanel = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <h3 className="text-lg font-semibold mb-4 border-b pb-2">
        Analysis Breakdown
      </h3>

      <div className="grid grid-cols-3 gap-4 text-center mb-4">
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm text-gray-500">Words</p>
          <p className="font-semibold">{result.word_count}</p>
        </div>

        <div className="bg-red-50 p-3 rounded">
          <p className="text-sm text-danger">Fake Score</p>
          <p className="font-semibold">{result.analysis.fake_score}</p>
        </div>

        <div className="bg-green-50 p-3 rounded">
          <p className="text-sm text-primary">Real Score</p>
          <p className="font-semibold">{result.analysis.real_score}</p>
        </div>
      </div>

      <div>
        <strong>Fake Keywords:</strong>
        <ul>
          {result.analysis.fake_keywords.map((word, i) => (
            <li
              key={i}
              className="inline-block bg-red-100 text-danger px-2 py-1 rounded text-sm mr-2 mt-2"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Real Keywords:</strong>
        <ul>
          {result.analysis.real_keywords.map((word, i) => (
            <li key={i} className="inline-block bg-green-100 text-primary px-2 py-1 rounded text-sm mr-2 mt-2">{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalysisPanel;