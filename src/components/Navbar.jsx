import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-badge">✚</span>
          <span>CareConnect</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/support">Support Form</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
