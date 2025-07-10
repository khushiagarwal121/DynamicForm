import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { GripVertical, Trash2 } from "lucide-react";
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

  const handleDelete = (e) => {
    e.stopPropagation();
    const updatedFields = fields.filter((f) => f.id !== field.id);
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
        className={`flex items-center justify-between gap-2 p-2 my-1 rounded cursor-pointer ${
          isSelected ? "bg-blue-100 border-blue-500 border" : "bg-gray-100"
        }`}
      >
        {/* Drag handle */}
        {/* cursor-grab is a Tailwind CSS utility class (also exists in plain CSS) that sets the mouse cursor style when hovering over an element. */}
        <div className="flex items-center gap-2">
          <span className="cursor-grab text-gray-500">
            <GripVertical size={16} />
          </span>
          <span className="text-sm font-medium leading-none">
            {field.label}
          </span>
        </div>

        {/* <strong>{field.label}</strong> */}
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </>
  );
}
export default FormField;
