import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./cartwidget.css";

function CartWidget(props) {
  return (
    <div className='cart-widget'>
        <div className='cart-icon'>
            <FaShoppingCart /> 
        </div>
        <div className='cart-number'>
            {props.cuantos}
        </div>
    </div>
  )
}

export default CartWidget;

