import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return( 
    <>
      <NavBar />
      <ItemListContainer 
        nombre={"Victor"} 
        msg={"bienvenido a tu tienda en linea."}
      />
      <ItemDetailContainer />
    </>
  );
}

export default App;
