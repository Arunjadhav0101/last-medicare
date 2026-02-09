# 🚀 Complete Setup Guide - MediCare Application

This guide will help you run the MediCare application from scratch in simple steps.

---

## 📋 Prerequisites (Things You Need First)

Before starting, make sure you have these installed on your computer:

1. **Node.js** (version 14 or higher)
   - Check if installed: Open terminal and type `node --version`
   - If not installed, download from: https://nodejs.org/

2. **MySQL Database**
   - Check if installed: Type `mysql --version` in terminal
   - If not installed, download XAMPP from: https://www.apachefriends.org/

3. **Git** (to clone the project)
   - Check if installed: Type `git --version`
   - If not installed, download from: https://git-scm.com/

---

## 📥 Step 1: Download the Project

Open your terminal and run these commands:

```bash
# Go to your desired folder
cd ~

# Clone the project from GitHub
git clone https://github.com/Arunjadhav0101/last-medicare.git

# Enter the project folder
cd last-medicare
```

**What this does:** Downloads the project code to your computer.

---

## 🗄️ Step 2: Setup the Database

### Option A: Using XAMPP (Recommended for Beginners)

1. **Start XAMPP**
   - Open XAMPP Control Panel
   - Click "Start" for Apache
   - Click "Start" for MySQL

2. **Create Database**
   - Open your browser
   - Go to: `http://localhost/phpmyadmin`
   - Click "New" on the left sidebar
   - Database name: `medicare`
   - Click "Create"

3. **Import Database Tables**
   - Click on the `medicare` database you just created
   - Click "Import" tab at the top
   - Click "Choose File"
   - Select: `last-medicare/legacy-php/medicare (3).sql`
   - Scroll down and click "Go"
   - Wait for success message

### Option B: Using MySQL Command Line

```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE medicare;

# Exit MySQL
exit

# Import the SQL file
mysql -u root -p medicare < legacy-php/medicare\ \(3\).sql
```

**What this does:** Creates the database and all necessary tables for the application.

---

## ⚙️ Step 3: Setup the Backend (Server)

```bash
# Make sure you're in the project folder
cd ~/last-medicare

# Go to server folder
cd server

# Install all required packages (this may take 2-3 minutes)
npm install
```

**What this does:** Installs all the backend dependencies needed to run the server.

### Configure Environment Variables

1. Check if `.env` file exists in the `server` folder
2. If not, create it:

```bash
# Create .env file
nano .env
```

3. Add these lines (modify if your MySQL settings are different):

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=medicare
PORT=5000
JWT_SECRET=medicare_secret_key_2024
```

4. Save the file:
   - Press `Ctrl + X`
   - Press `Y`
   - Press `Enter`

**What this does:** Tells the server how to connect to your database.

---

## 🎨 Step 4: Setup the Frontend (Client)

Open a **NEW terminal window** (keep the first one open) and run:

```bash
# Go to project folder
cd ~/last-medicare

# Go to client folder
cd client

# Install all required packages (this may take 3-5 minutes)
npm install
```

**What this does:** Installs all the frontend dependencies needed to run the React app.

---

## 🏃 Step 5: Run the Application

You need **TWO terminal windows** open:

### Terminal 1 - Start Backend Server

```bash
# Go to server folder
cd ~/last-medicare/server

# Start the server
npm start
```

**You should see:**
```
Server running on port 5000
```

✅ **Keep this terminal running!** Don't close it.

---

### Terminal 2 - Start Frontend App

```bash
# Go to client folder
cd ~/last-medicare/client

# Start the React app
npm start
```

**You should see:**
```
Compiled successfully!
You can now view client in the browser.
Local: http://localhost:3000
```

✅ **Keep this terminal running too!** Don't close it.

---

## 🌐 Step 6: Open the Application

Your browser should automatically open. If not:

1. Open your web browser (Chrome, Firefox, etc.)
2. Go to: **http://localhost:3000**

You should see the MediCare home page! 🎉

---

## 🧪 Step 7: Test the Application

### Create an Account

1. Click "Sign Up" button
2. Fill in the form:
   - Username: `testuser`
   - Email: `test@example.com`
   - Phone: `1234567890`
   - Password: `password123`
3. Click "Sign Up"
4. You should be redirected to login page

### Login

1. Enter your email: `test@example.com`
2. Enter your password: `password123`
3. Click "Login"
4. You should see the catalog page

### Browse Medicines

1. Click "Catalog" in the navigation
2. Search for medicines
3. Click "Add to Cart" on any medicine

### Check Other Features

- Click "Blood Bank" to see blood donation features
- Click "My Orders" to see your orders
- Click "Home" to go back to homepage

---

## 🛑 How to Stop the Application

When you're done:

1. Go to **Terminal 1** (Backend)
   - Press `Ctrl + C`
   - Type `Y` if asked

2. Go to **Terminal 2** (Frontend)
   - Press `Ctrl + C`
   - Type `Y` if asked

---

## 🔄 How to Run Again Later

Next time you want to run the app:

### Terminal 1 - Backend
```bash
cd ~/last-medicare/server
npm start
```

### Terminal 2 - Frontend
```bash
cd ~/last-medicare/client
npm start
```

That's it! No need to install packages again.

---

## ❌ Common Problems and Solutions

### Problem 1: "Port 3000 is already in use"

**Solution:**
```bash
# Kill the process using port 3000
killall -9 node

# Or use a different port
PORT=3001 npm start
```

---

### Problem 2: "Cannot connect to database"

**Solution:**
- Make sure XAMPP MySQL is running
- Check your `.env` file has correct database credentials
- Make sure database name is `medicare`

---

### Problem 3: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

---

### Problem 4: Backend shows "Server running" but frontend can't connect

**Solution:**
- Make sure backend is running on port 5000
- Check if `http://localhost:5000/api/health` works in browser
- Should show: `{"status":"ok"}`

---

## 📁 Project Structure

```
last-medicare/
├── client/              # Frontend (React) - Port 3000
│   ├── src/
│   │   ├── pages/       # All pages (Home, Login, etc.)
│   │   ├── components/  # Reusable components
│   │   └── services/    # API calls
│   └── public/          # Static files
│
├── server/              # Backend (Express) - Port 5000
│   ├── routes/          # API endpoints
│   ├── config/          # Database config
│   └── .env             # Environment variables
│
└── legacy-php/          # Old PHP files (for reference)
```

---

## 🔑 Default Admin Access (If Needed)

If you need admin access, you can manually add an admin user in the database:

1. Go to phpMyAdmin: `http://localhost/phpmyadmin`
2. Select `medicare` database
3. Click on `users` table
4. Click "Insert" tab
5. Add admin user details
6. Set `role` field to `admin`

---

## 📞 Need Help?

If you face any issues:

1. Check the error message in the terminal
2. Make sure both backend and frontend are running
3. Check if MySQL is running in XAMPP
4. Verify the database was imported correctly
5. Check the `.env` file has correct settings

---

## 🎯 Quick Command Reference

```bash
# Start Backend
cd ~/last-medicare/server && npm start

# Start Frontend (in new terminal)
cd ~/last-medicare/client && npm start

# Stop Application
Press Ctrl + C in both terminals

# Check if ports are in use
lsof -i :3000  # Frontend port
lsof -i :5000  # Backend port

# View backend logs
cd ~/last-medicare/server && npm start

# Reinstall dependencies
cd ~/last-medicare/server && npm install
cd ~/last-medicare/client && npm install
```

---

## ✅ Checklist Before Running

- [ ] Node.js installed
- [ ] MySQL/XAMPP installed and running
- [ ] Database `medicare` created
- [ ] SQL file imported successfully
- [ ] Backend dependencies installed (`server/node_modules` exists)
- [ ] Frontend dependencies installed (`client/node_modules` exists)
- [ ] `.env` file configured in server folder
- [ ] Two terminal windows ready

---

**🎉 Congratulations! You're all set to use the MediCare application!**

Created by: Arun Jadhav, Yogesh Bhore & Prathviraj Bagli
