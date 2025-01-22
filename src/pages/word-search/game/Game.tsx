import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { countries, fruits, animals } from '../topics';

import { Container, Main, Modal, RestartBtn, Section } from './gameStyles';
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackOutline, IoRefreshOutline } from 'react-icons/io5';

const Game: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const [selectedLetters, setSelectedLetters] = useState<[number, number][]>(
    []
  );
  const [currentWord, setCurrentWord] = useState<string>('');
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [shuffleCountries, setShuffleCountries] = useState<string[]>([]);
  const [shuffleFruits, setShuffleFruits] = useState<string[]>([]);
  const [shuffleAnimals, setShuffleAnimals] = useState<string[]>([]);
  const [greyedCells, setGreyedCells] = useState<{
    [word: string]: [number, number][];
  }>({});
  const [wordColors, setWordColors] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setShuffleFruits(
      shuffleArray(fruits.map((fruit) => fruit.toUpperCase())).slice(0, 13)
    );
    setShuffleCountries(
      shuffleArray(countries.map((country) => country.toUpperCase())).slice(
        0,
        13
      )
    );
    setShuffleAnimals(
      shuffleArray(animals.map((animal) => animal.toUpperCase())).slice(0, 13)
    );
  }, []);

  // function to generate a new color to each found word
  const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Restarts the game by resetting found words and selected letters
  const restartGame = useCallback(() => {
    setSelectedLetters([]);
    setCurrentWord('');
    setFoundWords([]);
    setGreyedCells({});
    setWordColors({});
    setShuffleFruits(
      shuffleArray(fruits.map((fruit) => fruit.toUpperCase())).slice(0, 13)
    );
    setShuffleCountries(
      shuffleArray(countries.map((country) => country.toUpperCase())).slice(
        0,
        13
      )
    );
    setShuffleAnimals(
      shuffleArray(animals.map((animal) => animal.toUpperCase())).slice(0, 13)
    );
  }, []);

  // Array shuffle
  const shuffleArray = (array: string[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  let words: string[] = [];

  switch (topic) {
    case 'Countries':
      words = shuffleCountries;
      break;
    case 'Fruits':
      words = shuffleFruits;
      break;
    case 'Animals':
      words = shuffleAnimals;
      break;
    default:
      break;
  }

  // Grid generation
  const generateGridWithWords = (words: string[]): string[][] => {
    const grid = Array.from({ length: 14 }, () =>
      Array.from({ length: 12 }, () => '')
    );

    words.forEach((word) => {
      let placed = false;

      while (!placed) {
        const row = Math.floor(Math.random() * 14);
        const col = Math.floor(Math.random() * 12);
        const direction = Math.floor(Math.random() * 8);

        let fits = true;
        let currentRow = row;
        let currentCol = col;

        for (let i = 0; i < word.length; i++) {
          if (
            currentRow < 0 ||
            currentRow >= 14 ||
            currentCol < 0 ||
            currentCol >= 12 ||
            (grid[currentRow][currentCol] !== '' &&
              grid[currentRow][currentCol] !== word[i])
          ) {
            fits = false;
            break;
          }

          switch (direction) {
            case 0:
              currentCol++;
              break;
            case 1:
              currentCol--;
              break;
            case 2:
              currentRow++;
              break;
            case 3:
              currentRow--;
              break;
            case 4:
              currentRow++;
              currentCol++;
              break;
            case 5:
              currentRow++;
              currentCol--;
              break;
            case 6:
              currentRow--;
              currentCol++;
              break;
            case 7:
              currentRow--;
              currentCol--;
              break;

            default:
              break;
          }
        }

        if (fits) {
          currentRow = row;
          currentCol = col;

          for (let i = 0; i < word.length; i++) {
            grid[currentRow][currentCol] = word[i];

            switch (direction) {
              case 0:
                currentCol++;
                break;
              case 1:
                currentCol--;
                break;
              case 2:
                currentRow++;
                break;
              case 3:
                currentRow--;
                break;
              case 4:
                currentRow++;
                currentCol++;
                break;
              case 5:
                currentRow++;
                currentCol--;
                break;
              case 6:
                currentRow--;
                currentCol++;
                break;
              case 7:
                currentRow--;
                currentCol--;

                break;
              default:
                break;
            }
          }

          placed = true;
        }
      }
    });

    for (let row = 0; row < 14; row++) {
      for (let col = 0; col < 12; col++) {
        if (grid[row][col] === '') {
          grid[row][col] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }

    return grid;
  };

  const wordsArray = useMemo(() => {
    if (topic === 'Fruits') return shuffleFruits;
    if (topic === 'Countries') return shuffleCountries;
    if (topic === 'Animals') return shuffleAnimals;

    return [];
  }, [topic, shuffleFruits, shuffleCountries, shuffleAnimals]);

  const grid = useMemo(() => generateGridWithWords(wordsArray), [wordsArray]);

  const adjacentToLastSelected = (rowIndex: number, colIndex: number) => {
    if (selectedLetters.length === 0) return true;

    const [lastRow, lastCol] = selectedLetters[selectedLetters.length - 1];
    const rowDiff = Math.abs(rowIndex - Number(lastRow));
    const colDiff = Math.abs(colIndex - Number(lastCol));

    return rowDiff <= 1 && colDiff <= 1;
  };

  const handleLetterClick = (rowIndex: number, colIndex: number) => {
    const newSelectedLetters: [number, number][] = [
      ...selectedLetters,
      [rowIndex, colIndex],
    ];

    const selectedWord = newSelectedLetters
      .map(([row, col]) => grid[row][col])
      .join('');

    if (
      wordsArray.includes(selectedWord) &&
      !foundWords.includes(selectedWord)
    ) {
      setFoundWords((prevWords) => [...prevWords, selectedWord]);
      setSelectedLetters(newSelectedLetters);
      setCurrentWord(selectedWord);

      setWordColors((prevColors) => ({
        ...prevColors,
        [selectedWord]: prevColors[selectedWord] || generateColor(),
      }));

      setGreyedCells((prevGreyedCells) => ({
        ...prevGreyedCells,
        [selectedWord]: newSelectedLetters,
      }));
    } else if (
      adjacentToLastSelected(rowIndex, colIndex) &&
      currentWord.length < selectedWord.length
    ) {
      setSelectedLetters(newSelectedLetters);
      setCurrentWord(selectedWord);
    } else {
      setSelectedLetters([]);
      setCurrentWord('');
    }
  };

  useEffect(() => {
    if (foundWords.length === words.length && words.length > 0) {
      setTimeout(() => {
        setShowModal(true);
      }, 100);
    }
  }, [foundWords, words, restartGame]);

  return (
    <>
      <Main>
        <Link to='/WordSearch'>
          <IoChevronBackOutline />
        </Link>
        <Container>
          <h1>{topic}</h1>
          <Section>
            <div>
              {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                  const cellColor = Object.entries(greyedCells).find(
                    ([word, positions]) => {
                      word;

                      if (
                        Array.isArray(positions) &&
                        positions.every((pos) => Array.isArray(pos))
                      ) {
                        return positions.some(
                          ([r, c]) => r === rowIndex && c === colIndex
                        );
                      }
                      return false;
                    }
                  )?.[0];

                  return (
                    <span
                      key={`${rowIndex}-${colIndex}`}
                      onClick={() => handleLetterClick(rowIndex, colIndex)}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: selectedLetters.some(
                          ([row, col]) => row === rowIndex && col === colIndex
                        )
                          ? 'lightblue'
                          : cellColor
                          ? wordColors[cellColor]
                          : 'inherit',
                      }}
                    >
                      {cell}
                    </span>
                  );
                })
              )}
            </div>
            <ul>
              {words &&
                words.map((word, index) => (
                  <li
                    className={foundWords.includes(word) ? 'selectedWord' : ''}
                    key={index}
                  >
                    {word}
                  </li>
                ))}
            </ul>
          </Section>

          <div>
            <RestartBtn onClick={() => restartGame()}>Restart</RestartBtn>
          </div>
        </Container>
      </Main>

      {showModal && (
        <Modal>
          <p>Congrats you found all the words! 🥳</p>
          <div>
            <button
              onClick={() => {
                restartGame();
                setShowModal(false);
              }}
            >
              Play again
              <IoRefreshOutline />
            </button>
            <Link to='/WordSearch'>
              <button>Change topic</button>
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Game;
