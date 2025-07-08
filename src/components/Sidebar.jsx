import FieldList from "./FieldList";
import FormField from "./FormField";
function Sidebar({
  fields,
  addField,
  formTitle,
  setFormTitle,
  formDescription,
  setFormDescription,
  selectedFieldId,
  setSelectedFieldId,
}) {
  return (
    <div className="w-1/3 p-4 border-r border-gray-300">
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
      <FieldList addField={addField} setSelectedFieldId={setSelectedFieldId}/>
      <h3 className="mt-6 font-semibold">Form Fields</h3>

      {fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          isSelected={field.id === selectedFieldId}
          onClick={() => setSelectedFieldId(field.id)}
        />
      ))}
    </div>
  );
}
export default Sidebar;
