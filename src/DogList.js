import axios from "axios";
import { useState, useEffect } from "react";

function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get("localhost:5000/dogs").then(data => {
      setDogs(data)
    }
    );
  });


  return (
    <div className="DogList">
      {dogs.map(dog => {
        return (
          <div key={dog.name}>
            <h1>{dog.name}</h1>
            <p> Age: {dog.age}</p>
            <p> Facts:
              <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
              </ul>
            </p>

            <img src={`${process.env.PUBLIC_URL}/${dog.name}.jpg`} />
          </div>
        )
      })}
    </div >
  );
}


export default DogList;