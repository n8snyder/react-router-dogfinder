import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import './App.css';
import Routes from './Routes';

function App() {
  const [dogs, setDogs] = useState([]);

  if (dogs.length === 0) {
    axios.get("http://localhost:5000/dogs").then(data => {
      setDogs(data.data)
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav dogs={dogs} /> */}
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}
// navbar & doglist are presentational

// make async api call here (dogstate lives in app) + boolean state for API call to run other function

export default App;
