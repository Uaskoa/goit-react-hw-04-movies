import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "../src/views/HomeView";
import MoviesView from "../src/views/MoviesView";
import MovieDetailsView from "../src/views/MovieDetailsView";
import NotFoundView from "../src/views/NotFoundView";




function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/movies/:movieId" component={MovieDetailsView} />
        <Route exact path="/movies" component={MoviesView} />
        <Route path="" component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;

// export const BASE_URL = "https://api.themoviedb.org/3";
// export const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
