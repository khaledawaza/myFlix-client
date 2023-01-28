import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Container fluid className="movieCardContainer">
        <Row>
          <Col>
            <CardGroup>
              <Card className="movieCard mt-3 mb-3">
                <Card.Img variant="top" src={movie.Image} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>
                    <span>{movie.Director.Name}</span>
                  </Card.Text>
                  <Button onClick={() => onMovieClick(movie)} variant="link">
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
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
  onMovieClick: PropTypes.func.isRequired
};