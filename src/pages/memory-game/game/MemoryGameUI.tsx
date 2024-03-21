import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Button, CardWrapper, Div, FrontFace, Main } from './styles';
import { Card } from './MemoryGame';

interface IProps {
  cards: Card[];
  handleClick: (index: number) => void;
  handleReset: () => void;
}

const MemoryGameUI: React.FC<IProps> = ({
  cards,
  handleClick,
  handleReset,
}) => {
  const columns = cards.length === 20 ? 5 : 4;

  return (
    <Main>
      <Link to='/levels'>
        <IoChevronBackOutline />
      </Link>

      <section>
        <h1>Memory card game - {cards.length} cards</h1>
        <Div columns={columns}>
          {cards.map((card, index) => (
            <CardWrapper
              className={card.matched ? 'matched' : ''}
              key={index}
              onClick={() => handleClick(index)}
            >
              <FrontFace>{card.flipped ? card.content : '?'}</FrontFace>
            </CardWrapper>
          ))}
        </Div>

        <Button onClick={() => handleReset()}>Repeat game</Button>
      </section>
    </Main>
  );
};

export default MemoryGameUI;
