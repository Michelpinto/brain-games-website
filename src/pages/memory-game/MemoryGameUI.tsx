import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Div, Main } from './styles';

const MemoryGameUI: React.FC = () => {
  return (
    <Main>
      <Link to='/'>
        <IoChevronBackOutline />
      </Link>

      <section>
        <h1>Memory card game</h1>
        <Div>
          <span>🌱</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Div>
      </section>
    </Main>
  );
};

export default MemoryGameUI;
