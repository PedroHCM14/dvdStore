import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App () {
  return <div>
    <NavBar />
    <ItemListContainer message='Nenhum produto disponível.' />
    </div>;
}

export default App;