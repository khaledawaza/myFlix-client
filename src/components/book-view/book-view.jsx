import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Col from 'react-bootstrap/Col';

export class BookView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
       </div>
    );
  }
}
BookView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

<Col md={8} style={{ border: "1px solid black" }}>
         <BookView
           style={{ border: "1px solid green" }}
           book={selectedBook}
           onBackClick={() => setSelectedBook(null)}
         />
       </Col>

 return (
  <Row className="justify-content-md-center">
    …
  </Row>
);