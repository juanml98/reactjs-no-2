import React from 'react';

import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';



function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
        <ItemListContainer/>
        
      </header>
    </div>
  );
}

export default App;

