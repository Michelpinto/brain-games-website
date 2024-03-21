import { Route, Routes } from 'react-router';
import MemoryGame from './pages/memory-game/game/MemoryGame';
import WordSearch from './pages/word-search/WordSearch';
import Page from './pages/Page';
import Levels from './pages/memory-game/levels/Levels';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/levels' element={<Levels />} />
        <Route path='/levels/*' element={<MemoryGame />} />
        {/* <Route path='memoryGame' element={<MemoryGame />} /> */}
        <Route path='/WordSearch' element={<WordSearch />} />
      </Routes>
    </>
  );
}

export default App;
