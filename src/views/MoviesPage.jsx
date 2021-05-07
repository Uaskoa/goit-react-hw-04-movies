import { Component } from "react";
// import { Link } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import Searchbar from "../components/Searchbar/Searchbar";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,

      movies: [],
      // error: null,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovie();
    }
  }
  // handleChange = (e) => {
  //   this.setState({ searchQuery: e.currentTarget.value });
  // };

  async fetchMovie() {
    const { searchQuery } = this.state;
    // console.log(this.state.searchQuery);
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );

    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.fetchMovie();
  //   console.log("это сабмит");
  //   this.setState({ searchQuery: "" });

  //   //    console.log(this.state.searchQuery);
  // };

  render() {
    return (
      <div>
        <h1>Movies</h1>
        {/* <input
          type="text"
          placeholder="Search movie"
          onChange={this.handleChange}
        ></input>
        <button type="submit" onClick={this.handleSubmit}>
          search
        </button> */}
        <Searchbar onSubmit={this.onChangeQuery} />
        <MovieList movies={this.state.movies} />
        {/* <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name}
                {movie.title}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default MoviesPage;
