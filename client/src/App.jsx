import React, { useState } from 'react'
import Navbar from './components/Nav'
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Footer from './components/Footer';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      
      </Routes>
      <Footer />
    </>
  )
}

export default App
