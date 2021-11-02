import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      movie: '',
      id,
    };
  }

  componentDidMount() {
    this.request();
  }

  delete = () => {
    const { id } = this.state;
    const { deleteMovie } = movieAPI;
    return deleteMovie(id);
  }

  request = async () => {
    const { getMovie } = movieAPI;
    const { id } = this.state;
    const result = await getMovie(id);
    this.setState({
      movie: result,
    });
  };

  render() {
    const { movie, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const cardIsTrue = (
      <div data-testid="movie-details" 
      className="text-white-babyPowder text-center pt-12">
        <img alt="Movie Cover" src={ `../${imagePath}` } 
        className="
          block 
          mx-auto
          rounded-t-full
          border-t-2
        border-red-fireEngine"
        />
        <div className="text-4xl pt-12">
          <p className="pt-4">{ `Title: ${title}` }</p>
          <p className="pt-4">{ `Subtitle: ${subtitle}` }</p>
          <p className="text-center px-96 pt-4">{ `Storyline: ${storyline}` }</p>
          <p className="pt-4">{ `Genre: ${genre}` }</p>
          <p className="p-4">{ `Rating: ${rating}` }</p>
          <Link
          className="text-center px-4 bg-yellow-special rounded-2xl" to="/"
          >VOLTAR</Link>
          <Link
          className="text-center px-4 bg-blue-bdazzled rounded-2xl" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link
          className="text-center px-4 bg-red-fireEngine rounded-2xl" onClick={ this.delete } to="/">DELETAR</Link>
        </div>
      </div>
    );

    return (
      <section>
        {(movie) ? cardIsTrue : <Loading />}
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
