import { useState} from "react";
import Header from "./Header";

import Main from "./Main";
// --------------------------------
function FormBuilder() {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type} Label`,
    };
    console.log("Adding field:", newField);
    const updatedFields = [...fields, newField];
    setFields(updatedFields);
  };

  return (
    <>
      <Header />
      <Main fields={fields} addField={addField} />
    </>
  );
}

export default FormBuilder;
