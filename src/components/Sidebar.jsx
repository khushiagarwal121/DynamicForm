import { FormContext } from "../context/FormContext";
import FieldList from "./FieldList";
import FormField from "./FormField";
import { useContext } from "react";
function Sidebar() {
  const {
    fields,
    addField,
    formTitle,
    setFormTitle,
    formDescription,
    setFormDescription,
    setSelectedFieldId,
  } = useContext(FormContext);
  return (
    <div className="p-4 space-y-6">
      <div className="mb-4">
        <label className="block font-medium text-sm text-gray-700 mb-1">Form Title</label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block font-medium text-sm text-gray-700 mb-1">Form Description</label>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <FieldList addField={addField} setSelectedFieldId={setSelectedFieldId} />
      <h3 className="text-lg font-semibold mt-6 pt-4 text-gray-800">Form Fields</h3>
<div className="max-h-[400px] overflow-y-auto">
  {fields.map((field, index) => (
    <FormField key={field.id} field={field} index={index} />
  ))}
</div>

    </div>
  );
}
export default Sidebar;
