import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/launches">Launches</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
