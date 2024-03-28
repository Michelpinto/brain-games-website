import React, { useEffect, useRef, useState } from 'react';
import MemoryGameUI from './MemoryGameUI';
import { useLocation } from 'react-router-dom';

export interface Card {
  content: string;
  flipped: boolean | null;
  matched: boolean;
}

const initializeCards = (level: string): Card[] => {
  let numCards = 12; // Default level is 12 cards

  switch (level) {
    case '/levels/2':
      numCards = 16;
      break;
    case '/levels/3':
      numCards = 20;
      break;
    case '/levels/4':
      numCards = 24;
      break;
    case '/levels/5':
      numCards = 30;
      break;
    case '/levels/6':
      numCards = 36;
      break;
    default:
  }

  const uniqueItems = [
    '🚀',
    '🌱',
    '💧',
    '🎉',
    '🏗️',
    '👺',
    '🌟',
    '❄️',
    '💰',
    '🌳',
    '🍕',
    '🎈',
    '🚎',
    '🔑',
    '🦠',
    '💣',
    '💡',
    '🔋',
    '⏳',
  ];
  const arrayPairs = [
    ...uniqueItems.slice(0, numCards / 2),
    ...uniqueItems.slice(0, numCards / 2),
  ];

  for (let i = arrayPairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayPairs[i], arrayPairs[j]] = [arrayPairs[j], arrayPairs[i]];
  }

  return arrayPairs.map((content) => ({
    content,
    flipped: null,
    matched: false,
  }));
};

const MemoryGame: React.FC = () => {
  const location = useLocation();
  const [cards, setCards] = useState<Card[]>(
    initializeCards(location.pathname)
  );
  const [misses, setMisses] = useState(0);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [revealCards, setRevealCards] = useState(true);
  const timerRef = useRef<number>(0);
  const newLvlTimerRef = useRef<number>(0);
  const [level, setLevel] = useState<number>(1);

  const handleNextLevel = () => {
    setRevealCards(true);
    const nextLevel = level + 1;
    setLevel(nextLevel);
    setCards(initializeCards(`/levels/${nextLevel}`));
    newLvlTimerRef.current = setTimeout(() => {
      setRevealCards(false);
      console.log(`happening`);
    }, 1500);
    setMisses(0);
    setMoves(0);
    setShowModal(false);
    setMessage('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealCards(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (index: number) => {
    const updatedCards = [...cards];

    if (updatedCards[index].flipped || updatedCards[index].matched) {
      return;
    }

    updatedCards[index].flipped = true;

    const flippedCards = updatedCards.filter(
      (card) => card.flipped && !card.matched
    );

    if (flippedCards.length === 2) {
      if (flippedCards[0].content === flippedCards[1].content) {
        setMoves(moves + 1);
        flippedCards.map((card) => {
          return (card.matched = true);
        });
      } else if (flippedCards[0].content !== flippedCards[1].content) {
        setMisses(misses + 1);
        setMoves(moves + 1);
        setTimeout(() => {
          flippedCards.map((card) => {
            return (card.flipped = false);
          });
          setCards(updatedCards.slice());
        }, 1000);
      }
    }

    const allMatched = updatedCards.every((card) => card.matched);
    if (allMatched) {
      const movesMinusMisses = moves - misses;

      if (misses > movesMinusMisses && moves < 15) {
        setShowModal(true);
        setMessage(`You struggled a bit 😵‍💫. Would you like to repeat?`);
      } else {
        setShowModal(true);
        setMessage(`Congrats 🥳 🚀, you did great. Advance to next level!`);
      }
    }

    setCards(updatedCards);
  };

  useEffect(() => {
    setCards(initializeCards(location.pathname));
  }, [location.pathname]);

  const handleReset = () => {
    setRevealCards(true);
    setCards(initializeCards(`/levels/${level}`));
    timerRef.current = setTimeout(() => {
      setRevealCards(false);
    }, 1500);
    setMisses(0);
    setMoves(0);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(newLvlTimerRef.current);
    };
  }, []);

  return (
    <MemoryGameUI
      cards={cards}
      handleClick={handleClick}
      handleReset={handleReset}
      moves={moves}
      misses={misses}
      message={message}
      showModal={showModal}
      setShowModal={setShowModal}
      revealCards={revealCards}
      handleNextLevel={handleNextLevel}
    />
  );
};

export default MemoryGame;
