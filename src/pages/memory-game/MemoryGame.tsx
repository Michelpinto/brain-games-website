import React, { useState } from 'react';
import MemoryGameUI from './MemoryGameUI';

// import { Container } from './styles';

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState();
  const [fliped, setFliped] = useState(false);

  return <MemoryGameUI />;
};

export default MemoryGame;
