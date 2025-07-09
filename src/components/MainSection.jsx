import Sidebar from "./Sidebar";
import FormPreview from "./FormPreview";
import CenterCanvas from "./CenterCanvas";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
function MainSection() {
  const { fields, selectedFieldId } = useContext(FormContext);
  const selectedField = fields.find((f) => f.id === selectedFieldId);

  return (
    <div className="flex">
      <Sidebar />
      <CenterCanvas field={selectedField} />
      <FormPreview />
    </div>
  );
}
export default MainSection;
