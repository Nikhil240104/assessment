import React from 'react';
import { CiCircleChevRight,CiCircleChevLeft } from "react-icons/ci";
import { FaChevronCircleRight } from "react-icons/fa";
import p5 from "../images/card1.png";
import p6 from "../images/card2.png";
import p7 from "../images/card3.png";
import p8 from "../images/card4.png";
import './fourt.css';
const Fourt = () => {
  return (
    <div className='catalogue-container'>
      <div className="c-header">
      <CiCircleChevLeft className='fa-left'/>
        <div className='c-headerM'>
          <p className='para'>Library</p>
        <h2>Our Sample catalogue</h2>
        <p>Where Learning Unfolds like a story!</p>
        </div>
        <CiCircleChevRight className='fa-right'/>
        </div>
        <div className='main-catalogue'>
      
          <div className="main-card1">
            <img src={p5 } alt="Vedic Math" />
            <p> PROTISTA FAMILY</p>
            <div className='foot-card'>
        Read More  &nbsp;
     <FaChevronCircleRight className='fa-bottom' />
          </div></div>
          <div className="main-card1">
            <img src={p6} alt="Vedic Math" />
            <p> ATOMIC STRUCTURE</p>
          
            <div className='foot-card'>
        Read More
        &nbsp;
     <FaChevronCircleRight className='fa-bottom' />
          </div>
          </div>
          <div className="main-card1">
            <img src={p7} alt="Vedic Math" />
            <p> EARTH CORE</p>
            <div className='foot-card'>
        Read More
        &nbsp;
     <FaChevronCircleRight className='fa-bottom' />
          </div>
          </div>
          <div className="main-card1">
            <img src={p8} alt="Vedic Math"  />
            <p> POLLINATION</p>
            <div className='foot-card'>
        Read More
        &nbsp;
     <FaChevronCircleRight className='fa-bottom' />
          </div>
          </div> 
          </div>
      
      </div>

  );
}

export default Fourt;
