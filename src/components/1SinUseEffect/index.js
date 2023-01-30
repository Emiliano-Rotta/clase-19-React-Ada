//no nos va a poder renderizar la info de la data

import "./App.css";

const App = () => {

    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => console.log("data", data));

  return (
    <div className="App"> hola mundo </div>
    // <div className="App"> {data} </div> //no funciona porque data no esta definido
    
  );
};

export default App;
