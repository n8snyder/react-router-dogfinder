import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {

  return (
    <div className="Nav">
      {
        dogs.map(dog => {
          return (<p key={dog.name}>
            <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
          </p>)
        })
      }
    </div>
  );
}

export default Nav;