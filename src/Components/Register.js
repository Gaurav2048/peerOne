import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { auth, firestore } from '../firebase';
import { navigate } from '@reach/router';

const Register = ({ props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onStartSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const userId = data.user.uid;
        return firestore.collection('users').doc(userId).set({
          name: name,
          email: email,
        });
      })
      .then((data) => {
        navigate('/');
      })
      .catch((e) => {
        console.log(e);
        e.code === 'auth/user-not-found' && navigate('/dd');
      });
  };

  const onChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
    if (e.target.name === 'name') setName(e.target.value);
  };

  return (
    <Container className="">
      <Col
        sm={10}
        className="mt-5 bg-light"
        style={{ border: '1px solid #cecece', borderRadius: '8px' }}
      >
        <Form className="p-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={(e) => onChange(e)}
              value={name}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => onChange(e)}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => onChange(e)}
              value={password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => onStartSignUp(e)}
          >
            SignUp
          </Button>
          <Button variant="secondary" className="ml-2">
            Login
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default Register;
