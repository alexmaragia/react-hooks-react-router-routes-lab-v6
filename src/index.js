import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((response) => response.json())
    .then((data) => setActors(data))
    .catch((error) => console.error("Error fetching actor data", error));
  }, []);

  const actorList = actors.map(actor => (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie,index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </article>
  ))


  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actorList}
      </main>
    </>
  );
};

export default Actors;