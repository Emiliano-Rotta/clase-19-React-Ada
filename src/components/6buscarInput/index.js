import { useState, useEffect } from "react";
import Card from "./Card"
import "./App.css";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [input, setInput] = useState([]); 
  const [busqueda, setBusqueda] = useState("");

  // console.log("personajes", personajes)
  // console.log("input", input)
  
  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
    .then((res) => res.json())
    .then((data) => setPersonajes(data.results));
  }, [input]);

  const handleChange = (e) => { 
    // console.log(e.target.value)
    setInput(e.target.value)
  }
  const handleClick = (e) => { 
    setBusqueda(input)
  }
  
  return (
    <div className="App"> 
      <div>
        <p>Buscar personaje {input}</p>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Buscar</button>
      </div>


       {personajes.map((personaje) => (
        <Card name={personaje.name} img={personaje.image} />
      ))}
    </div>      
  );
};

export default App;