function FormField({ field, isSelected, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
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
