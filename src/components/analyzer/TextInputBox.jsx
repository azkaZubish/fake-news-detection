const TextInputBox = ({ value, setValue, onAnalyze }) => {
  return (
    <div className="bg-white shadow-md p-5 rounded-lg">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter news..."
        className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button onClick={onAnalyze} className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Analyze
      </button>
    </div>
  );
};

export default TextInputBox;