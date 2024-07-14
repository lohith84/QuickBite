import React from 'react';
import './map.css';
import { assets } from '../../assets/assets';

const Map = () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=National+Institute+of+Technology,+Sector+1,+Rourkela,+Odisha+769008`;

  return (
    <div className="map-container" id="contact">
      <div className="map-wrapper">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="map"
          className="map-iframe"
        ></iframe>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Let us know how to contact you back.." required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <input id="message" placeholder="What would you like to share with us.." required />
          </div>
          <div className='homp'><button className="button type1">send</button></div>
          <div className="app-download-platforms">
            <img src={assets.play_store} alt="Play Store" />
            <img src={assets.app_store} alt="App Store" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Map;
