import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return( 
    <>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer nombre={"Victor"} msg={"Este es el home del sitio"}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer nombre={"Victor"} msg={"Esta es la sección categoría: "}/>} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
