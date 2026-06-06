import React, { useState } from "react";

import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
  FaQuestionCircle,
  FaUser,
  FaSun,
  FaMoon
} from "react-icons/fa";

import {
  useNotifications
} from "../context/NotificationContext";

const Header = () => {

  const [search, setSearch] =
    useState("");

  const [showNotifications,
    setShowNotifications] =
    useState(false);

  const [showProfileMenu,
    setShowProfileMenu] =
    useState(false);

  const [darkMode,
    setDarkMode] =
    useState(

      localStorage.getItem(
        "darkMode"
      ) === "true"

    );

  const {

    notifications,
    clearNotifications

  } = useNotifications();

  const toggleTheme = () => {

    const newTheme =
      !darkMode;

    setDarkMode(
      newTheme
    );

    localStorage.setItem(
      "darkMode",
      newTheme
    );

    if(newTheme){

      document.body.classList.add(
        "dark-theme"
      );

    }else{

      document.body.classList.remove(
        "dark-theme"
      );

    }

  };

  const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");

  localStorage.removeItem("darkMode");

  document.body.classList.remove(
    "dark-theme"
  );

  window.location.href = "/login";

};

const user = JSON.parse(
  localStorage.getItem(
    "user"
  )
);

  return (

    <header className="header-v2">

      {/* Logo */}

      <div className="header-left">

        <div>

          <h1 className="brand-title">
            EmployeePro
          </h1>

          <span
            className="brand-subtitle"
          >
            HR Portal
          </span>

        </div>

      </div>

      {/* Search */}

      <div className="header-center">

        <div className="search-container">

          <FaSearch />

          <input
            type="text"
            placeholder="
            Search workforce,
            visitors...
            "
            value={search}
            onChange={(e)=>

              setSearch(
                e.target.value
              )

            }
          />

        </div>

      </div>

      {/* Right Side */}

      <div className="header-right">

        {/* Notifications */}

        <div
          style={{
            position:"relative"
          }}
        >

          <button
            className="
            header-icon-btn
            "
            onClick={()=>

              setShowNotifications(
                !showNotifications
              )

            }
          >

            <FaBell />

            {

              notifications.length > 0 && (

                <span
                  className="
                  notification-dot
                  "
                >

                  {
                    notifications.length
                  }

                </span>

              )

            }

          </button>

          {

            showNotifications && (

              <div
                className="
                notification-dropdown
                "
              >

                <div
                  className="
                  notification-header
                  "
                >

                  <h4>
                    Notifications
                  </h4>

                  <button
                    className="
                    clear-btn
                    "
                    onClick={
                      clearNotifications
                    }
                  >

                    Clear

                  </button>

                </div>

                {

                  notifications.length === 0 ? (

                    <div
                      className="
                      empty-notification
                      "
                    >

                      No Notifications

                    </div>

                  ) : (

                    notifications.map(
                      (item) => (

                        <div
                          key={item.id}
                          className="
                          notification-item
                          "
                        >

                          <div>

                            {
                              item.message
                            }

                          </div>

                          <small>

                            {
                              item.time
                            }

                          </small>

                        </div>

                      )
                    )

                  )

                }

              </div>

            )

          }

        </div>

        {/* Theme */}

        <button
          className="
          header-icon-btn
          "
          onClick={
            toggleTheme
          }
        >

          {

            darkMode
              ? <FaSun />
              : <FaMoon />

          }

        </button>

        {/* Profile */}

        <div
          className="
          profile-section
          "
          onClick={()=>

            setShowProfileMenu(
              !showProfileMenu
            )

          }
        >

          <FaUserCircle
            size={42}
          />

          <div>

            <h4>
              {user?.name || "User"}
            </h4>

            <p>
              Administrator
            </p>

          </div>

          {

            showProfileMenu && (

              <div
                className="
                profile-dropdown
                "
              >

                <div
                  className="
                  profile-menu-item
                  "
                >

                  <FaUser />

                  <span>
                    Profile
                  </span>

                </div>

                <div
                  className="
                  profile-menu-item
                  "
                >

                  <FaQuestionCircle />

                  <span>
                    Help Center
                  </span>

                </div>

                <div
                  className="
                  profile-menu-item
                  logout-item
                  "
                  onClick={
                    handleLogout
                  }
                >

                  <FaSignOutAlt />

                  <span>
                    Logout
                  </span>

                </div>

              </div>

            )

          }

        </div>

      </div>

    </header>

  );

};

export default Header;