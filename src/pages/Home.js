import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
import room4 from '../assets/room4.jpg';
import room5 from '../assets/room5.jpg';
import room6 from '../assets/room6.jpg';
import room7 from '../assets/room7.jpg';
import kayaking from '../assets/kayaking.jpg';
import hiking from '../assets/hiking.jpg';

const roomTypes = [
  { label: "Masmouda", images: [room1, room2], description: "A cozy room with traditional decor.", price: 60 },
  { label: "Sanhaja", images: [room2, room3], description: "Spacious room perfect for couples.", price: 75 },
  { label: "Ait Sadden", images: [room3, room4], description: "Modern amenities with a traditional touch.", price: 80 },
  { label: "Ait Youssi", images: [room4, room5], description: "Great for families and groups.", price: 95 },
  { label: "Ait Ayoub", images: [room5, room6], description: "Peaceful room with garden view.", price: 70 },
  { label: "Allal El Fassi", images: [room6, room7], description: "Elegant design and comfort.", price: 85 },
  { label: "Ait Ali", images: [room7, room1], description: "Top-tier room with best amenities.", price: 100 }
];

const activities = [
  { title: "Kayaking", image: kayaking },
  { title: "Hiking", image: hiking }
];

const Home = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const openModal = (room) => {
    setSelectedRoom(room);
    setCurrentImg(0);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  const nextImage = () => {
    setCurrentImg((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevImage = () => {
    setCurrentImg((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length);
  };

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev + 1) % activities.length);
  };

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev - 1 + activities.length) % activities.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-carousel-container">
      <h2 className="carousel-title">Our rooms</h2>
      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={() => scroll('left')}>&#8249;</button>
        <div className="carousel-content" ref={scrollRef}>
          {roomTypes.map((room, index) => (
            <div className="carousel-card" key={index} onClick={() => openModal(room)}>
              <img src={room.images[0]} alt={room.label} />
              <p>{room.label}</p>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={() => scroll('right')}>&#8250;</button>
      </div>

      {selectedRoom && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-image-container">
              <button className="modal-nav left" onClick={prevImage}>&#8249;</button>
              <img src={selectedRoom.images[currentImg]} alt={selectedRoom.label} className="modal-image" />
              <button className="modal-nav right" onClick={nextImage}>&#8250;</button>
            </div>
            <h3>{selectedRoom.label}</h3>
            <p className="modal-description">{selectedRoom.description}</p>
            <p className="modal-price">Price: ${selectedRoom.price} / night</p>
            <button className="book-button" onClick={() => navigate('/reservation')}>Book</button>
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}

      {/* Activity Slider Section */}
      <div className="activity-carousel">
        <div
          className="activity-slide"
          style={{ backgroundImage: `url(${activities[currentActivity].image})` }}
        >
          <div className="activity-overlay">
            <h2>{activities[currentActivity].title}</h2>
            <button className="activity-book-button" onClick={() => navigate('/about')}>
              Explore More
            </button>

          </div>
          <button className="activity-nav left" onClick={prevActivity}>&#8249;</button>
          <button className="activity-nav right" onClick={nextActivity}>&#8250;</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
