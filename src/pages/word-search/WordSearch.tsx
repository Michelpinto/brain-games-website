import React from 'react';

import { Div, Main, Section } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

const currentTopics = ['Countries', 'Fruits', 'Animals'];

const WordSearch: React.FC = () => {
  const navigate = useNavigate();

  const handleTopicSelection = (topic: string) => {
    navigate(`/WordSearch/${topic}`);
  };

  const renderTopicOptions = () => {
    return currentTopics.map((topic: string) => (
      <Div onClick={() => handleTopicSelection(topic)} key={topic}>
        <h1>{topic}</h1>
      </Div>
    ));
  };

  return (
    <Main>
      <nav>
        <Link to='/'>
          <IoChevronBackOutline />
        </Link>
        <h1>Choose a topic</h1>
        <span></span>
      </nav>

      <Section>{renderTopicOptions()}</Section>
    </Main>
  );
};

export default WordSearch;
