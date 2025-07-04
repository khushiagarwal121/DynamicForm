import { useState, useEffect, useRef } from "react";

// --------------------------------
function FormBuilder() {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type} Label`,
    };
    console.log("Adding field:", newField);
    const updatedFields = [...fields, newField];
    setFields(updatedFields);
  };

  return (
    <>
      <Header />
      <Main fields={fields} addField={addField} />
    </>
  );
}

// --------------------------------
function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Form Builder</h1>
    </header>
  );
}

// --------------------------------
function Main({ fields, addField }) {
  return (
    <div className="flex">
      <Sidebar />
      <CenterCanvas fields={fields} />
      <FieldList addField={addField} />
    </div>
  );
}

// --------------------------------
function Sidebar() {
  return (
    <div className="w-1/3 p-4 border-r">
      <div className="mb-4">
        <label className="block font-medium">Form Title</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block font-medium">Form Description</label>
        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
    </div>
  );
}

// --------------------------------
function FieldList({ addField }) {
  const types = ["Text Field", "Checkbox", "Radio Button", "Select Dropdown"];

  return (
    <div className="bg-gray p-4 border-l">
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

// --------------------------------
function CenterCanvas({ fields }) {
  const lastFieldRef = useRef(null);
  useEffect(() => {
    if (lastFieldRef.current) {
      lastFieldRef.current.scrollIntoView({
        behaviour: "smooth",
      });
      lastFieldRef.current = null;
    }
  }, [fields.length]);
  return (
    <div>
      <h2>Form Preview</h2>
      {fields.length === 0 && <p>Click a field to add it to the form</p>}
      <div>
        {fields.map((field, index) => {
          // React uses key to track items efficiently during re-renders.
          const isLast = index === fields.length - 1;
          return (
            <div
              key={field.id}
              ref={isLast ? lastFieldRef : null}
              className="p-3 mb-3 border rounded-md bg-gray"
            >
              <label>{field.label}</label>
              {renderPreview(field.type)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------
function renderPreview(type) {
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

export default FormBuilder;
