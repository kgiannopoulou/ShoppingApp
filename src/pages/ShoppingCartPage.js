import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, deleteItemFromCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

function ShoppingCartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const deleteItemHandler = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="shopping-cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div>
                <button onClick={() => removeItemHandler(item.id)}>Remove</button>
                <button onClick={() => deleteItemHandler(item.id)}>Delete</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <button className="checkout-btn">Checkout (Coming Soon)</button>
          <Link to="/products">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;
