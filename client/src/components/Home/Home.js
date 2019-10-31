import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Sports Guide</h1>
      <Link to="/football">
        <div id="sport-football">
          <span>Football</span>
        </div>
      </Link>
      <Link to="/tennis">
        <div id="sport-tennis">
          <span>Tennis</span>
        </div>
      </Link>
      <Link to="/table-tennis">
        <div id="sport-table-tennis">
          <span>Table tennis</span>
        </div>
      </Link>
      <Link to="/basketball">
        <div id="sport-basketball">
          <span>Basketball</span>
        </div>
      </Link>
      <Link to="/volleyball">
        <div id="sport-volleyball">
          <span>Volleyball</span>
        </div>
      </Link>
      <Link to="/cycling">
        <div id="sport-cycling">
          <span>Cycling</span>
        </div>
      </Link>
    </div>
  );
};

export default Home;
