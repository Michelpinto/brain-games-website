import { Route, Routes } from 'react-router';
import MemoryGame from './pages/memory-game/game/MemoryGame';
import WordSearch from './pages/word-search/WordSearch';
import Page from './pages/Page';
import Levels from './pages/memory-game/levels/Levels';
import Game from './pages/word-search/game/Game';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/levels' element={<Levels />} />
        <Route path='/levels/*' element={<MemoryGame />} />
        <Route path='/WordSearch' element={<WordSearch />} />
        <Route path='/WordSearch/:topic' element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
