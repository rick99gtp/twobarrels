import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {

  const [activePage, setActivePage] = useState(0);

  return (
    
    <div className="App">
      <Header />
      <Main activepage={activePage}/>
    </div>
  );
}

export default App;