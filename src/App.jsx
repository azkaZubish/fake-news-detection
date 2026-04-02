import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import AnalyzeNews from "./pages/AnalyzeNews";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard layout (WITH sidebar) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analyze" element={<AnalyzeNews />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;