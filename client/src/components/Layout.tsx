import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import Footer from "./Footer";
import Header from "./Header";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      // default
      info: "text-white bg-[#108A00]",
      blue: "text-white bg-[#4285f4] hover:bg-blue-900",
      light: "border border-black",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          // default
          gray: "bg-white"
        }
      }
    }
  }
};

const Layout = () => {
  if (location.pathname == "/login" || location.pathname == "/signup") {
    return (
      <Flowbite theme={{ theme: customTheme }}>
        <Outlet />
      </Flowbite>
    );
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </Flowbite>
  );
};

export default Layout;