import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';

// Importing the MainView component
import { MainView } from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.css';

// Main component (will eventually use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container className="my-flix">
        <MainView />
      </Container>
    );
  }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);