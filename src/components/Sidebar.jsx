
function Sidebar() {
  return (
    <div className="w-1/3 p-4 border-r">
      <div className="mb-4">
        <label className="block font-medium">Form Title</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block font-medium">Form Description</label>
        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
    </div>
  );
}
export default Sidebar;