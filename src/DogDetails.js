import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function DogDetails() {
  const [dog, setDog] = useState({ age: "", facts: [], name: "", src: "" });
  const { name } = useParams();



  useEffect(() => {
    axios.get(`http://localhost:5000/dogs?name=${name}`).then(data => {
      setDog(data.data)
    });
  });

  return (
    <div className="DogDetails">
      <p> Age: {dog.age}</p>
      <p> Facts:
        <ul>
          {dog.facts.map(fact => <li>{fact}</li>)}
        </ul>
      </p>
    </div>
  )
}

export default DogDetails;