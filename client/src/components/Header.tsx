import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, TextInput } from "flowbite-react";
import { BiSearch } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [auth] = useState(false);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand className="flex gap-5">
        <Navbar.Toggle />
        <Link to={"/"}>
          <img src="/upwork.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Link>
        {auth ?
          <Navbar.Collapse>
            <Link to="">Find Work</Link>
            <Link to="">My Jobs</Link>
            <Link to="">Reports</Link>
            <Link to="">Message</Link>
          </Navbar.Collapse> :
          <Navbar.Collapse>
            <Link to="">Find Talent</Link>
            <Link to="">Find Work</Link>
            <Link to="">Why Upwork</Link>
            <Link to="">Enterprise</Link>
          </Navbar.Collapse>
        }
      </Navbar.Brand>
      <div className="flex gap-5">
        <div className="flex border-2 rounded-full divide-x">
          <div className="flex px-2 items-center rounded-full focus:ring-2">
            <BiSearch />
            <input type="text" placeholder="Search" className="border-0 hover:ring-0 rounded-full" />
          </div>
          <button className="px-3 py-1 flex items-center gap-1 border-0 rounded-full">
            Talent
            <FaAngleDown />
          </button>
        </div>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </Navbar>
  )
}

export default Header;