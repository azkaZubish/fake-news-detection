import { useState } from "react";
import { analyzeNews } from "../api/api";

const useFakeDetection = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const detectNews = async (text) => {
    setLoading(true);

    const data = await analyzeNews(text);

    if (data) {
      setResult(data);
    }

    setLoading(false);
  };

  return { result, loading, detectNews };
};

export default useFakeDetection;