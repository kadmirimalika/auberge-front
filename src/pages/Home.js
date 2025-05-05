import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';

const roomImages = [room1, room2, room3];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % roomImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div className="carousel">
        <img src={roomImages[current]} alt={`Room ${current + 1}`} className="carousel-image" />
        <div className="carousel-caption">
          <h1>Experience Comfort & Nature</h1>
          <button onClick={() => navigate('/reservation')} className="book-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
