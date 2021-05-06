import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import MovieCast from '../components/MovieCast';
import MovieReviews from "../components/MovieReviews";
// import PropTypes from 'prop-types'
import defaultPoster from '../defaultPoster.jpg';
import axios from 'axios'



const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

class MovieDetailsView extends Component {
  state = {
    // original_title: null,
    // vote_average: null,
    // overview: null,
    // genres: null,
    movie: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    // console.log(response.data);
    this.setState({ movie: response.data })} catch(err) {
      throw err
    }



    // const response = await axios.get(
    //   `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    // );
    // // console.log(response.data);
    // this.setState({ movie: response.data });
  }

  render() {
    // console.log(this.props.match.params.movieId);
    // console.log(`${IMG_URL}${this.state.movie.poster_path}`);

    // const date = this.state.movie.release_date;
    // console.log(date);
    // console.log(date.split('-')[0]);
    // const genres = this.state.movie.genres.map(genre=>genre.name);
//  console.log(this.props.match.url);
const {
  poster_path,
  title,
  release_date,
  vote_average,
  overview, genres,
} = this.state.movie;

const year = new Date(release_date).getFullYear();

    return (
      <div>
        <h1>Movie details</h1>

        {title && (
          <>
            {poster_path ? (
              <img src={`${IMG_URL}${poster_path}`} alt="" width="200" />
            ) : (
              <img src={defaultPoster} alt="" width="200" />
            )}

            {/* <img src={`${IMG_URL}${poster_path}`} alt="" width="200px" /> */}
            <h2>
              {title}({year})
            </h2>
            <p>User Score: {vote_average}</p>
            <p>{overview}</p>
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${this.props.match.url}/reviews`}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </>
        )}

        <Route
          exact
          path={`${this.props.match.path}/cast`}
          //   render={(props) => {
          //     console.log(props);
          //     const movieId = props.match.params.movieId;
          //     console.log(movieId);
          //     return <MovieCast {...props} />;}}
          render={(props) => <MovieCast {...props} />}
        />
        <Route
          exact
          path={`${this.props.match.path}/reviews`}
          render={(props) => <MovieReviews {...props} />}
        />
      </div>
    );
  }
}


// MovieDetailsView.defaultProps = {
//   poster_path: defaultPoster,
// };

export default MovieDetailsView;  