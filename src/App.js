import './App.css';
import AppContextProvider from './components/context/AppContext';
import React from 'react';
import NavBar from './components/myNavbar';
import ListaContendor from './components/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import { 
  BrowserRouter as Enrutador ,
  Routes,
  Route, 
} from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';

function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>

        <Enrutador>
          <NavBar></NavBar>

          <Routes>
            <Route path='/' element={<ListaContendor CatName={"Tienda multiuso"} />} / >

            <Route path="/category/:categoryId" element={<ListaContendor CatName={'category'}/> }/>
            <Route path='/item/:id' element={ <ItemDetailContainer />} />
          </Routes>
        </Enrutador>

        </CartContextProvider>
      </AppContextProvider>
    
    </>
  );
}

export default App;
