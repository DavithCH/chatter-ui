import { createBrowserRouter } from "react-router-dom";

import Signup from "./Auth/Siginup";
import Login from "./Auth/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
