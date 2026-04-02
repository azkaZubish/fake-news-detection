const ArticleCard = ({ title, tag, score, source, time }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">

      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-md"></div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-green-100 text-primary text-xs px-2 py-1 rounded">
              {tag}
            </span>

            <span className="text-xs text-gray-400">
              {source}
            </span>
          </div>

          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {time}
          </p>
        </div>

        <div className="text-primary font-bold">
          {score}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;