import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    name: '', description: '', price: '', stock: '', category: ''
  });
  const [activeTab, setActiveTab] = useState('orders');

  useEffect(() => {
    fetchOrders();
    fetchMedicines();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get('/admin/orders');
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMedicines = async () => {
    try {
      const { data } = await api.get('/medicines');
      setMedicines(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await api.put(`/admin/orders/${orderId}/status`, { status });
      alert('Order status updated');
      fetchOrders();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const addMedicine = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/medicines', newMedicine);
      alert('Medicine added successfully');
      setNewMedicine({ name: '', description: '', price: '', stock: '', category: '' });
      fetchMedicines();
    } catch (err) {
      alert('Failed to add medicine');
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1>Admin Dashboard</h1>
        
        <div className="admin-tabs">
          <button 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button 
            className={activeTab === 'medicines' ? 'active' : ''} 
            onClick={() => setActiveTab('medicines')}
          >
            Medicines
          </button>
          <button 
            className={activeTab === 'add' ? 'active' : ''} 
            onClick={() => setActiveTab('add')}
          >
            Add Medicine
          </button>
        </div>

        {activeTab === 'orders' && (
          <div className="orders-section">
            <h2>All Orders</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.user_id}</td>
                    <td>₹{order.total}</td>
                    <td>
                      <span className={`status ${order.status}`}>{order.status}</span>
                    </td>
                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                    <td>
                      <select 
                        value={order.status} 
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'medicines' && (
          <div className="medicines-section">
            <h2>All Medicines</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map(med => (
                  <tr key={med.id}>
                    <td>{med.id}</td>
                    <td>{med.name}</td>
                    <td>₹{med.price}</td>
                    <td>{med.stock}</td>
                    <td>{med.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="add-medicine-section">
            <h2>Add New Medicine</h2>
            <form onSubmit={addMedicine} className="admin-form">
              <input
                type="text"
                placeholder="Medicine Name"
                value={newMedicine.name}
                onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})}
                required
              />
              <textarea
                placeholder="Description"
                value={newMedicine.description}
                onChange={(e) => setNewMedicine({...newMedicine, description: e.target.value})}
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newMedicine.price}
                onChange={(e) => setNewMedicine({...newMedicine, price: e.target.value})}
                required
              />
              <input
                type="number"
                placeholder="Stock"
                value={newMedicine.stock}
                onChange={(e) => setNewMedicine({...newMedicine, stock: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={newMedicine.category}
                onChange={(e) => setNewMedicine({...newMedicine, category: e.target.value})}
                required
              />
              <button type="submit" className="btn btn-primary">Add Medicine</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
