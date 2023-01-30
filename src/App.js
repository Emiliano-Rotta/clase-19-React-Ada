import { useState, useEffect } from "react";
import Card from "./Card"
import "./App.css";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [input, setInput] = useState([]); 
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("input:", input);
  console.log("busqueda:", busqueda);

  useEffect(() =>{
    setLoading(true);
    // fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
    fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
    .then((res) => res.json())
    .then((data) => {
      setPersonajes(data.results)
      setLoading(false)
    });
  }, [input]);
// }, [busqueda]);

  const handleChange = (e) => { 
    setInput(e.target.value)
  }
  const handleClick = (e) => { 
    setBusqueda(input)
  }
  
  return (
    <div className="App"> 
      <div>
        {loading && <h1>CARGANDO</h1>}
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