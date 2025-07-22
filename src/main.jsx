import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./common/NotFoundPage.jsx";
import FormPreview from "./components/FormPreview.jsx";
import FormDataPage from "./components/FormDataPage.jsx";
import { FormProvider } from "./context/FormContext"; // ✅
// import { UserContext } from "./context/UserContext.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form-preview",
    element: <FormPreview />,
  },
  // path: "*" matches any route that wasn't matched earlier.
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {path:"/form-data",
    element:<FormDataPage/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
     <FormProvider> {/* ✅ Wrapping all routes */}
    {/* <UserContext value={{ user, setUser }}> */}
      <RouterProvider router={router} />
    {/* </UserContext> */}
    </FormProvider>
  </StrictMode>
);
