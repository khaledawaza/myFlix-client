import { Link } from "react-router-dom";
import React from "react";
import { Card } from "react-bootstrap";

// MovieView receives property from the MainView - movies
export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <span>Director: </span>
          <span>{movie.director.name}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          to={`/movies/${movie.id}`}
          className="btn btn-sm btn-outline-primary"
        >
          More
        </Link>
      </Card.Footer>
    </Card>
  );
};
