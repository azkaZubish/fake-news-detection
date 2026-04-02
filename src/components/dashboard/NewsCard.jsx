const NewsCard = ({ title, source, status }) => {
  return (
    <div className="bg-white shadow-md p-5 rounded-xl border-l-4 border-primary hover:shadow-xl hover:scale-[1.02] transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm">{source}</p>

      <span
        className={`text-xs px-2 py-1 rounded ${status === "Fake"
            ? "bg-red-100 text-danger"
            : "bg-green-100 text-primary"
          }`}
      >
        {status}
      </span>
    </div>
  );
};

export default NewsCard;