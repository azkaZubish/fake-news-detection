import axios from "axios";

const API = axios.create({
  baseURL : import.meta.env.VITE_API_URL,
  // baseURL: "http://127.0.0.1:5000",
});

export const analyzeNews = async (text) => {
  try {
    const response = await API.post("/predict", {
      text,
    });

    console.log(response.data)

    return response.data;
  } catch (error) {
    console.error(error);
    
    return {
      prediction: "Not able to analyze news",
    };
  }
};