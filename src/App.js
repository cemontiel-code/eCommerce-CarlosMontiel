import React from 'react'
import './App.css';
import './components/navBar.js'
import Saludo from './components/navBar.js';

function App() {
  return (
    <div className="App">
    
        <Saludo name="miguel" calle='43'/>
        <h1>hola</h1>  
    </div>
  );
}

export default App;
