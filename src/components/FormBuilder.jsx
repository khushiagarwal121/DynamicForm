import { useState } from "react";
import Header from "./Header";

import MainSection from "./MainSection";
// --------------------------------
function FormBuilder({}) {
  const [fields, setFields] = useState([]);
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type} Label`,
    };
    console.log("Adding field:", newField);
    const updatedFields = [...fields, newField];
    setFields(updatedFields);
    setSelectedFieldId(newField.id);
  };
  const updateField = (updatedField) => {
    const updatedFields = fields.map((field) =>
      field.id === updatedField.id ? updatedField : field
    );
    setFields(updatedFields);
  };
  return (
    <>
      <Header
        fields={fields}
        formTitle={formTitle}
        formDescription={formDescription}
      />
      <MainSection
        fields={fields}
        addField={addField}
        formTitle={formTitle}
        formDescription={formDescription}
        selectedFieldId={selectedFieldId}
        setSelectedFieldId={setSelectedFieldId}
        setFormTitle={setFormTitle}
        setFormDescription={setFormDescription}
        updateField={updateField}
      />
    </>
  );
}

export default FormBuilder;
