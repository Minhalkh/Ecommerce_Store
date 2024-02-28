// a routing manager, where you define the overall structure of your application
// Import necessary dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import your components/pages
import Home from '../pages/HomePage'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import About from '../pages/AboutPage'
import Products from '../pages/ProductsPage'
import NotFound from '../components/NotFound'

// Define your routes
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default Routing;