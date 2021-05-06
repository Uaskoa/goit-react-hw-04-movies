import { NavLink } from "react-router-dom";
import routes from "../../routes";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        className="nav__link"
        exact
        to={routes.home}
        // className="NavLink"
        activeClassName="nav__link--active"
      >
        Home
      </NavLink>

      <NavLink
        className="nav__link"
        to={routes.movies}
        // className="NavLink"
        activeClassName="nav__link--active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
