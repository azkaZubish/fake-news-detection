import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">FakeNews AI</h2>

      <nav className="flex flex-col gap-3 text-gray-700">
        <Link to="/" className="px-3 py-2 rounded hover:bg-gray-200 transition">Dashboard</Link>
        <Link to="/analyze" className="px-3 py-2 rounded hover:bg-gray-200 transition">Analyze News</Link>
      </nav>
    </div>
  );
};

export default Sidebar;