import Sidebar from "./Sidebar";
import FormPreview from "./FormPreview";
import CenterCanvas from "./CenterCanvas";
function Main({
  fields,
  addField,
  formTitle,
  formDescription,
  setFormTitle,
  setFormDescription,
}) {
  return (
    <div className="flex">
      <Sidebar
        addField={addField}
        formTitle={formTitle}
        setFormTitle={setFormTitle}
        formDescription={formDescription}
        setFormDescription={setFormDescription}
      />
      <CenterCanvas />
      <FormPreview
        fields={fields}
        formTitle={formTitle}
        formDescription={formDescription}
      />
    </div>
  );
}
export default Main;
