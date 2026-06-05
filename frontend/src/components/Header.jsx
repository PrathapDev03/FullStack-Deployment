import {
  FaBell,
  FaUserCircle
} from "react-icons/fa";

function Header() {

  return (
    <div className="header">

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search Employee..."
          className="search-box"
        />
      </div>

      <div className="header-right">

        <FaBell className="header-icon" />

        <div className="profile">

          <FaUserCircle size={35} />

          <div>
            <h4>Admin</h4>
            <p>HR Manager</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;