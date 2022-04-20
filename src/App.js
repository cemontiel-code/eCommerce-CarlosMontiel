import React from 'react';
import './App.css';
import Saludo from './components/myNavbar';
import ListaContendor from './components/itemListContainer';
import ItemContainer from './components/itemContainer';


const descripcion ='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

function App() {
  return (
    <div className="App bg-stone-400 ">
         
        <Saludo />
        <br/>
        <ListaContendor >
          <ItemContainer tittle='vehiculo #1' descrip={descripcion} />        
          <ItemContainer tittle='vehiculo #2' descrip={descripcion} />        
          <ItemContainer tittle='vehiculo #3' descrip={descripcion} />        
        </ListaContendor >
        <br/>
    </div>
  );
}

export default App;
