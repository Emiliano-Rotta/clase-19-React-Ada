//ATENCION!!! BUCLE INFINITO
import { useState } from "react";
import "./App.css";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  console.log("personajes", personajes)
    
  //al descomentar esto se produce el bucle infinito porque al actualizar un estado se vuelve a actualizar todo, y al actualizar fetch se vuelve a actualizar el estado
  // fetch(`https://rickandmortyapi.com/api/character`)
  //   .then((res) => res.json())
  //   .then((data) => setPersonajes(data.results));

  return (
    <div className="App"> 
      {personajes.map((personajes) => (
        <h1>{personajes.name}</h1>

      ))}
    </div>
        
  );
};

export default App;