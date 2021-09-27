import React from 'react';

import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for(const instructor of cart){
        total=total+instructor.salary;
    }
    return (
        <div className="cart-design">
          <h3>Cart</h3>
          <h5>Instructor added: {props.cart.length}</h5>
          <h5>Total Payment: ${total}</h5>  
{
    cart.map(cart=>
    <h6 key={cart.id}>{cart.name}</h6>)
}
 <button>Add</button>
        </div>
    );
};

export default Cart;