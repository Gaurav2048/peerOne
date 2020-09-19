import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import ChatHead from '../Components/ChatHead/ChatHead';
import HeadSection from '../Components/Chat/HeadSection';
import Chat from '../Components/Chat/Chat';
import TypeArea from '../Components/TypeArea';
import CurrentUser from '../Components/CurrentUser';

import { firestore } from '../firebase';

const Dashboard = () => {
  const [chatUser, setChatUser] = useState({});
  const [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    firestore
      .collection('users')
      .get()
      .then((snapshot) => {
        const users = [];
        snapshot.docs.map((doc) => {
          const user = {
            id: doc.id,
            ...doc.data(),
          };
          users.push(user);
        });
        setState({ ...state, users });
      })
      .catch((err) => {
        console.log('err');
        console.log(err);
      });
  });

  const onUserClicked = (user) => {
    setChatUser((prevState) => {
      return { ...user };
    });
    console.log(chatUser);
  };

  return (
    <Container
      style={{
        width: '80%',
        height: '96vh',
        marginLeft: '10%',
        marginRight: '10%',
        border: '1px solid #cccccc',
        borderRadius: '8px',
        marginTop: '2%',
        marginBottom: '2%',
      }}
    >
      <Row>
        <Col md={4} className="bg-light" style={{ marginTop: '1%' }}>
          <CurrentUser />
          <InputGroup className="mb-3" className="mt-3 mb-3">
            <FormControl
              placeholder="Search User"
              aria-label="Search User Here"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>

          {state.users.map((user) => (
            <ChatHead user={user} key={user.id} onClick={onUserClicked} />
          ))}
        </Col>

        <Col md={8}>
          <HeadSection user={chatUser} />
          <Chat />
          <TypeArea />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
