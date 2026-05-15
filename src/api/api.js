import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const analyzeNews = async (text) => {
  try {
    const response = await API.post("/predict", {
      text,
    });

    return response.data;
  } catch (error) {
    console.error("Backend not connected yet");
    
    return {
      prediction: "Backend not deployed yet",
    };
  }
};