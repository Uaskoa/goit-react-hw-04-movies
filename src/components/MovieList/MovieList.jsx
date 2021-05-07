import { Link, withRouter } from "react-router-dom";
import defaultPoster from '../../defaultPoster.jpg'
import './MovieList.scss'


// const BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
const IMG_URL = "https://image.tmdb.org/t/p/w500";


const MovieList = ({movies, location}) => {

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

              {/* <img
                  className="movies__img"
                  src={`${IMG_URL}${movie.poster_path}`}
                  alt=""
                  width="200px"
                /> */}
              <span className="movies__title"> {movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
}

export default withRouter(MovieList);

