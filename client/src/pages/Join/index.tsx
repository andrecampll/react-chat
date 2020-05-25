import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { JoinOutterContainer, JoinInnerContainer, Button, } from './styles';

const Join: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <JoinOutterContainer>
      <JoinInnerContainer>
        <h1>Join</h1>
        <div><input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /></div>
        <div><input type="text" placeholder="Room" onChange={(e) => setRoom(e.target.value)}/></div>


        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Button type="submit" >Sign In</Button>
        </Link>
      </JoinInnerContainer>
    </JoinOutterContainer>
  );
}

export default Join;
