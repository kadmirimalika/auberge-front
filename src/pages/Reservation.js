import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({ room: '', checkIn: '', checkOut: '', guests: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation submitted!');
  };

  return (
    <div className="reservation">
      <h2>Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Room:
          <select 
            name="room" 
            value={formData.room} 
            onChange={(e) => setFormData({ ...formData, room: e.target.value })}
          >
            <option value="">Select a room</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
          </select>
        </label>
        <label>
          Check-in:
          <input 
            type="date" 
            name="checkIn" 
            value={formData.checkIn} 
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          />
        </label>
        <label>
          Check-out:
          <input 
            type="date" 
            name="checkOut" 
            value={formData.checkOut} 
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          />
        </label>
        <label>
          Guests:
          <input 
            type="number" 
            name="guests" 
            value={formData.guests} 
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          />
        </label>
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
