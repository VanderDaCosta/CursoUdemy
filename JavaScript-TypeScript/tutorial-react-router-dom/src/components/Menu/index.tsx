import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" state={'esse estado vai vir da HOME'}>Home</Link>
        </li>
        <li>
          <Link to="/about" state={'This is state from ABOUT'}>
            About
          </Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts/10">Posts 10</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  );
};