import React from 'react';
import { IoAlbumsOutline, IoSearchOutline } from 'react-icons/io5';

import { Container } from './navStyles';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <Container>
      <Link to='/WordSearch'>
        <button>
          <IoSearchOutline />
        </button>
      </Link>
      <Link to='/levels'>
        <button>
          <IoAlbumsOutline />
        </button>
      </Link>
    </Container>
  );
};

export default Nav;
