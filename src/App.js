import { Route, Switch } from "react-router-dom";
import HomeView from "../src/views/HomeView";
import MoviesView from "../src/views/MoviesView";
import MovieDetailsView from "../src/views/MovieDetailsView";
import NotFoundView from "../src/views/NotFoundView";
import AppBar from './components/AppBar/AppBar'
import routes from './routes'
import './App.css'




function App() {
  return (
    <div className="container">
      <AppBar />

      
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route exact path={routes.movies} component={MoviesView} />
        <Route path="" component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;

// export const BASE_URL = "https://api.themoviedb.org/3";
// export const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
