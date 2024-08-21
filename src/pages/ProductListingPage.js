import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice';
import PlantCard from '../components/PlantCard';

const plants = [
  { id: '1', name: 'Fiddle Leaf Fig', price: 40, image: '/path/to/plant1.jpg' },
  { id: '2', name: 'Monstera', price: 25, image: '/path/to/plant2.jpg' },
  // Add more plant objects here
];

function ProductListingPage() {
  const dispatch = useDispatch();

  const addToCartHandler = (plant) => {
    dispatch(addItemToCart(plant));
  };

  return (
    <div className="product-listing-page">
      <h2>Our Plants</h2>
      <div className="plant-list">
        {plants.map(plant => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onAddToCart={() => addToCartHandler(plant)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
