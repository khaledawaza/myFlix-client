import React from 'react';
import { MovieCard } from '../movie-card/movie-card';

export class MainView extends React.Component {

  constructor(){
    super();

    this.state = {
      movies: [{title: "Clash of Titans"}, {title: "Guardians of the Galaxy"}]
    }
  }

  render() {
    const { movies } = this.state;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {movies.map((movieItem, index) => <MovieCard movie={movieItem} key={index} />)}
      </div>
    );
  }
}
