import { createRoot } from 'react-dom/client';

// Importing MainView
import { MainView } from './components/main-view/main-view';

// Import Bootstrap react
import { Container, Col, Row, Form } from "react-bootstrap";

// Import statement to indicate that you need to bundle `./index.scss`
import './index.css';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (

      <MainView />

  );
  // <MainView />;
};

// Finds the root of your app
const container = document.querySelector('#root');
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);