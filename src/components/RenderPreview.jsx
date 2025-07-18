// --------------------------------
function RenderPreview({type,value,onChange}) {
  switch (type) {
    case "Text Field":
      return <input type="text" className="border px-2 py-1" value={value}
          onChange={(e) => onChange(e.target.value)} />;
   case "Checkbox":
      return (
        <input
          type="checkbox"
          checked={value || false}
          onChange={(e) => onChange(e.target.checked)}
        />
      );
     case "Radio Button":
      return (
        <>
          <label>
            <input
              type="radio"
              name="radio"
              value="Option 1"
              checked={value === "Option 1"}
              onChange={() => onChange("Option 1")}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="Option 2"
              checked={value === "Option 2"}
              onChange={() => onChange("Option 2")}
            />
            Option 2
          </label>
        </>
      );
    case "Select Dropdown":
      return (
        <select
          className="w-full border px-2 py-1"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      );
    default:
      return null;
  }
}
export default RenderPreview;
