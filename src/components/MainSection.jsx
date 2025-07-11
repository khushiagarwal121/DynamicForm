import Sidebar from "./Sidebar";
import FormPreview from "./FormPreview";
import CenterCanvas from "./CenterCanvas";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import ThreeColumnLayout from "./ThreeColumnLayout";
function MainSection() {
  const { fields, selectedFieldId } = useContext(FormContext);
  const selectedField = fields.find((f) => f.id === selectedFieldId);

  return (
    <ThreeColumnLayout>
      <div className="w-1/3">
        <Sidebar />
      </div>
      <div className="w-1/3 border-x px-4">
        <CenterCanvas field={selectedField} />
      </div>
      <div className="w-1/3">
        <FormPreview />
      </div>
    </ThreeColumnLayout>
  );
}
export default MainSection;
