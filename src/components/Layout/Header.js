import {Fragment} from 'react'
import classes from './Hearder.module.css';
import foodImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
export default function Header(props) {
  return (
    <Fragment>
    <header className={classes.header}>
    <h1>Meals</h1>
    <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
    <img src={foodImage} alt='Vegetarian Food'/>
     </div> 
    </Fragment>
  );
};
