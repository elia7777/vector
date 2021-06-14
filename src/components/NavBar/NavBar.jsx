import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUser";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);

  if (currentUserState.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <nav className={`navbar navbat-light ${styles.nav}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
        Vector
        </Link>
        <ul className={`nav navbar-nav pull-xs-right ${styles.navLink}`}>
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </li>
          {currentUserState.isLoggedIn === false && (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Sign up
                </NavLink>
              </li>
            </>
          )}
          {currentUserState.isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  <i className="ion-compose"></i>
                  &nbsp; New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                  <i className="ion-gear-a"></i>
                  &nbsp; Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profiles/${currentUserState.currentUser.username}`}
                  className="nav-link"
                >
                  <img
                    src={currentUserState.currentUser.image}
                    className="user-pic"
                    alt=""
                  />
                  &nbsp; {currentUserState.currentUser.username}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
