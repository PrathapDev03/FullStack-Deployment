import {
  NavLink
} from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaUserFriends,
  FaChartLine,
  FaCog
} from "react-icons/fa";

function TopNavbar() {

  const navItems = [

    {
      path: "/",
      label: "Home",
      icon: <FaHome />
    },

    {
      path: "/employees",
      label: "Workforce",
      icon: <FaUsers />
    },

    {
      path: "/visitors",
      label: "Visitors",
      icon: <FaUserFriends />
    },

    {
      path: "/analytics",
      label: "Insights",
      icon: <FaChartLine />
    },

    {
      path: "/settings",
      label: "Administration",
      icon: <FaCog />
    }

  ];

  return (

    <nav className="top-navbar">

      <div className="nav-wrapper">

        {

          navItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "top-nav-link active"
                  : "top-nav-link"
              }
            >

              <span
                className="nav-icon"
              >

                {item.icon}

              </span>

              <span>

                {item.label}

              </span>

            </NavLink>

          ))

        }

      </div>

    </nav>

  );

}

export default TopNavbar;