import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Col, Row, Form } from 'react-bootstrap';

import './movie-view.css';

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback)
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container fluid className="movieViewContainer">
        <Row>
          <Col>
            <img className="movie-poster" src={movie.Image} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-title">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-Summary">
              <span className="label">Summary: </span>
              <span className="value">{movie.Summary}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-releaseyear">
              <span className="label">ReleaseYear: </span>
              <span className="value">{movie.Year}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-director">
              <span className="label">Director: </span>
              <span className="value">{movie.Director.Name}</span>
            </div>
            <div>{' Bio: ' + movie.Director.Bio}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="movie-genre">
              <span className="label">Genre: </span>
              <span className="value">{movie.Genre.Name} </span>
            </div>
            <div>{' Description: ' + movie.Genre.Description}</div>
            <Button
              onClick={() => {
                onBackClick(null);
              }}
            >
              Back
            </Button>
            <Button className="ml-2 my-2">Add to Favorites</Button>
            <Button className="ml-2">Remove from Favorites</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string
    }),
    Summary: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Image: PropTypes.string.isRequired
    }),
    Actors: PropTypes.array.isRequired,
    Image: PropTypes.string.isRequired,
    Year: PropTypes.number.isRequired,
    Featured: PropTypes.bool
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};
