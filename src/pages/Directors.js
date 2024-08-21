import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    setDirectors([
      {
        name: "Scott Derrickson",
        movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
      },
      {
        name: "Mike Mitchell",
        movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
      },
      {
        name: "Edward Zwick",
        movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
      },
    ]);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map(director => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
