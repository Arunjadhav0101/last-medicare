import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get(`/orders/${user.id}`);
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="orders">
      <div className="container">
        <h1>My Orders</h1>
        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <h3>Order #{order.id}</h3>
                <p>Total: ₹{order.total}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.created_at).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
