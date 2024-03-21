'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './styles';
import { IoChevronBackOutline } from 'react-icons/io5';

// import { Container } from './styles';

const Levels: React.FC = () => {
  return (
    <Main>
      <Link to='/'>
        <IoChevronBackOutline />
      </Link>

      <section>
        <h1>Choose a level</h1>

        <ul>
          <Link to='/levels/12'>
            <li>12 cards</li>
          </Link>
          <Link to='/levels/16'>
            <li>16 cards</li>
          </Link>
          <Link to='/levels/20'>
            <li>20 cards</li>
          </Link>
        </ul>
      </section>
    </Main>
  );
};

export default Levels;
