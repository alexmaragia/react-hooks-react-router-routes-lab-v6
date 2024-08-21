import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieData = {
      1: { title: "Doctor Strange", runtime: 115, genres: ["Action", "Adventure", "Fantasy"] },
      2: { title: "The Imitation Game", runtime: 113, genres: ["Biography", "Drama", "Thriller"] },
      // Add more movie data here
    };
    setMovie(movieData[id]);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Runtime: {movie.runtime} minutes</p>
        <div>
          {movie.genres.map(genre => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
