import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import HomePage from "../src/views/HomePage";
// import MoviesPage from "../src/views/MoviesPage";
// import MovieDetailsPage from "../src/views/MovieDetailsPage";
import NotFoundPage from "../src/views/NotFoundPage";
import AppBar from "./components/AppBar/AppBar";
import Loader from "react-loader-spinner";
import routes from "./routes";
import "./App.css";

const HomePage = lazy(() =>
  import("./views/HomePage.jsx" /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.jsx" /* webpackChunkName: "movie-details-page" */
  )
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage.jsx" /* webpackChunkName: "movies-page" */)
);

function App() {
  return (
    <div className="container">
      <AppBar />
      <Suspense
        fallback={
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#9098a3"
            height={50}
            width={50}
            timeout={3000}
          />
        }
      >
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
