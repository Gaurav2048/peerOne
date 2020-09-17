import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import ChatHead from "../Components/ChatHead/ChatHead";
import HeadSection from "../Components/Chat/HeadSection";
import Chat from "../Components/Chat/Chat";


const Dashboard = () => {
  return (
    <Container
      style={{
        width: '80%',
        height: '96%',
        marginLeft: '10%',
        marginRight: '10%',
        border: '1px solid #cccccc',
        marginTop: '2%',
        marginBottom: '2%',
      }}
    >

      <Row>
        <Col md={4} className = "bg-light" >

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
          
        <ChatHead />
        <ChatHead />
        <ChatHead />

        </Col>

        <Col md={8}>
          <HeadSection />
          <Chat />
        </Col>
      </Row>

    </Container>
  );
};

export default Dashboard;
