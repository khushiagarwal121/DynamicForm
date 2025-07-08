import Sidebar from "./Sidebar";
import FormPreview from "./FormPreview";
import CenterCanvas from "./CenterCanvas";
function MainSection({
  fields,
  addField,
  formTitle,
  formDescription,
  selectedFieldId,
  setSelectedFieldId,
  setFormTitle,
  setFormDescription,
  updateField
}) {
  const selectedField = fields.find((f) => f.id === selectedFieldId);

  return (
    <div className="flex">
      <Sidebar
        fields={fields}
        addField={addField}
        formTitle={formTitle}
        setFormTitle={setFormTitle}
        formDescription={formDescription}
        setFormDescription={setFormDescription}
        selectedFieldId={selectedFieldId}
        setSelectedFieldId={setSelectedFieldId}
      />
      <CenterCanvas
        field={selectedField}
        updateField={updateField}
      />
      <FormPreview
        fields={fields}
        formTitle={formTitle}
        formDescription={formDescription}
      />
    </div>
  );
}
export default MainSection;
