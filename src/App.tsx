import { BrowserRouter, useRoutes } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  // return (
  //   <BrowserRouter>
  //   <Header/><Footer/>
  //   </BrowserRouter>
  // )

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
        }
      ]
    }
  ]);

  return elements;
};

export default App;