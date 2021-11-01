import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card" className="flex-col w-1/3 px-8">
        <Link className="text-yellow-special" to={ `movies/${movie.id}` }>
          <img alt="film" src={ movie.imagePath }
          className="text-center rounded-t-full border-t-2 border-red-fireEngine"/>
          <h1 className="text-white-babyPowder">{movie.title}</h1>
          <p className="text-white-babyPowder">{movie.storyline}</p>
          <h1>VER DETALHES</h1>
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
