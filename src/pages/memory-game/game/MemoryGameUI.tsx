import React, { Dispatch, SetStateAction } from 'react';
import {
  IoChevronBackOutline,
  IoRefreshOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import {
  Button,
  CardWrapper,
  Container,
  Div,
  DivBtns,
  FrontFace,
  InsideContainer,
  Main,
  Overlay,
  Text,
} from './styles';
import { Card } from './MemoryGame';
import Modal from '../../../components/modal/Modal';

interface IProps {
  cards: Card[];
  handleClick: (index: number) => void;
  handleReset: () => void;
  moves: number;
  misses: number;
  message: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  revealCards: boolean;
  handleNextLevel: () => void;
}

const MemoryGameUI: React.FC<IProps> = ({
  cards,
  handleClick,
  handleReset,
  moves,
  misses,
  message,
  showModal,
  setShowModal,
  revealCards,
  handleNextLevel,
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
    <>
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
                {revealCards ? (
                  <FrontFace>{card.content}</FrontFace>
                ) : (
                  <FrontFace>{card.flipped ? card.content : '?'}</FrontFace>
                )}
              </CardWrapper>
            ))}
          </Div>

          <Container>
            <Text>
              <span>{moves}</span> Moves
            </Text>
            <Text>
              <span>{misses}</span> Misses
            </Text>
            <Button onClick={() => handleReset()}>Repeat game</Button>
          </Container>
        </section>
      </Main>

      {showModal && (
        <Modal>
          <InsideContainer>
            {message}
            {Math.abs(moves - misses) <= 5 ? (
              <DivBtns>
                <Button
                  onClick={() => {
                    handleReset();
                    setShowModal(false);
                  }}
                  className='modalBtn'
                >
                  Repeat game
                  <IoRefreshOutline />
                </Button>
                <Button className='modalBtn' onClick={handleNextLevel}>
                  Next level
                  <IoChevronForwardOutline />
                </Button>
              </DivBtns>
            ) : (
              <DivBtns>
                <Button
                  onClick={() => {
                    handleReset();
                    setShowModal(false);
                  }}
                  className='modalBtn'
                >
                  Repeat game
                  <IoRefreshOutline />
                </Button>
                <Button className='modalBtn' onClick={handleNextLevel}>
                  Next level
                  <IoChevronForwardOutline />
                </Button>
              </DivBtns>
            )}
          </InsideContainer>
        </Modal>
      )}
      {showModal && <Overlay />}
    </>
  );
};

export default MemoryGameUI;
