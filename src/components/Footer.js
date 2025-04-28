import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Auberge Amazigh. All rights reserved.</p>
      <p>Location: Sefrou, Morocco</p>
      <p>Follow us on social media!</p>
      <div>
        {/* Map or Location Details */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.0540814349817!2d-4.059168030169667!3d32.00019428505146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5176ffba05747d%3A0x2286edda7ae85536!2sAuberge%20Amazigh!5e0!3m2!1sen!2sus!4v1642155278182!5m2!1sen!2sus"
          width="300" 
          height="200" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </div>
    </footer>
  );
};

export default Footer;
