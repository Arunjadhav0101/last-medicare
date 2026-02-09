import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const { data } = await api.get(`/cart/${user.id}`);
      setCart(data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      fetchCart();
    } catch (err) {
      alert('Failed to remove item');
    }
  };

  const checkout = async () => {
    try {
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      await api.post('/orders/create', {
        userId: user.id,
        items: cart,
        total,
        address: 'Default Address'
      });
      alert('Order placed successfully');
      setCart([]);
    } catch (err) {
      alert('Checkout failed');
    }
  };

  return (
    <div className="cart">
      <div className="container">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <h3>{item.medicine_name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price * item.quantity}</p>
                  <button onClick={() => removeItem(item.id)} className="btn btn-danger">Remove</button>
                </div>
              ))}
            </div>
            <button onClick={checkout} className="btn btn-primary">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
