import React from 'react';
import './Section.css';
import Banner from './Banner.js';
import { Link } from 'react-router-dom';

function Section() {


  return (
    <div className="section">
      <div className="section-content ">
        <ul>
          <Link to='/All' style={{ textDecoration: "none" }} ><li>All</li></Link>
          <Link to='/Trending' style={{ textDecoration: "none" }} ><li>Trending</li></Link>
          <Link to='/New' style={{ textDecoration: "none" }} ><li>New Release</li></Link>
        </ul>
      </div>
      <Banner />
    </div>
  )
}

export default Section
