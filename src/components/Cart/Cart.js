import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) = total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    return (
        <div className = "order-summery">
            <h2>Course Order Summery</h2>
            <h3>Cart: {cart.length}</h3>
            <h3>Total Price: ${total}</h3>
        </div>
    );
};

export default Cart;