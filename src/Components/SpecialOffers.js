import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const SpecialOffers = () => {
  const history = useHistory();
  
  const offers = [
    {
      id: 1,
      title: "Family Combo",
      description: "2 Large Pizzas + 2 Garlic Breads + 2 Drinks",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Weekend Special",
      description: "Buy 1 Get 1 Free on All Desserts",
      price: null,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Lunch Special",
      description: "Any Main Course + Drink for $12.99",
      price: 12.99,
      originalPrice: 16.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const handleOrderNow = () => {
    history.push("/menu");
  };

  return (
    <div className="special-offers-container">
      <h2 className="section-title">Special Offers</h2>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-content">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              {offer.price && (
                <div className="offer-price">
                  <span className="current-price">${offer.price}</span>
                  {offer.originalPrice && (
                    <span className="original-price">${offer.originalPrice}</span>
                  )}
                </div>
              )}
              <button className="secondary-button" onClick={handleOrderNow}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers; 