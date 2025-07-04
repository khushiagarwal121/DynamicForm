// --------------------------------
function RenderPreview({type}) {
  switch (type) {
    case "Text Field":
      return <input type="text" className="border px-2 py-1" />;
    case "Checkbox":
      return <input type="checkbox" />;
    case "Radio Button":
      return (
        <label>
          <input type="radio" /> Option 1
        </label>
      );
    case "Select Dropdown":
      return (
        <select className="w-full border px-2 py-1">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      );
    default:
      return null;
  }
}
export default RenderPreview;
