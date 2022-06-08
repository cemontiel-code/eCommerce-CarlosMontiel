import { 
  BrowserRouter as Enrutador ,
  Routes,
  Route, 
} from 'react-router-dom';

import CartContextProvider from './components/context/CartContext';

import NavBar from './components/myNavbar';
import ListaContendor from './components/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className='flex flex-col h-screen'>
        <CartContextProvider>

        <Enrutador>
          <NavBar />

          <Routes>
            <Route path='/' element={<ListaContendor />} / >

            <Route path="/category/:categoryId" element={<ListaContendor /> }/>

            <Route path='/item/:id' element={ <ItemDetailContainer />} />
            <Route path='/cart' element={ <CartContainer />} />
            <Route path='/checkout' element={ <Checkout  />} />
            <Route path='*' />

          </Routes>
        </Enrutador>

        </CartContextProvider>
    
    </div>
  );
}

export default App;
