import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import oeqtam from'./oeqtam.jpg';
import pro from'./prodigo.png';

function App() {
  const [data, setData] = React.useState(null);

  const handleClick = async() => {
    fetch("https://pro-di-go.herokuapp.com/")
    .then((res) => res.json())
    .then((data) => {
      setData(data.message)
    }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={pro} className="App-logo" alt="logo" />
        <p>{!data ? "Tens comichão no olho do cu? Chama-me Capitão Gancho" : data}</p>
        <button onClick={handleClick}>Pró-Di-Go</button>
      </header>
    </div>
  );
}



export default App;
