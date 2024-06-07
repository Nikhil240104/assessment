import React from 'react';
import p1 from "../images/one.jpg";
import './Search.css';
const Search = () => {
  return (
    <div className="hero">
       <div className="hero1">
        <h1><span className='fi'>The future of learning with </span><span className="hi">&nbsp;Credenza!</span></h1>
        <p>
          Our visual approach fosters critical thinking, creativity, and a true passion for learning.
        </p>
        <div className="input-container">
          <input type="email" placeholder="Enter your email" />
          <button>Let's Talk</button>
        </div>
       <div className="pa"> <p>We care about your data in our Privacy Policy.</p></div>
      </div>
     <div className="photo"><img src={p1} alt="Example" /></div>
      <br />
    
    </div>
  );
}

export default Search;
