import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Our customers love the quality of our food and the warmth of our service. Here's what some of them have to say about their experience with us.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img 
          src="/testimonial-profile.jpg"
          alt="Amirul Islam" 
        />
        <p>
          "The food here is absolutely amazing! Every dish is prepared with such care and attention to detail. The flavors are incredible, and the service is top-notch. I can't wait to come back!"
        </p>
        <div className="testimonials-stars-container">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h2>Amirul Islam</h2>
      </div>
    </div>
  );
};

export default Testimonial;
