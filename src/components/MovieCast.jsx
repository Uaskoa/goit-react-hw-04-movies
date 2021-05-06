import { Component } from "react";
import defaultPoster from "../defaultPoster.jpg";
import './MovieCast.scss'
// import { Link } from "react-router-dom";

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

class MovieCast extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {

    const movieId = this.props.match.params.movieId;
       const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );

         this.setState({ casts: response.data.cast });
  }

  componentDidUpdatet() {
    // console.log(this.props.match.params.movieId);
    // const response = await axios.get(
    //   `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    // );

    // //   console.log(response.data.results)
    // this.setState({ movies: response.data.results });
  }

  render() {

   
    return (
      <div>
        <h2>Cast</h2>
        <ul className='cast'>
          {this.state.casts.map((cast) => (
            <li key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`${IMG_URL}${cast.profile_path}`}
                  alt={cast.name}
                  width="100px"
                />
              ) : (
                <img
                  src={defaultPoster}
                  alt={cast.name}
                  width="100px"
                />
              )}
              {/* <img
                src={`${IMG_URL}${cast.profile_path}`}
                alt={cast.name}
                width="200px"
              /> */}
              <p>{cast.name}</p>
              <p> Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MovieCast;
