import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [activePage, setActivePage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenuOpen = () => {
      setMenuOpen(!menuOpen);
  };

  const changeActivePage = (page) => {
    setActivePage(page);
  };

  return (

    <div className="App">
      <Router>
        <Header menuOpen={menuOpen} activePage={activePage} changeMenuOpen={changeMenuOpen}/>
        <Main activePage={activePage} changeActivePage={changeActivePage} />
      </Router>
    </div>
  );
}

export default App;