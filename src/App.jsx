import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashBoard from "./pages/DashBoard";
import AnalyzeNews from "./pages/AnalyzeNews";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/analyze" element={<AnalyzeNews />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;