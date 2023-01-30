//aca surge useEffect le decimos que se actualice en determinado momento (lo usamos mucho para el llamado a apis o al back end) 
// teoria https://es.reactjs.org/docs/hooks-effect.html
// es un hook que se importa igual que useState
//sintaxis: useEffect(() =>{}, []) recibe una funcion y un array de depenencia
//sintaxis: useEffect(() =>{ ACA VA EL CODIGO QUE QUIERO EJECUTAR }, [ACA VA CUANDO QUIERO QUE SE EJECUTE (si esta vacio se ejecutara una sola vez)])


import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  console.log("personajes", personajes)
  
  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((data) => setPersonajes(data.results));
  }, []);

  return (
    <div className="App"> 
      {personajes.map((personajes) => (
        <h1>{personajes.name}</h1>
      ))}
    </div>      
  );
};

export default App;