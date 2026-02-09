import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './Catalog.css';

const Catalog = () => {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const { data } = await api.get('/medicines');
      setMedicines(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (medicineId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Please login first');
      return;
    }
    try {
      await api.post('/cart/add', { userId: user.id, medicineId, quantity: 1 });
      alert('Added to cart');
    } catch (err) {
      alert('Failed to add to cart');
    }
  };

  const filtered = medicines.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="catalog">
      <div className="container">
        <h1>Medicine Catalog</h1>
        <input
          type="text"
          placeholder="Search medicines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="medicine-grid">
          {filtered.map(medicine => (
            <div key={medicine.id} className="medicine-card">
              <h3>{medicine.name}</h3>
              <p>{medicine.description}</p>
              <p className="price">₹{medicine.price}</p>
              <p className="stock">Stock: {medicine.stock}</p>
              <button 
                onClick={() => addToCart(medicine.id)} 
                className="btn btn-primary"
                disabled={medicine.stock === 0}
              >
                {medicine.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
