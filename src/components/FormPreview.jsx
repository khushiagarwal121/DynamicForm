import RenderPreview from "./RenderPreview";
// import { useLocation } from "react-router-dom";
import { useEffect, useRef,useState } from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
function FormPreview() {
  const { fields, formTitle, formDescription } = useContext(FormContext);
  const [formValues, setFormValues] = useState({});
  // const state = location.state || {};

  // const fields = props.fields ?? state.fields ?? [];
  // const formTitle = props.formTitle ?? state.formTitle ?? "Untitled Form";
  // const formDescription =
  //   props.formDescription ?? state.formDescription ?? "No description";

  const lastFieldRef = useRef(null);
  //   to auto-scroll to the last added field i
  useEffect(() => {
    if (lastFieldRef.current) {
      lastFieldRef.current.scrollIntoView({
        behaviour: "smooth",
      });
    }
  }, [fields.length]);
  // Update field value when user types
  function handleChange(fieldId, value) {
    setFormValues((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  }

  function handleSubmit() {
    console.log("form submitted successfully");
      console.log("Form values:", formValues);
  }
  return (
    <div className=" pl-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Form Preview</h2>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Form title - {formTitle}
      </h1>
      <p className="text-center mb-4">Form Description - {formDescription}</p>
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
              <RenderPreview
                type={field.type}
                value={formValues[field.id] || ""}
                onChange={(value) => handleChange(field.id, value)}
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}
export default FormPreview;
