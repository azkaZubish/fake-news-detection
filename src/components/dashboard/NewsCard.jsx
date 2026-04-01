const NewsCard = ({ title, source, status }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm">{source}</p>

      <span className="text-sm">{status}</span>
    </div>
  );
};

export default NewsCard;