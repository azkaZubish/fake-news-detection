const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search news..."
        className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div>Profile</div>
    </div>
  );
};

export default Navbar;