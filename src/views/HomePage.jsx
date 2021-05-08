import { Component } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../settings";
import MovieList from "../components/MovieList/MovieList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div className="container">
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default HomePage;
