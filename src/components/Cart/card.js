import React from 'react'
import {useContext} from 'react';
import classes from './Card.module.css';
import Modal from './Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItmes';
export default function Card(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount= `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems=cartCtx.items.length >0;
  const cartItemRemoveHandler=(id)=>{

  }
  const cartItemAddHandler=(item)=>{

  }
  const cardItems=(<ul className={classes['card-items']}>
  {cartCtx.items.map((item)=>(
    <CartItem key={item.id}
    name={item.name}
    amount={item.amount}
    price={item.price}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item.id)}
    />
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
