import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm">

      <h1 className="text-xl font-semibold text-primary">
        TruthLens 
      </h1>

      <div className="flex items-center gap-6 text-gray-700 font-medium">

        <Link
          to="/"
          className="hover:text-primary transition"
        >
          Home
        </Link>

        <Link
          to="/analyze"
          className="hover:text-primary transition"
        >
          Analyze News
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-primary transition"
        >
          Dashboard
        </Link>

      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search articles..."
          className="border px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="font-medium bg-gray-200 px-3 py-1 rounded-full">
          JD
        </div>
      </div>

    </div>
  );
};

export default Navbar;