import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faTumblrSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {

  library.add(fab, fas, faTwitterSquare, faFacebookSquare, faTumblrSquare, faLinkedin);

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