import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {

  const [activePage, setActivePage] = useState(0);

  const changeActivePage = (page) => {
    setActivePage(page);
  };

  return (
    
    <div className="App">
      <Header activePage={activePage}/>
      <Main activePage={activePage} changeActivePage={changeActivePage}/>
    </div>
  );
}

export default App;