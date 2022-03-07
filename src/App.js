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

export default App;
