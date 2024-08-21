import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    setActors([
      {
        name: "Benedict Cumberbatch",
        movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
      },
      {
        name: "Justin Timberlake",
        movies: ["Trolls", "Friends with Benefits", "The Social Network"],
      },
      {
        name: "Anna Kendrick",
        movies: ["Pitch Perfect", "Into The Wood"],
      },
      {
        name: "Tom Cruise",
        movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"],
      },
    ]);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map(actor => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
