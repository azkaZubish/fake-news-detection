import { useState } from "react";
import { analyzeNews } from "../api/api";

const useFakeDetection = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const detectNews = async (text) => {
    setLoading(true);

    const data = await analyzeNews(text);

    setResult(data);
    setLoading(false);

    const history = JSON.parse(localStorage.getItem("history")) || [];

    const newEntry = {
      text,
      result: data.prediction,
      date: new Date().toLocaleString(),
    };

    const updatedHistory = [newEntry, ...history].slice(0, 10);

    localStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  return { result, loading, detectNews };
};

export default useFakeDetection;