import { useState } from "react";
import Header from "./Header";

import Main from "./Main";
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

  return (
    <>
      <Header />
      <Main
        fields={fields}
        addField={addField}
        formTitle={formTitle}
        formDescription={formDescription}
        setFormTitle={setFormTitle}
        setFormDescription={setFormDescription}
      />
    </>
  );
}

export default FormBuilder;
