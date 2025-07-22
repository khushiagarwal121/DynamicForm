import {createContext,useState} from "react"
export const FormContext=createContext(null);
export function FormProvider({ children }) {
  const [fields, setFields] = useState([]);
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [formDescription, setFormDescription] = useState("");

  return (
    <FormContext value={{ fields, setFields, formTitle, setFormTitle, formDescription, setFormDescription }}>
      {children}
    </FormContext>
  );
}