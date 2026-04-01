const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <input
        type="text"
        placeholder="Search news..."
        className="border px-3 py-1 rounded"
      />

      <div>Profile</div>
    </div>
  );
};

export default Navbar;