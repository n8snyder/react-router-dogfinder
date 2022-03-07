import { useParams } from "react-router-dom"

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase())

  // if (dog === undefined) {
  //   return <NotFound />
  // }

  console.log("dogs", dogs);
  console.log("dog", dog);
  console.log("name", name);

  return (
    <div className="DogDetails">
      {dog &&
        <div>
          <h1>{dog.name}</h1>
          <p> Age: {dog.age}</p>
          <p> Facts:</p>
          <ul>
            {dog.facts?.map(fact => <li>{fact}</li>)}
          </ul>
          <img alt={dog.name} src={`${process.env.PUBLIC_URL}/${dog.name}.jpg`} />
        </div>}
    </div>
  )
}

export default DogDetails;