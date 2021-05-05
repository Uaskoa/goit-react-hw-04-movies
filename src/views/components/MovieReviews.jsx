import { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

class MovieReviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    
    this.setState({ reviews: response.data.results });
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
    // console.log(this.state.casts);
    return (
      <div>
        <h2>Reviews</h2>
        <ul>
          {this.state.reviews.map((review) => (
            <li key={review.author}>
              <p>Author: {review.author}</p>
              <p> Character: {review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MovieReviews;
