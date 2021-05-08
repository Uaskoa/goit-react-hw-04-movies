import { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL, API_KEY } from "../../settings";
import "./Reviews.scss";

class Reviews extends Component {
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

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length > 0 ? (
          <ul className="review__list">
            {reviews.map((review) => (
              <li key={review.author} className="review__item">
                <p className="review__text">
                  <span className="review__author">Author: </span>
                  {review.author}
                </p>
                <p className="review__text">{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    );
  }
}
export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.string,
};
