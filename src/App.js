import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import NavBar from "./components/NavBar";
import CartContext from './context/CartContext';
import Checkout from './components/Checkout';

function App() {
  return( 
    <>
      <CartContext>
        <BrowserRouter >
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer nombre={"Victor"} msg={"Este es el home del sitio"}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer nombre={"Victor"} msg={"Esta es la sección categoría: "}/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
