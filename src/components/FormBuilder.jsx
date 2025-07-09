import { useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import { FormContext } from "../context/FormContext";
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
    <FormContext
      value={{
        fields,
        setFields,
        selectedFieldId,
        setSelectedFieldId,
        formTitle,
        setFormTitle,
        formDescription,
        setFormDescription,
        addField,
        updateField,
      }}
    >
      <Header />
      <MainSection />
    </FormContext>
  );
}

export default FormBuilder;
