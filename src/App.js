import React from 'react';
import './App.css';
import NavBar from './components/myNavbar';
import ListaContendor from './components/itemListContainer';
//import ListaContendor from './components/itemListContainer';
import BotonContador from './components/ItemCount';

import { 
  BrowserRouter as Enrutador ,
  Routes,
  Route, 
} from 'react-router-dom';




function App() {
  return (
    <Enrutador>
      <NavBar></NavBar>
        

        <ListaContendor  />        

      <Routes>
        <Route path='/:' >
          
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Enrutador>
    /*
    <div className="App bg-stone-400 ">
         
        <NavBar />
        <br/>
        <div className='flex'>
        <ListaContendor carac={descripcion}  />        

        
        </div>
        
        <br/>

    </div>*/
  );
}

export default App;
