import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
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
    book: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    console.log(response.data);
    this.setState({ book: response.data });
  }

  render() {
    console.log(this.props.match.params.movieId);
    // console.log(`${IMG_URL}${this.state.book.poster_path}`);

    // const date = this.state.book.release_date;
    // console.log(date);
    // console.log(date.split('-')[0]);
    // const genres = this.state.book.genres.map(genre=>genre.name);
 console.log(this.props.match.url);
    return (
      <div>
        <h1>Movie details</h1>
        <img
          src={`${IMG_URL}${this.state.book.poster_path}`}
          alt=""
          width="200px"
        />
        <h2>
          {this.state.book.title}( {this.state.book.release_date})
        </h2>
        <p>User Score: {this.state.book.vote_average}</p>
        <p>{this.state.book.overview}</p>
        {/* <p>{this.state.book.genres}</p> */}

        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>Reviews</li>
        </ul>
        <Route exact  path="/movies/:movieId/cast" render={() => <h2>Cast</h2>}/>
      </div>
    );
  }
}

export default MovieDetailsView;  