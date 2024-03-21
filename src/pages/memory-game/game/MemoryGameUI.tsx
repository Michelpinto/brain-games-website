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
  let columns;

  switch (cards.length) {
    case 20:
      columns = 5;
      break;
    case 24:
      columns = 6;
      break;
    case 30:
      columns = 6;
      break;
    case 36:
      columns = 6;
      break;
    default:
      columns = 4;
      break;
  }

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
