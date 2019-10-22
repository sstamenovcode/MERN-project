import React from 'react';
import Register from '../Register/Register';
import logo from '../../assets/images/couple.jpg';

import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-guide">
        <div className="heading">
          <h1>Online sexual therapy</h1>
          <img src={logo} alt="Couple" />
        </div>
        <button className="read-more">Read more</button>
      </div>
      <Register />
    </div>
  );
};

export default Home;
