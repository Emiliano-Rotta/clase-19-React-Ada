// Trabajaremos con CARD
import { useState, useEffect } from "react";
import Card from "./Card"
import "./App.css";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [input, setInput] = useState([]); 
  console.log("personajes", personajes)
  console.log("input", input)
  
  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character/?name=rick`)
    .then((res) => res.json())
    .then((data) => setPersonajes(data.results));
  }, []);

  const handleChange = (e) => { 
    console.log(e.target.value)
    setInput(e.target.value)
  }
  
  return (
    <div className="App"> 
       <p>Buscar personaje</p>
       <input type="text" onChange={handleChange} />
       {personajes.map((personaje) => (
        <Card name={personaje.name} img={personaje.image} />
      ))}
    </div>      
  );
};

export default App;