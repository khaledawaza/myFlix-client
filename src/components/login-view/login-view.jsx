import axios from 'axios';
import { useState } from 'react';
import {
  Button,
  Form,
  Card,
  CardGroup,
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    axios.post('http://localhost:8080/login', data).then(res => console.log(res))

     fetch('https://movie-api-m3ac.onrender.com/login', {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*"
       }
     })
     .then((response) => response.json())
     .then((data) => {
       console.log("Login response: ", data);
       if (data.user) {
         localStorage.setItem("user", JSON.stringify(data.user));
         localStorage.setItem("token", data.token);
         onLoggedIn(data.user, data.token);
       } else {
         alert("No such user");
       }
     })
     .catch((e) => {
       alert("Something went wrong");
     });
  };
  return (
    <Container>
      {/* <EntranceGreating /> */}
      <Row>
        <Col>
          <CardGroup>
            <Card className='border-0'>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formUsername' className='mt-2'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength='3'
                      pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                      title="Username should contain more than 3 characters, may only contain letters, numbers and special characters: .,'-!?%&"
                      placeholder='Enter your name'
                    />
                  </Form.Group>
                  <Form.Group controlId='formPassword' className='mt-3'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                      title="Password may only contain letters, numbers and special characters: .,'-!?%&"
                      placeholder='Enter your password'
                    />
                  </Form.Group>
                  <Row>
                    <Col className='text-end'>
                      <Button variant='primary' type='submit' className='mt-3'>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};