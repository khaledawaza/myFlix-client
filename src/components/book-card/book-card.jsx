import React from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { Button, Card } from "react-bootstrap";

import "./book-card.css";

export const BookCard = ({ book, onBookClick }) => {
 return (
   <Card className="h-100">
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Button onClick={() => onBookClick(book)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string
  }).isRequired,
  onBookClick: PropTypes.func.isRequired
};