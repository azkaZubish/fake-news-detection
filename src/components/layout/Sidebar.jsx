import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-primary text-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-8 tracking-wide">FakeNews AI</h2>

      <nav className="flex flex-col gap-3 text-gray-700">
        <Link to="/" className="px-4 py-2 rounded hover:bg-white/20 transition-all duration-300 hover:translate-x-1">Dashboard</Link>
        <Link to="/analyze" className="px-4 py-2 rounded hover:bg-white/20 transition-all duration-300 hover:translate-x-1">Analyze News</Link>
      </nav>
    </div>
  );
};

export default Sidebar;