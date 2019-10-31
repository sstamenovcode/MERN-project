import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Sports Guide</h1>
      <div id="sport-football">
        <span>Football</span>
      </div>
      <div id="sport-tennis">
        <span>Tennis</span>
      </div>
      <div id="sport-table-tennis">
        <span>Table tennis</span>
      </div>
      <div id="sport-basketball">
        <span>Basketball</span>
      </div>
      <div id="sport-volleyball">
        <span>Volleyball</span>
      </div>
      <div id="sport-cycling">
        <span>Cycling</span>
      </div>
    </div>
  );
};

export default Home;
