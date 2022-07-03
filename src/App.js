import { Box } from './styles';
import MovieList from './components/movie-list/index.js';
import StarShips from './components/starships/index.js';
import { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState('movies')
  const [selectedMovie, setselectedMovie] = useState(null)

  useEffect(()=> {
    console.log(selectedMovie);
  }, [selectedMovie])

  return (
    <Box>
      {
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
        
      }
      
    </Box>
  );
}

export default App;
