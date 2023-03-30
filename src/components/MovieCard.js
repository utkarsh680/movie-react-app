import React from "react";
import { addFavourite, removeFromFavourite } from "../actions";
class MovieCard extends React.Component {

  handleFavouriteClick = () => {
    const { movie} = this.props;
    this.props.dispatch(addFavourite(movie));
  }
  hendleUnFavouriteClick = () => {
    const { movie} = this.props;
    this.props.dispatch(removeFromFavourite(movie));
  }
  render() {
    const { movie, isMovieFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {
              isMovieFavourite
              ?
              <button className="unfavourite-btn" onClick={this.hendleUnFavouriteClick}>Unfavourite</button>
              :
              <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
