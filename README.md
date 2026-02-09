# MediCare - React E-Pharmacy Application 💊

> A modern, full-stack e-pharmacy application with blood bank management system

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-orange.svg)](https://www.mysql.com/)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Arunjadhav0101/last-medicare.git
cd last-medicare

# Start Backend (Terminal 1)
cd server
npm install
npm start

# Start Frontend (Terminal 2)
cd client
npm install
npm start
```

Visit: **http://localhost:3000**

## 📋 Project Overview

This is a complete conversion of a PHP-based pharmacy application to a modern React + Express stack. The application provides:

- 🔐 User authentication and authorization
- 💊 Medicine catalog with search functionality
- 🛒 Shopping cart and order management
- 🩸 Blood bank system (donor registration, blood requests, inventory)
- 👨‍💼 Admin dashboard for order management
- 💬 AI chatbot support

## 🏗️ Architecture

```
last-medicare/
├── client/              # React Frontend (Port 3000)
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── services/    # API services
│   └── public/
├── server/              # Express Backend (Port 5000)
│   ├── routes/          # API routes
│   ├── config/          # Configuration files
│   └── middleware/      # Custom middleware
└── legacy-php/          # Original PHP files (archived)
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Quick start guide
- **[README_REACT.md](README_REACT.md)** - Detailed documentation
- **[CONVERSION_SUMMARY.txt](CONVERSION_SUMMARY.txt)** - Conversion details

## 🔑 Key Features

### User Features
- ✅ User registration and login
- ✅ Browse medicine catalog
- ✅ Search medicines by name
- ✅ Add medicines to cart
- ✅ Place and track orders
- ✅ Register as blood donor
- ✅ Request blood units
- ✅ View blood inventory

### Admin Features
- ✅ View all orders
- ✅ Update order status
- ✅ Add new medicines
- ✅ Manage inventory

## 🔧 Configuration

### Backend Environment (.env)
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=medicare
PORT=5000
JWT_SECRET=your_secret_key_here
```

### Database Setup
```bash
mysql -u root -p < legacy-php/medicare\ \(3\).sql
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/medicines` | Get all medicines |
| POST | `/api/cart/add` | Add to cart |
| GET | `/api/orders/:userId` | Get user orders |
| POST | `/api/blood/register-donor` | Register donor |
| POST | `/api/blood/request` | Request blood |

## 🎨 Screenshots

### Home Page
Modern landing page with feature highlights

### Catalog
Browse and search medicines with real-time stock updates

### Blood Bank
Comprehensive blood bank management system

## 🚦 Running the Application

### Development Mode

**Option 1: Two Terminals**
```bash
# Terminal 1 - Backend
cd server && npm start

# Terminal 2 - Frontend
cd client && npm start
```

**Option 2: Root Commands**
```bash
npm run server  # Start backend
npm run client  # Start frontend (in another terminal)
```

### Production Build
```bash
cd client
npm run build
# Serve the build folder with your preferred method
```

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- CORS configuration
- SQL injection prevention with parameterized queries
- Input validation

## 🌟 Future Enhancements

- [ ] Payment gateway integration
- [ ] Prescription upload functionality
- [ ] Medicine reminder notifications
- [ ] Real-time order tracking
- [ ] Admin analytics dashboard
- [ ] Email notifications
- [ ] Mobile responsive improvements
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline

## 👥 Credits

**Original Project Created By:**
- Arun Jadhav
- Yogesh Bhore
- Prathviraj Bagli

**Conversion to React:** February 2026

## 📄 License

All rights reserved © 2024 MediCare

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the project maintainers.

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review the conversion summary
3. Contact the development team

---

**Made with ❤️ for better healthcare access**
