const TextInputBox = ({ value, setValue, onAnalyze }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-xl border-t-4 border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <h2 className="text-lg font-semibold mb-3">
        Enter News Content
      </h2>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter news..."
        className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[140px]"
      />

      <div className="flex justify-between items-center mt-4">

        {/* CLEAR BUTTON */}
        {value && (
          <button
            onClick={() => setValue("")}
            className="text-sm text-gray-500 hover:text-red-600 transition"
          >
            Clear
          </button>
        )}

        {/* ANALYZE BUTTON */}
        <button
          onClick={onAnalyze}
          className="ml-auto px-5 py-2 bg-gradient-to-r from-primary to-green-700 
    hover:scale-105 active:scale-95 
    transition-all duration-200 shadow-md hover:shadow-lg 
    text-white rounded-md"
        >
          Analyze
        </button>

      </div>
    </div>
  );
};

export default TextInputBox;