import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { FormContext } from "../context/FormContext";

function Header() {
  // useNavigate hook returns a function
  const navigate = useNavigate();
  // const { fields, formTitle, formDescription } = useContext(FormContext);
  const handleFormPreview = () => {
    navigate(
      "/form-preview"
      //   , {
      //   state: {
      //     fields,
      //     formTitle,
      //     formDescription,
      //   },
      // }
    );
  };
  const handleViewData = () => {
    navigate("/form-data");
  };
  return (
    <header className=" bg-blue-100 px-6 py-4 flex flex-col rounded-2xl ">
      <h1 className="text-3xl text-black ">Dynamic Form Builder</h1>
   <div className="flex justify-end gap-3">   <button
        className="border px-2 py-2 rounded-md bg-amber-100 hover:bg-amber-200 self-end"
        onClick={handleFormPreview}
      >
        Form Preview
      </button>
      <button
        className="border px-2 py-2 rounded-md bg-amber-100 hover:bg-amber-200 self-end"
        onClick={handleViewData}
      >
        View Data
      </button></div>
    </header>
  );
}
export default Header;
