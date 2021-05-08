import { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types"
import defaultPoster from "../../defaultPoster.jpg";
import { BASE_URL, API_KEY, IMG_URL } from "../../settings";
import "./Cast.scss";


class Cast extends Component {
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

  render() {
    const { casts } = this.state;
    return (
      <div>
        {casts.length > 0 ? (
          <ul className="cast">
            {this.state.casts.map((cast) => (
              <li key={cast.id} className="cast__item">
                {cast.profile_path ? (
                  <img
                    src={`${IMG_URL}${cast.profile_path}`}
                    alt={cast.name}
                    width=""
                  />
                ) : (
                  <img src={defaultPoster} alt={cast.name} width="" />
                )}
                <p className="cast__text ">{cast.name}</p>
                <p className="cast__text">
                  <span className="cast__text--accent">Character: </span>
                  {cast.character}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No information yet</p>
        )}
      </div>
    );
  }

 }
export default Cast;

 Cast.propTypes = {
   movieId: PropTypes.string,
 };
