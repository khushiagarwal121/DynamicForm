// -------------------------------
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
function FieldList() {
  const { addField } = useContext(FormContext);
  const types = ["Text Field", "Checkbox", "Radio Button", "Select Dropdown"];

  return (
    <div className="bg-gray p-4">
      <h2 className="text-lg font-semibold mb-2">Available Fields</h2>
      <ul className="space-y-2">
        {types.map((type) => (
          <li key={type}>
            <button
              onClick={() => addField(type)}
              className="px-4 py-2 bg-white border rounded-md "
            >
              ➕ {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FieldList;
