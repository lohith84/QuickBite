import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS
import aboutImage from '../../assets/about.jpg';

const About = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="container-fluid py-6" id='about-us'>
            <div className="container about-container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <img src={aboutImage} className="img-fluid rounded" alt="About Us" />
                    </div>
                    <div className="col-lg-7">
                        <h1 className="display-3 mb-4">About Us</h1>
                        <p className="mb-4">At QuickBites, we're passionate about bringing you the freshest and most delicious meals. Our team of dedicated chefs work tirelessly to create mouth-watering dishes that are sure to satisfy your cravings.</p>
                        <p className="mb-4">Whether you're looking for a quick meal on the go or a leisurely dining experience, we've got you covered. Our commitment to excellence extends beyond our food, as we strive to provide exceptional customer service and a seamless ordering process.</p>
                        <div className="row g-4 text-dark mb-5">
                            <div className="col-sm-6">
                                <i className="bi bi-box-seam about-icon me-2"></i>Fresh and Fast Food Delivery
                            </div>
                            <div className="col-sm-6">
                                <i className="bi bi-headset about-icon me-2"></i>24/7 Customer Support
                            </div>
                            <div className="col-sm-6">
                                <i className="bi bi-cart about-icon me-2"></i>Easy Ordering Options
                            </div>
                            <div className="col-sm-6">
                                <i className="bi bi-tags about-icon me-2"></i>Delicious Deals for Delicious Meals
                            </div>
                        </div>
                        <button className="learn-more" onClick={handleLearnMoreClick}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
