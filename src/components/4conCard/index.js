// Trabajaremos con CARD
import { useState, useEffect } from "react";
import Card from "./Card"
import "./App.css";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  console.log("personajes", personajes)
  
  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((data) => setPersonajes(data.results));
  }, []);

//   return (
//     <div className="App"> 
//       {personajes.map((personaje) => (
//         <Card />
//       ))}
//     </div>      
//   );
// };

// export default App;




  return (
    <div className="App"> 
      {personajes.map((personaje) => (
        <Card name={personaje.name} img={personaje.image} />
      ))}
    </div>      
  );
};

export default App;