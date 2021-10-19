import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenuOpen = () => {
      setMenuOpen(!menuOpen);
  };

  return (

    <div className="App">
      <Router>
        <Header menuOpen={menuOpen} changeMenuOpen={changeMenuOpen}/>
        <Main />
      </Router>
    </div>
  );
}

export default App;