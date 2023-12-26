import { useRoutes } from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  let elements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "*",
          element: <></>
        }
      ]
    }
  ]);

  return elements;
};

export default App;