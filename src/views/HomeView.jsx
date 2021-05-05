import {Component} from 'react'
import { Link } from "react-router-dom";

import axios from 'axios'


const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "be2bb7fd29eddf6e05cfa10ca2e7b19c";


class HomeView extends Component {
state ={
    movies:[],
}

async componentDidMount() {

    const response = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );

    //   console.log(response.data.results)
      this.setState({ movies: response.data.results });
}


    render () { 
                 return (
           <div>
             <h1>Home page</h1>
             <ul>
               {this.state.movies.map((movie) => (
                 <li key={movie.id}>
                   <Link to={`/movies/${movie.id}`}>
                     
                     {movie.name}
                     {movie.title}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
         );
        
}

}
export default HomeView;


// `${BASE_URL}/trending/movie/api_key=${API_KEY}&language=en-US&page=${this.page}`;

// `${BASE_URL}/trending/api_key=${API_KEY}`;