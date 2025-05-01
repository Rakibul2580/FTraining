import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routes";

function App() {
  return (
    <div className="w-10xl mx-auto bg-white">
      <RouterProvider router={router}></RouterProvider>{" "}
    </div>
  );
}

export default App;
