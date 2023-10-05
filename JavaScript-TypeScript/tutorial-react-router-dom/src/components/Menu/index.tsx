import "./style.css";

import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/post">Posts</Link>
        </li>
        <li>
          <Link to="/post/10">Post 10</Link>
        </li>
      </ul>
    </div>
  );
};
