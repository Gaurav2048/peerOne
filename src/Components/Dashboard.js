import React, { useState, useEffect, useRef } from 'react';
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

import { auth, firestore } from '../firebase';
import Peer from 'peerjs';

const Dashboard = () => {
  const videoRef = useRef();
  const peerRef = useRef();
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

  // peer Js
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        const peer = new Peer();
        peer.on('open', (id) => {
          console.log(id);
          firestore
            .collection('users')
            .doc(user.uid)
            .update({ peerId: id })
            .then((snapshot) => {
              console.log(snapshot);
              peerRef.current = peer;
              receiveCall();
            })
            .catch((err) => {
              console.log(err);
            });
        });

        console.log('This is the user: ', user.uid);
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  }, []);

  const startCall = (userId) => {
    console.log('call started');
    navigator.mediaDevices.getUserMedia(
      { video: false, audio: true },
      (stream) => {
        const call = peerRef.current.call(userId, stream);
        call.on('stream', (remoteStream) => {
          // Show stream in some <video> element.
          videoRef.current.src = window.URL.createObjectURL(stream);
        });
      },
      (err) => {
        console.error('Failed to get local stream', err);
      }
    );
  };

  const receiveCall = () => {
    console.log('call receiver added..,', peerRef.current);
    peerRef.current.on('call', (call) => {
      navigator.mediaDevices.getUserMedia(
        { video: false, audio: true },
        (stream) => {
          alert('we have a call');
          call.answer(stream); // Answer the call with an A/V stream.
          call.on('stream', (remoteStream) => {
            // Show stream in some <video> element.
            console.log('call received');
            videoRef.current.src = window.URL.createObjectURL(stream);
          });
        },
        (err) => {
          console.error('Failed to get local stream', err);
        }
      );
    });
  };

  const onUserClicked = (user) => {
    setChatUser((prevState) => {
      return { ...user };
    });
    console.log(chatUser);
  };

  const handleVideoClick = (id) => {
    console.log('handleVideoClick', id);
    startCall(id);
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
          <HeadSection user={chatUser} onVideoClick={handleVideoClick} />
          <Chat vdref={videoRef} />
          <TypeArea />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
