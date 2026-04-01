import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import AnalyzeNews from "./pages/AnalyzeNews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analyze" element={<AnalyzeNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;