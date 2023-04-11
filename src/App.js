import { useState} from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/card';
import Meals from './components/Meals/Meals';
import CartProvider from './components/store/CartProvider';
// import Card from './components/UI/Card';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);
const showCartHandler=()=>{
  setCartIsShown(true);
}

const hideCartHandler=()=>{
  setCartIsShown(false);
}
  return (
    <CartProvider>
  {cartIsShown && <Cart   onClose={hideCartHandler}/>}
  <Header onShowCart={showCartHandler}/>
  <main>
  < Meals />  
  </main>
    </CartProvider>
  );
}

export default App;
