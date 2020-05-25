import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
// import { Container } from './styles';

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:3333';

  useEffect(() => {

    const location = window.location.search;

    const { name, room } = queryString.parse(location);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [ENDPOINT]);

  return <h1>Chat</h1>
}

export default Chat;
