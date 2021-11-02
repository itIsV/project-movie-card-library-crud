import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate text-center px-4 bg-black-raisin rounded-md border-8 border-black-black"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle">
          Subtítulo
          <input
            className="text-center px-4 bg-black-raisin rounded-md border-8 border-black-black"
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row border-8 border-black-black mb-1">
        <label htmlFor="movie_image">
          Imagem
          <input
            className="text-center px-4 bg-black-raisin rounded-md"
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="border-8 border-black-black mb-1">
        <label htmlFor="movie_storyline">
        Sinopse:
          <textarea
            className="text-center px-4 bg-black-raisin rounded-md"
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div className="border-8 border-black-black mb-1">
        <label htmlFor="movie_genre">
          Gênero:
          <select
            className="text-center px-4 bg-black-raisin rounded-md"
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div className="border-8 border-black-black mb-14">
        <label htmlFor="movie_rating">
        Avaliação:
          <input
            className="text-center px-0 bg-black-raisin rounded-lg"
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="border-8 border-black-black">
        <Link
          className="text-center px-4 bg-yellow-special rounded-2xl" to="/"
          >VOLTAR
        </Link>
        <button
          className="text-center px-4 bg-blue-special rounded-2xl" to="/"
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="text-gray-special2 text-center pt-12 text-4xl">
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
