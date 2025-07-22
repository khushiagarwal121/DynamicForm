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
    <div className="bg-white rounded-2xl shadow-md p-4 h-full overflow-y-auto">
      <Sidebar />
    </div>
  </div>
  <div className="w-1/3 px-4">
    <div className="bg-white rounded-2xl shadow-md p-4 h-full overflow-y-auto">
      <CenterCanvas field={selectedField} />
    </div>
  </div>
  <div className="w-1/3">
    <div className="bg-white rounded-2xl shadow-md p-4 h-full overflow-y-auto">
      <FormPreview />
    </div>
  </div>
</ThreeColumnLayout>

  );
}
export default MainSection;
