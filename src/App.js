// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import AdminLogin from './pages/AdminLogin';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
