import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import HomePage from "../src/views/HomePage";
// import MoviesPage from "../src/views/MoviesPage";
// import MovieDetailsPage from "../src/views/MovieDetailsPage";
import NotFoundPage from "../src/views/NotFoundPage";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";
import "./App.css";

const HomePage = lazy(() =>
  import("./views/HomePage.jsx" /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.jsx" /* webpackChunkName: "movie-details-page" */
  )
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage.jsx" /* webpackChunkName: "movies-page" */)
);

function App() {
  return (
    <div className="container">
      <AppBar />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

// export const BASE_URL = "https://api.themoviedb.org/3";
// export const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
