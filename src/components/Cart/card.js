import React from 'react'
import {useContext} from 'react';
import classes from './Card.module.css';
import Modal from './Modal';
import CartContext from '../store/cart-context';
export default function Card(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount= `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems=cartCtx.items.length >0;
  const cardItems=(<ul className={classes['card-items']}>
  {cartCtx.items.map((item)=>(
    <li>{item.name}</li>
  ))}
  </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cardItems}
      <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span> 
     </div>
     <div className={classes.actions}>
      <button className={classes['button--alt']}onClick=  
       {props.onClose}>Close</button>
      {hasItems && <button className={classes.button}>Order</button>}
      </div> 
  </Modal>
  );
};
