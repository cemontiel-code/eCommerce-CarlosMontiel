import './App.css';
import AppContextProvider from './components/context/AppContext';
import React from 'react';
import ListaContendor from './components/itemListContainer';
import NavBar from './components/myNavbar';
import ItemDetailContainer from './components/ItemDetailContainer'
import { 
  BrowserRouter as Enrutador ,
  Routes,
  Route, 
} from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>

        <Enrutador>
          <NavBar></NavBar>

          <Routes>
            <Route path='/' element={<ListaContendor />} / >

            <Route path="/category/:categoryId" element={<ListaContendor /> }/>
            <Route path='/item/:id' element={ <ItemDetailContainer />} />
            <Route path='/cart' element={ <CartContainer />} />

          </Routes>
        </Enrutador>

        </CartContextProvider>
      </AppContextProvider>
    
    </>
  );
}

export default App;
