// a routing manager, where you define the overall structure of your application
// Import necessary dependencies
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import your components/pages
import { Home, Register, Login, NotFound } from '../pages'

// Define your routes
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default Routing;