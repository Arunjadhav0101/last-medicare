# Quick Start Guide

## What Changed?

Your PHP-based Medicare application has been converted to a modern React application with the following structure:

```
last-medicare/
├── client/              # React frontend (Port 3000)
├── server/              # Express backend (Port 5000)
└── legacy-php/          # Original PHP files (for reference)
```

## Prerequisites

- Node.js installed
- MySQL running
- Database imported from `legacy-php/medicare (3).sql`

## Running the Application

### Option 1: Run Both (Recommended)

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd /home/arun/last-medicare/server
npm start
```

**Terminal 2 - Frontend:**
```bash
cd /home/arun/last-medicare/client
npm start
```

### Option 2: Quick Commands

From the root directory:
```bash
# Start backend
npm run server

# Start frontend (in another terminal)
npm run client
```

## Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Environment Setup

Make sure to configure `/home/arun/last-medicare/server/.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=medicare
PORT=5000
JWT_SECRET=your_secret_key_here
```

## Features Migrated

✅ User Authentication (Login/Signup)
✅ Medicine Catalog with Search
✅ Shopping Cart
✅ Order Management
✅ Blood Bank System
✅ Admin Dashboard (basic)
✅ Chatbot Support

## Tech Stack

**Frontend:**
- React 18
- React Router DOM
- Axios
- Modern CSS

**Backend:**
- Node.js + Express
- MySQL
- JWT Authentication
- RESTful API

## Next Steps

1. Start both servers
2. Open http://localhost:3000
3. Create an account or login
4. Browse medicines and place orders

## Need Help?

Check `README_REACT.md` for detailed documentation.

---
Created by Arun Jadhav, Yogesh Bhore & Prathviraj Bagli
