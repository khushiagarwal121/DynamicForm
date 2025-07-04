import  RenderPreview from "./RenderPreview";
import { useEffect, useRef } from "react";
function CenterCanvas({ fields }) {
  const lastFieldRef = useRef(null);
//   to auto-scroll to the last added field i
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
            <RenderPreview type={field.type} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CenterCanvas;