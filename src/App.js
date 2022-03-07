import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes />
      </BrowserRouter>
    </div>
  );
}
// navbar & doglist are presentational

// make async api call here (dogstate lives in app) + boolean state for API call to run other function

export default App;
