import { useReducer } from 'react';

import './assets/style/main.scss';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ShoppingCar from './components/ShoppingCar';
import { shoppingCarContext, cartReducer, carInit } from './store';

function App() {
  const reducer = useReducer(cartReducer, carInit)

  return (
    <shoppingCarContext.Provider value={reducer}>
      <Navbar/>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-7'>
            <ProductList/>
          </div>
          <div className='col-md-5'>
            <ShoppingCar/>
          </div>
        </div>
      </div>
    </shoppingCarContext.Provider>
  );
}

export default App;


