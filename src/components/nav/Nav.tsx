import React from 'react';

import { Container } from './navStyles';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <Container>
      <Link to='/WordSearch'>
        <button>Word search</button>
      </Link>
      <Link to='/MemoryGame'>
        <button>memory card</button>
      </Link>
    </Container>
  );
};

export default Nav;
