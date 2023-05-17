import React, { useState } from 'react';

import './App.css';
import { Products } from './features/products/Products';
import {Cart} from './features/cart/Cart'
function App() {
  const [show,setIsshoe]=useState(false);
  return (
    <div className="App">
    <button onClick={()=>setIsshoe(!show)}>{show ?"Show Items":"Show Add Items"}</button>  

    {
      show ? <Cart></Cart>:  <Products></Products>
    }
 
 
    </div>
  );
}

export default App;
