import axios from "axios";
import { useState } from "react";

async function DogList() {
  const [dogs, setDogs] = useState(null);

  if (dogs === null) {
    setDogs(await axios.get("localhost:5000/dogs"));
  }

  return (
    <div className="DogList">

    </div>
  );
}

export default DogList;