import { Component } from "react";
import { BASE_URL, API_KEY } from "../settings";
import MovieList from "../components/MovieList/MovieList";
import Searchbar from "../components/Searchbar/Searchbar";
import axios from "axios";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      movies: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovie();
    }
  }

  async fetchMovie() {
    const { searchQuery } = this.state;
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesPage;
