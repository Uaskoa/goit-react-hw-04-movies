import { Component } from "react";
import { Link } from "react-router-dom";
import './HomeView.scss'

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );

    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div className="container">
        <ul className="movies">
          {this.state.movies.map((movie) => (
            <li key={movie.id} className="movies__item">
              <Link to={`/movies/${movie.id}`} className="movies__link">
                <img
                  className="movies__img"
                  src={`${IMG_URL}${movie.poster_path}`}
                  alt=""
                  width="200px"
                />
                <span className="movies__title"> {movie.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomeView;

// `${BASE_URL}/trending/movie/api_key=${API_KEY}&language=en-US&page=${this.page}`;

// `${BASE_URL}/trending/api_key=${API_KEY}`;
