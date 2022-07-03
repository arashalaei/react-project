import { Box } from './styles';
import MovieList from './components/movie-list/index.js';
import StarShips from './components/starships/index.js';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [page, setPage] = useState('movies')
  const [selectedMovie, setselectedMovie] = useState(null)

  return (
    <Box>
      {/* {
        page === 'movies' 
        ? 
          <MovieList 
            setPage={setPage}
            setselectedMovie={setselectedMovie}
            />: 
        <>
        {
          selectedMovie? 
            <StarShips
              setPage={setPage} 
              selectedMovie={selectedMovie} />:
            null
        }
          </>
        
      } */}

    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<MovieList setPage={setPage} setselectedMovie={setselectedMovie}/>}/>
        <Route exact path='/Movies' element={<MovieList setPage={setPage} setselectedMovie={setselectedMovie}/>}/>
        <Route exact path='/Movie/:id/starships' element={<StarShips  setPage={setPage} selectedMovie={selectedMovie}/>}/>
      </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
