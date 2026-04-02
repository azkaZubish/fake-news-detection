const TextInputBox = ({ value, setValue, onAnalyze }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-xl border-t-4 border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <p className="mb-2 font-medium text-gray-700">
        Enter News Content
      </p>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter news..."
        className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[140px]"
      />

      <button onClick={onAnalyze} className="mt-4 px-5 py-2 bg-gradient-to-r from-primary to-green-700 
hover:scale-105 active:scale-95 
transition-all duration-200 shadow-md hover:shadow-lg text-white rounded-md transition">
        Analyze
      </button>
    </div>
  );
};

export default TextInputBox;