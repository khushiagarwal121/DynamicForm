import { useContext } from "react";
import { FormContext } from "../context/FormContext";
function FormField({ field }) {
  const { selectedFieldId, setSelectedFieldId } = useContext(FormContext);
  const isSelected = field.id === selectedFieldId;
  return (
    <>
      <div
        onClick={() => setSelectedFieldId(field.id)}
        className={`p-2 my-1 rounded cursor-pointer ${
          isSelected ? "bg-blue-100 border-blue-500 border" : "bg-gray-100"
        }`}
      >
        <strong>{field.label}</strong>
      </div>
    </>
  );
}
export default FormField;
