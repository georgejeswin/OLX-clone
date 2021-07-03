import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../store/Context";
import "./NavBar.css";

const Nav = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const handleLogout = () => {
    firebase.auth().signOut();
    history.push("/login");
  };
  const handleClick = () => {
    if (user) {
      history.push("/sell");
    } else {
      history.push("/login");
    }
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png"
            alt=""
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <div className="nav__country">
              <div className="nav__coutry-left">
                <i className="fas fa-search mr-2"></i>
                India
              </div>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="nav__searchbar">
              <input
                type="text"
                className="nav__search"
                placeholder="Find Cars, Mobile Phones and more..."
              />
              <i className="fas fa-search"></i>
            </div>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav__drop"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ENGLISH
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/" className="dropdown-item" href="#">
                  ENGLISH
                </Link>
                <Link to="/" className="dropdown-item" href="#">
                  Hindi
                </Link>
              </div>
            </li>
            <div className="nav__userContainer">
              {user ? (
                <p className="nav__login nav__user">{user.displayName}</p>
              ) : (
                <Link to="/login" className="nav__login">
                  <p>Login</p>
                </Link>
              )}
              {user && (
                <p
                  className="nav__login mx-3 nav__logout"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              )}
              <button className="nav__button" onClick={handleClick}>
                <i className="fas fa-plus"></i> Sell
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
