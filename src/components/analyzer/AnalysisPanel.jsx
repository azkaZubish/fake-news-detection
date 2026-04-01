const AnalysisPanel = ({ result }) => {
  if (!result) return null;

  return (
    <div>
      <h3>Analysis</h3>

      <p>Word Count: {result.word_count}</p>

      <p>Fake Score: {result.analysis.fake_score}</p>
      <p>Real Score: {result.analysis.real_score}</p>

      <div>
        <strong>Fake Keywords:</strong>
        <ul>
          {result.analysis.fake_keywords.map((word, i) => (
            <li key={i}>{word}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Real Keywords:</strong>
        <ul>
          {result.analysis.real_keywords.map((word, i) => (
            <li key={i}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalysisPanel;