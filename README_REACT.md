# MediCare - React E-Pharmacy Application

A full-stack React application for online pharmacy with blood bank management.

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express
- MySQL
- JWT Authentication
- bcryptjs

## Project Structure

```
last-medicare/
├── client/          # React frontend
├── server/          # Express backend
└── *.php, *.html    # Legacy PHP files (for reference)
```

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MySQL
- npm or yarn

### Database Setup

1. Import the SQL file to create the database:
```bash
mysql -u root -p < "medicare (3).sql"
```

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=medicare
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
```

4. Start the server:
```bash
npm start
```

Server will run on http://localhost:5000

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on http://localhost:3000

## Features

- User Authentication (Login/Signup)
- Medicine Catalog with Search
- Shopping Cart
- Order Management
- Blood Bank System
  - Donor Registration
  - Blood Request
  - Inventory Management
- Admin Dashboard
- Chatbot Support

## API Endpoints

### Auth
- POST `/api/auth/signup` - Register new user
- POST `/api/auth/login` - User login

### Medicines
- GET `/api/medicines` - Get all medicines
- GET `/api/medicines/:id` - Get medicine by ID
- POST `/api/medicines/check-stock` - Check stock

### Cart
- GET `/api/cart/:userId` - Get user cart
- POST `/api/cart/add` - Add to cart
- DELETE `/api/cart/:id` - Remove from cart

### Orders
- GET `/api/orders/:userId` - Get user orders
- POST `/api/orders/create` - Create order

### Blood Bank
- GET `/api/blood/inventory` - Get blood inventory
- POST `/api/blood/register-donor` - Register donor
- POST `/api/blood/request` - Request blood

### Admin
- GET `/api/admin/orders` - Get all orders
- PUT `/api/admin/orders/:id/status` - Update order status
- POST `/api/admin/medicines` - Add medicine

## Development

To run both frontend and backend concurrently, you can use two terminal windows:

Terminal 1 (Backend):
```bash
cd server && npm start
```

Terminal 2 (Frontend):
```bash
cd client && npm start
```

## Credits

Created by **Arun Jadhav, Yogesh Bhore & Prathviraj Bagli**

## License

All rights reserved © 2024 MediCare
