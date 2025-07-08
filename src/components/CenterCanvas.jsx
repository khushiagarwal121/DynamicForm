function CenterCanvas({ field, updateField }) {
  // const selectedField = fields.find((fields) => fields.id === selectedFieldId);
  if (!field)
    return <div className="w-1/3 p-4">Select a field to configure</div>;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    updateField({ ...field, [name]: newValue });
  };
  return (
    <div className="w-1/3">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Field Configuration
      </h1>
      <div className="flex flex-col">
        <label>Field Label</label>
        <input
          type="text"
          name="label"
          value={field.label}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <label>Placeholder Text</label>
        <input
          type="text"
          name="placeholder"
          value={field.placeholder || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
}
export default CenterCanvas;
