import React from 'react'
import { useContext } from 'react'
import classes from './HearderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../store/cart-context'

export default function HeaderCartButton(props) {
  const cartCtx= useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0);
  return (

    
    <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
    <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
      
  
  );
};
