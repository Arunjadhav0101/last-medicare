import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './BloodBank.css';

const BloodBank = () => {
  const [inventory, setInventory] = useState([]);
  const [donorForm, setDonorForm] = useState({ name: '', blood_group: '', phone: '', email: '', address: '' });
  const [requestForm, setRequestForm] = useState({ patient_name: '', blood_group: '', units: '', phone: '', hospital: '' });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const { data } = await api.get('/blood/inventory');
      setInventory(data);
    } catch (err) {
      console.error(err);
    }
  };

  const registerDonor = async (e) => {
    e.preventDefault();
    try {
      await api.post('/blood/register-donor', donorForm);
      alert('Donor registered successfully');
      setDonorForm({ name: '', blood_group: '', phone: '', email: '', address: '' });
    } catch (err) {
      alert('Registration failed');
    }
  };

  const requestBlood = async (e) => {
    e.preventDefault();
    try {
      await api.post('/blood/request', requestForm);
      alert('Blood request submitted');
      setRequestForm({ patient_name: '', blood_group: '', units: '', phone: '', hospital: '' });
    } catch (err) {
      alert('Request failed');
    }
  };

  return (
    <div className="blood-bank">
      <div className="container">
        <h1>Blood Bank</h1>
        
        <section className="inventory">
          <h2>Blood Inventory</h2>
          <div className="blood-grid">
            {inventory.map(item => (
              <div key={item.id} className="blood-card">
                <h3>{item.blood_group}</h3>
                <p>{item.units} units available</p>
              </div>
            ))}
          </div>
        </section>

        <section className="donor-form">
          <h2>Register as Donor</h2>
          <form onSubmit={registerDonor}>
            <input type="text" placeholder="Name" value={donorForm.name} onChange={(e) => setDonorForm({...donorForm, name: e.target.value})} required />
            <select value={donorForm.blood_group} onChange={(e) => setDonorForm({...donorForm, blood_group: e.target.value})} required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <input type="tel" placeholder="Phone" value={donorForm.phone} onChange={(e) => setDonorForm({...donorForm, phone: e.target.value})} required />
            <input type="email" placeholder="Email" value={donorForm.email} onChange={(e) => setDonorForm({...donorForm, email: e.target.value})} required />
            <input type="text" placeholder="Address" value={donorForm.address} onChange={(e) => setDonorForm({...donorForm, address: e.target.value})} required />
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </section>

        <section className="request-form">
          <h2>Request Blood</h2>
          <form onSubmit={requestBlood}>
            <input type="text" placeholder="Patient Name" value={requestForm.patient_name} onChange={(e) => setRequestForm({...requestForm, patient_name: e.target.value})} required />
            <select value={requestForm.blood_group} onChange={(e) => setRequestForm({...requestForm, blood_group: e.target.value})} required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <input type="number" placeholder="Units Required" value={requestForm.units} onChange={(e) => setRequestForm({...requestForm, units: e.target.value})} required />
            <input type="tel" placeholder="Phone" value={requestForm.phone} onChange={(e) => setRequestForm({...requestForm, phone: e.target.value})} required />
            <input type="text" placeholder="Hospital" value={requestForm.hospital} onChange={(e) => setRequestForm({...requestForm, hospital: e.target.value})} required />
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BloodBank;
