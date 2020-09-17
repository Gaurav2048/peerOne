import React, { useState } from 'react';
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

const Dashboard = () => {
  const [state, setState] = useState({
    users: [
      {
        id: '0',
        name: 'Gunjan Kalita',
        email: 'gunjan@gmail.com',
      },
      {
        id: '1',
        name: 'Other One Ka',
        email: 'okfine@gmail.com',
      },
      {
        id: '2',
        name: 'Sara Du',
        email: 'sarea@gmail.com',
      },
      {
        id: '3',
        name: 'Sameer Sudhi',
        email: 'sameer@gmail.com',
      },
    ],
  });

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
        <Col md={4} className="bg-light" style={{ marginTop: '8%' }}>
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
            <ChatHead user={user} />
          ))}
        </Col>

        <Col md={8}>
          <HeadSection />
          <Chat />
          <TypeArea />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
