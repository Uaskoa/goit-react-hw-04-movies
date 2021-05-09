import { Component } from 'react';
import { BASE_URL, API_KEY } from '../settings';
import MovieList from '../components/MovieList/MovieList';
import Searchbar from '../components/Searchbar/Searchbar';
import axios from 'axios';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      movies: [],
    });
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      location.search = location.search.replace(/^\?+/, '');
      this.setState({ searchQuery: location.search });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchMovie();
    }
    const { location } = this.props;
    location.search = searchQuery;
  }

  async fetchMovie() {
    const { searchQuery } = this.state;
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesPage;
