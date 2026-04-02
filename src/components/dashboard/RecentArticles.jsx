import ArticleCard from "./ArticleCard";

const RecentArticles = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Recent Articles
      </h2>

      <div className="space-y-4">
        <ArticleCard
          title="Global Climate Summit Reaches Historic Agreement"
          tag="Verified"
          score="94"
          source="Reuters"
          time="2 hours ago"
        />
      </div>
    </div>
  );
};

export default RecentArticles;