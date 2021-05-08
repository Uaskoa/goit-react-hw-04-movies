import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import defaultPoster from "../../defaultPoster.jpg";
import { IMG_URL } from "../../settings";
import "./MovieList.scss";

const MovieList = ({ movies, location }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movies__item">
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
            className="movies__link"
          >
            {movie.poster_path ? (
              <img
                className="movies__img"
                src={`${IMG_URL}${movie.poster_path}`}
                alt={movie.title}
                width=""
              />
            ) : (
              <img
                className="movies__img"
                src={defaultPoster}
                alt={movie.title}
                width=""
              />
            )}

            <span className="movies__title"> {movie.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);

MovieList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};
