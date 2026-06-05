import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserFriends,
  FaChartBar,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

    <div className="logo">
        <h2>EmployeePro</h2>
        <p>HR Management</p>
    </div>

      <ul className="menu">

        <li>
          <Link to="/dashboard">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/employees">
            <FaUsers />
            <span>Employees</span>
          </Link>
        </li>

        <li>
          <Link to="/visitors">
            <FaUserFriends />
            <span>Visitors</span>
          </Link>
        </li>

        <li>
          <Link to="/analytics">
            <FaChartBar />
            <span>Analytics</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaSignOutAlt />
            <span>Logout</span>
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;