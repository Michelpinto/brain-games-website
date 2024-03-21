import React, { useEffect, useState } from 'react';
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
    case '/levels/16':
      numCards = 16;
      break;
    case '/levels/20':
      numCards = 20;
      break;
    case '/levels/24':
      numCards = 24;
      break;
    case '/levels/30':
      numCards = 30;
      break;
    case '/levels/36':
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
        flippedCards.map((card) => {
          return (card.matched = true);
        });
      } else if (flippedCards[0].content !== flippedCards[1].content) {
        setTimeout(() => {
          flippedCards.map((card) => {
            return (card.flipped = false);
          });
          setCards(updatedCards.slice());
        }, 1000);
      }
    }

    setCards(updatedCards);
  };

  useEffect(() => {
    setCards(initializeCards(location.pathname)); // Reset cards when location changes
  }, [location.pathname]);

  const handleReset = () => {
    setCards(initializeCards(location.pathname));
  };

  return (
    <MemoryGameUI
      cards={cards}
      handleClick={handleClick}
      handleReset={handleReset}
    />
  );
};

export default MemoryGame;
