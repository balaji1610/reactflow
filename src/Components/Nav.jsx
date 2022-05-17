import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link className="nav__align" to="/">
          Home
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link className="nav__align" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
