import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const booksFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });

        setBooks(booksFromApi);
      });
  }, []);

  return (
      <Row> 
        {!user ? (
          <>
            <LoginView onLoggedIn={(user) => setUser(user)} />
            or
            <SignupView />
          </>
        ) : selectedBook ? (
          <BookView 
            book={selectedBook} 
            onBackClick={() => setSelectedBook(null)} 
          />
        ) : books.length === 0 ? (
          <div>The list is empty!</div>
        ) : (
          <>
          {books.map((book) => (
            <Col className="mb-5" key={book.id} md={3}>
              <BookCard
                book={book}
                onBookClick={(newSelectedBook) => {
                  setSelectedBook(newSelectedBook);
                }}
              />
            </Col>
          ))}
        </>
        )}
      </Row>
  );
};
import{ useState } from "react";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
};
const handleSubmit = (event) => {
  event.preventDefault();

  const data = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday
  };

  fetch("SIGNUP_URL", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    if (response.ok) {
      alert("Signup successful");
      window.location.reload();
    } else {
      alert("Signup failed");
    }
  });
};

return (
  <Container style={{border: "1px solid red"}}>
    <MainView />
  </Container>
);