import {
  FaQuestionCircle,
  FaSignOutAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function FooterNav() {

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

  return (

    <footer className="footer-nav">

      <div className="footer-left">

        <button className="footer-btn">

          <FaQuestionCircle />

          Help Center

        </button>

        <a
          href="https://github.com/PrathapDev03"
          target="_blank"
          rel="noreferrer"
          className="footer-btn"
        >

          <FaGithub />

          GitHub

        </a>

        <a
          href="https://www.linkedin.com/in/prathap-85953022a"
          target="_blank"
          rel="noreferrer"
          className="footer-btn"
        >

          <FaLinkedin />

          LinkedIn

        </a>

      </div>

      <div className="footer-right">

        <button
          className="footer-btn logout"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </footer>

  );

}

export default FooterNav;