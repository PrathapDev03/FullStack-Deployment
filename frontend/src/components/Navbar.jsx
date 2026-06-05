import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Employee Management</h2>

      <div>
        <Link to="/">Visitor</Link>
        <Link to="/login">Login</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/visitors">Visitors</Link>
      </div>
    </nav>
  );
}

export default Navbar;