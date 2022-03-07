import { Link } from "react-router-dom";

function DogList({ dogs }) {



  return (
    <div className="DogList">
      {dogs.map(dog => {
        return (
          <div key={dog.name}>
            <h1>
              <Link to={`dogs/${dog.name}`}>{dog.name}</Link>
            </h1>
            <img alt={dog.name} src={`${process.env.PUBLIC_URL}/${dog.name}.jpg`} />
          </div>
        )
      })}
    </div >
  );
}


export default DogList;