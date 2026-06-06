import {
  FaBars,
  FaChartBar,
  FaHome,
  FaMoon,
  FaSignOutAlt,
  FaSun,
  FaUsers,
  FaUserTie,
  FaCog
} from "react-icons/fa";

import {
  NavLink
} from "react-router-dom";

import {
  useApp
} from "../context/AppContext";

function Sidebar() {

  const {
    sidebarCollapsed,
    toggleSidebar,
    darkMode,
    toggleTheme
  } = useApp();

  return (

    <div
      className={
        sidebarCollapsed
          ? "sidebar collapsed"
          : "sidebar"
      }
    >

      <div>

        <div className="sidebar-top">

          <button
            className="collapse-btn"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>

          {!sidebarCollapsed && (

            <div className="logo-section">

              <h2 className="logo">
                EmployeePro
              </h2>

              <p className="logo-text">
                Workforce Suite
              </p>

            </div>

          )}

        </div>

        <div className="menu">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <FaHome />
            {!sidebarCollapsed && (
              <span>Dashboard</span>
            )}
          </NavLink>

          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <FaUsers />
            {!sidebarCollapsed && (
              <span>Employees</span>
            )}
          </NavLink>

          <NavLink
            to="/visitors"
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <FaUserTie />
            {!sidebarCollapsed && (
              <span>Visitors</span>
            )}
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <FaChartBar />
            {!sidebarCollapsed && (
              <span>Analytics</span>
            )}
          </NavLink>

        </div>

      </div>

      <div className="sidebar-bottom">

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >

          {
            darkMode
              ? <FaSun />
              : <FaMoon />
          }

          {!sidebarCollapsed && (

            <span>

              {
                darkMode
                  ? "Light Mode"
                  : "Dark Mode"
              }

            </span>

          )}

        </button>

        <NavLink
          to="/settings"
          className="logout-btn"
        >

          <FaCog />

          {!sidebarCollapsed && (
            <span>
              Settings
            </span>
          )}

        </NavLink>

        <NavLink
          to="/login"
          className="logout-btn"
        >

          <FaSignOutAlt />

          {!sidebarCollapsed && (
            <span>
              Logout
            </span>
          )}

        </NavLink>

      </div>

    </div>

  );

}

export default Sidebar;