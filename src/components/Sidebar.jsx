import FieldList from "./FieldList";

function Sidebar({ addField,formTitle, setFormTitle, formDescription, setFormDescription }) {
  return (
    <div className="w-1/3 p-4 border-r">
      <div className="mb-4">
        <label className="block font-medium">Form Title</label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block font-medium">Form Description</label>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <FieldList addField={addField} />
    </div>
  );
}
export default Sidebar;
