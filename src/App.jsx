import { useEffect, useState } from 'react';
import './App.css';
import { useMovies } from './hooks/useMovies';

function App() {
  const [search, setSearch] = useState('');
  const { movies, getMovies } = useMovies({ search });

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    getMovies({ search });
  };

  useEffect(() => {
    getMovies({ search });
  }, [search]);

  return (
    <main>
      <h1> App</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='avengers, star wars, etc.'
          value={search}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>

      {movies ? (
        <ul className='movies'>
          {movies.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.image} alt={movie.Title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Movies not found</p>
      )}
    </main>
  );
}

export default App;
