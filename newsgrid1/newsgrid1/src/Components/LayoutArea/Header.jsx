import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav id="main-nav">
        <div className="container">
          <img src="../../public/img/logo.png" alt="NewsGrid" class="logo" />
          <div class="social">
            <Link to="http://facebook.com" target="_blank">
              <i class="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="http://twitter.com" target="_blank">
              <i class="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="http://instagram.com" target="_blank">
              <i class="fab fa-instagram fa-2x"></i>
            </Link>
            <Link to="http://youtube.com" target="_blank">
              <i class="fab fa-youtube fa-2x"></i>
            </Link>
          </div>
          <ul className="list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink class="current" to="about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
