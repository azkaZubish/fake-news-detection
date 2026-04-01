const TextInputBox = ({ value, setValue, onAnalyze }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter news..."
      />

      <button onClick={onAnalyze}>
        Analyze
      </button>
    </div>
  );
};

export default TextInputBox;