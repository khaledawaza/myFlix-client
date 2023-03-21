import { Link } from "react-router-dom";
import React from "react";
import { Card } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

// MovieView receives property from the MainView - movies
export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <div>
        <img className="w-100" src={movie.image} crossOrigin="anonymous" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director.name}</span>
      </div>
      <Link to={`/movies/${movie.id}`}>More</Link>
    </Card>
  );
};
