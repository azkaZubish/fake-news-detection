const AnimatedMeter = ({ result, loading }) => {
  if (loading) return <p>Analyzing...</p>;
  if (!result) return <p>No result yet</p>;

  return (
    <div>
      <h2>{result.prediction}</h2>
      <p>Confidence: {result.confidence}%</p>
    </div>
  );
};

export default AnimatedMeter;