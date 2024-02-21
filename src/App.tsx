import { Route, Routes } from 'react-router';
import MemoryGame from './pages/memory-game/MemoryGame';
import WordSearch from './pages/word-search/WordSearch';
import Page from './pages/Page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/MemoryGame' element={<MemoryGame />} />
        <Route path='/WordSearch' element={<WordSearch />} />
      </Routes>
    </>
  );
}

export default App;
