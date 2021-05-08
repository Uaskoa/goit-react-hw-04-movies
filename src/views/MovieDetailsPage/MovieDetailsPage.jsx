import { Component } from "react";
import axios from "axios";
import { BASE_URL, API_KEY, IMG_URL } from "../../settings";
import { NavLink, Route } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
// import PropTypes from 'prop-types'
import defaultPoster from "../../defaultPoster.jpg";
import routes from "../../routes";
import "./MovieDetailsPage.scss";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      this.setState({ movie: response.data });
    } catch (err) {
      throw err;
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);

    // history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state.movie;
    const year = new Date(release_date).getFullYear();
    const vote = vote_average * 10;

    return (
      <div>
        <button
          type="button"
          onClick={this.handleGoBack}
          className="goback__button"
        >
          Go back
        </button>
        <div className="movie">
          {title && (
            <>
              {poster_path ? (
                <img
                  src={`${IMG_URL}${poster_path}`}
                  alt="{title}"
                  className="movie__image"
                />
              ) : (
                <img
                  src={defaultPoster}
                  alt="{title}"
                  className="movie__image"
                />
              )}

              <div className="movie__desc">
                <h2 className="movie__title">
                  {title} ({year})
                </h2>

                <p className="movie__text">User Score: {vote} %</p>
                <p className="movie__text">{overview}</p>
                <ul className="movie__genres">
                  {genres.map((genre) => (
                    <li key={genre.id}>#{genre.name}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="additional">
          <h2>Additional information</h2>
          <ul className="additional__list">
            <li className="additional__item">
              <NavLink
                to={`${this.props.match.url}/cast`}
                className="additional__link"
                activeClassName="additional__link--active"
              >
                Cast
              </NavLink>
            </li>
            <li className="additional__item">
              <NavLink
                to={`${this.props.match.url}/reviews`}
                className="additional__link"
                activeClassName="additional__link--active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route
          exact
          path={`${this.props.match.path}/cast`}
          render={(props) => <Cast {...props} />}
        />
        <Route
          exact
          path={`${this.props.match.path}/reviews`}
          render={(props) => <Reviews {...props} />}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
