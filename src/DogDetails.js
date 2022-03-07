import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function DogDetails() {
  const [dog, setDog] = useState({ age: "", facts: [], name: "", src: "" });
  const { name } = useParams();

  console.log("name: ", name)
  console.log("dog; ", dog)


  // useEffect(() => {
  //   axios.get(`http://localhost:5000/dogs?name=${name}`).then(data => {
  //     setDog(data.data)
  //   });
  // });



  if (dog.name?.length === 0) {
    axios.get(`http://localhost:5000/dogs?name=${name}`).then(data => {
      setDog({ ...data.data })
    });
  }



  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <p> Age: {dog.age}</p>
      <p> Facts:</p>
      <ul>
        {dog.facts?.map(fact => <li>{fact}</li>)}
      </ul>
      <img alt={dog.name} src={`${process.env.PUBLIC_URL}/${dog.name}.jpg`} />


    </div>
  )
}

export default DogDetails;