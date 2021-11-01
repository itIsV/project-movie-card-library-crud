import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.request();
  }

  request = async () => {
    const { getMovies } = movieAPI;
    const result = await getMovies();
    this.setState({ movies: [...result] });
  };

  render() {
    const { movies } = this.state;
    const movieTrue = (
        <div data-testid="movie-list">
          <div className="flex max-w-max flex-wrap flex-row pt-6">
            {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link
          className="text-yellow-special flex-col w-1/3 px-8 rounded-t-full border-t-2 border-red-fireEngine"
          to="/movies/new">
          <img alt="film" src="images/tela-do-teatro-do-cinema.jpg"/>
            ADICIONAR CARTÃO
            </Link>
          </div>
        </div>);
    return (
      <section>{(movies.length) ? movieTrue : <Loading />}</section>
    );
  }
}

export default MovieList;
