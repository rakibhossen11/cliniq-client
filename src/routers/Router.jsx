import { createBrowserRouter } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

  export default router;