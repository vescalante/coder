import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./cartwidget.css";

function CartWidget(props) {
  return (
    <Link to="/cart" className="btn btn-dark p-2">
      <div className='cart-widget'>
          <div className='cart-icon'>
              <FaShoppingCart /> 
          </div>
          <div className='cart-number'>
              {props.cuantos}
          </div>
      </div>
    </Link>
  )
}

export default CartWidget;

