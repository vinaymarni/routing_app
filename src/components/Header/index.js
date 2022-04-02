import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Intro to React</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <div className="task-bar">
      <ul className="task-bar-icons">
        <li className="task">Menu</li>
        <li className="task">Topics</li>
        <li className="task">Q/A</li>
        <li className="task">Practice</li>
        <li className="task">Help</li>
      </ul>
    </div>
  </nav>
);

export default Header;
