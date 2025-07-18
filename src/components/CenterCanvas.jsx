import { useContext } from "react";
import { FormContext } from "../context/FormContext";
function CenterCanvas({field}) {
  const { updateField } = useContext(FormContext);
  // const selectedField = fields.find((fields) => fields.id === selectedFieldId);
  if (!field)
    return <div className="p-4">Select a field to configure</div>;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    updateField({ ...field, [name]: newValue });
  };
  return (
    <div >
      <h1 className="text-2xl font-bold mb-4 text-center">
        Field Configuration
      </h1>
      <div className="flex flex-col">
        <div className="mb-4 mx-8">
          <label>Field Label</label>
          <input
            type="text"
            name="label"
            value={field.label}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 mx-8">
          <label>Placeholder Text</label>
          <input
            type="text"
            name="placeholder"
            value={field.placeholder || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="required"
              checked={field.required || false}
              onChange={handleChange}
              className="mr-2"
            />
            Required
          </label>
        </div>
      </div>
    </div>
  );
}
export default CenterCanvas;
