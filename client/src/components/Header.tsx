import { useState } from "react";
import { Link } from "react-router-dom";

import {
  BiSearch
} from "react-icons/bi";

const Header = () => {
  const [auth, setAuth] = useState(false);

  setAuth(false);

  return (
    <header className="flex justify-between px-5">
      {
        auth ?
          <div className="flex gap-5">
            <Link to="/">Upwork</Link>
            <Link to="">Find Work</Link>
            <Link to="">My Jobs</Link>
            <Link to="">Reports</Link>
            <Link to="">Message</Link>
          </div> :
          <div className="flex gap-5">
            <Link to="/">Upwork</Link>
            <Link to="">Find Talent</Link>
            <Link to="">Find Work</Link>
            <Link to="">Why Upwork</Link>
            <Link to="">Enterprise</Link>
          </div>
      }

      {auth?
        <div>
          <span className="help"></span>
          <span className="contract"></span>
          <span className="apps"></span>
          <span className="notification"></span>
          <span className="Avatar"></span>
        </div>:
        <div className="flex gap-5">
          <div className="flex gap-5">
            <BiSearch />
            <span>Search</span>
            <span>Talent</span>
          </div>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      }
    </header>
  )
}

export default Header;