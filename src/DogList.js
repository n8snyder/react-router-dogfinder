import axios from "axios";
import { useState, useEffect } from "react";

function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dogs").then(data => {
      setDogs(data.data)
    });
  });


  return (
    <div className="DogList">
      {dogs.map(dog => {
        return (
          <div key={dog.name}>
            <h1>{dog.name}</h1>
            <img alt={dog.name} src={`${process.env.PUBLIC_URL}/${dog.name}.jpg`} />
          </div>
        )
      })}
    </div >
  );
}


export default DogList;