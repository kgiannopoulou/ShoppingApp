import React from 'react';

function PlantCard({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default PlantCard;
