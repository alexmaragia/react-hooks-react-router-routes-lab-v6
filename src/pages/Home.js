import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      { id: 1, title: "Doctor Strange" },
      { id: 2, title: "The Imitation Game" },
      { id: 3, title: "Trolls" },  // Adding more movies
      { id: 4, title: "Pitch Perfect" },  // Adding more movies
    ]);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </main>
    </>
  );
}

export default Home;
