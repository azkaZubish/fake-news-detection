# Fake News Detection [Live website](https://fake-news-detection-rosy-seven.vercel.app/)

It is a modern web-based fake news detection platform that analyzes news content and predicts whether it is Real, Fake, or Uncertain using a Machine Learning model powered by Natural Language Processing (NLP).

The project combines a clean and responsive frontend with a Flask-based ML backend to create an interactive and user-friendly news verification experience.

NOTE:This repository contains only the Frontend code of the website.To see the backend repository, [visit]().

## Features
- AI-powered fake news detection
- Confidence score prediction
- Dashboard with live detection metrics
- Persistent detection history using Local Storage
- Modern responsive UI built with React + Tailwind CSS
- Fast API communication using Flask and Axios
- Scalable architecture for future ML upgrades

## How it works
- User enters a news article or headline
- Frontend sends the content to the Flask backend
- Text is cleaned and vectorized using TF-IDF
- Machine Learning model predicts the result
- Backend returns:
  - Prediction
  - Confidence score
  - Keyword analysis
- Frontend visualizes the results dynamically

## Tech Stack
### Frontend
- React
- Tailwind CSS
- Vite
- Axios
- React Router
### Backend
- Flask
- scikit-learn
- NumPy
### Machine Learning
- Logistic Regression
- TF-IDF Vectorization
- NLP-based text preprocessing

## Frontend Setup
### Install Dependencies
```bash
  npm install
```
### Start Frontend
```bash
npm run dev
```
### Frontend runs on:
```bash
http://localhost:5173
```
