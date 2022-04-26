import React from 'react';
import './App.css';
import NavBar from './components/myNavbar';
import ListaContendor from './components/itemListContainer';


const descripcion ='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

function App() {
  return (
    <div className="App bg-stone-400 ">
         
        <NavBar />
        <br/>
        <div className='flex'>
        <ListaContendor carac={descripcion}  />        

        
        </div>
        
        <br/>

    </div>
  );
}

export default App;
