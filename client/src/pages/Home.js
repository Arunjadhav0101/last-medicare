import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Your Health, Our Priority</h1>
            <div className="hero-buttons">
              <Link to="/catalog" className="btn btn-primary">Browse Medicines</Link>
              <Link to="/signup" className="btn btn-secondary">Get Started</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-icon">🏥</div>
              <h3>Trusted Service</h3>
              <p>Licensed pharmacists</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick & reliable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose MediCare?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Upload Prescription</h3>
              <p>Easy prescription upload with instant verification</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Find medicines quickly with AI-powered search</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Medicine Reminders</h3>
              <p>Never miss a dose with smart reminders</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>24/7 Chat Support</h3>
              <p>Get instant help from our AI chatbot</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚠️</div>
              <h3>Conflict Detection</h3>
              <p>AI warns about potential drug interactions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with generic alternatives</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-container">
          <h2>Ready to Experience Smart Healthcare?</h2>
          <p>Join thousands of satisfied customers who trust MediCare</p>
          <Link to="/signup" className="btn btn-primary btn-large">Create Your Account</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 MediCare - AI-Powered E-Pharmacy. Created by <strong>Arun Jadhav, Yogesh Bhore & Prathviraj Bagli</strong>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
