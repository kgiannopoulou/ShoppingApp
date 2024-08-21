import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Plant Store</h1>
      <p>Your one-stop shop for the best houseplants.</p>
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
