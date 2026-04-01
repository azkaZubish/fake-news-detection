import NewsCard from "./NewsCard";

const TrendingNews = () => {
  const dummyNews = [
    {
      title: "Government launches new scheme",
      source: "News18",
      status: "Real",
    },
    {
      title: "Celebrity shocking viral leak",
      source: "Unknown",
      status: "Fake",
    },
  ];

  return (
    <div>
      <h2 className="text-lg mb-3">Trending News</h2>

      <div className="grid grid-cols-2 gap-4">
        {dummyNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;