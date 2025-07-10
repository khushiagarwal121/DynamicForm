import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { GripVertical } from "lucide-react";
function FormField({ field, index }) {
  const { selectedFieldId, setSelectedFieldId, fields, setFields } =
    useContext(FormContext);
  const isSelected = field.id === selectedFieldId;
  const handleDragStart = (e) => {
    e.dataTransfer.setData("dragIndex", index);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("dragIndex"), 10);
// receives the onDrop event
    const targetIndex = index;

    if (draggedIndex === targetIndex) return;
    const updatedFields = [...fields];
    const [draggedField] = updatedFields.splice(draggedIndex, 1);
    updatedFields.splice(targetIndex, 0, draggedField);
    setFields(updatedFields);
  };
  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => setSelectedFieldId(field.id)}
        className={`flex items-center gap-2 p-2 my-1 rounded cursor-pointer ${
          isSelected ? "bg-blue-100 border-blue-500 border" : "bg-gray-100"
        }`}
      >
        {/* 👇 Drag handle */}
        <span className="cursor-grab text-gray-500">
          <GripVertical size={16} />
        </span>
        <strong>{field.label}</strong>
      </div>
    </>
  );
}
export default FormField;
