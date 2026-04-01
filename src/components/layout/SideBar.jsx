import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen border-r p-4">
      <h2 className="text-xl font-bold mb-6">FakeNews AI</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/analyze">Analyze News</Link>
      </nav>
    </div>
  );
};

export default Sidebar;