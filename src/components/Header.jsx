import { useNavigate } from "react-router-dom";

function Header({ fields, formTitle, formDescription }) {
  // useNavigate hook returns a function
  const navigate = useNavigate();

  const handleFormPreview = () => {
    navigate("/form-preview", {
      state: {
        fields,
        formTitle,
        formDescription,
      },
    });
  };
  return (
    <header className=" bg-white border-b border-gray px-6 py-4 flex flex-col  ">
      <h1 className="text-3xl text-amber-800">Dynamic Form Builder</h1>
      <button
        className="border px-2 py-2 rounded-md bg-amber-100 hover:bg-amber-200 self-end"
        onClick={handleFormPreview}
      >
        Form Preview
      </button>
    </header>
  );
}
export default Header;
