import React from 'react';
import './Fifth.css';
import logo1 from '../images/logo1.png';
const Fifth = () => {
  return (
    <div>
      <div className="container1">
        <h2>Connect with us to unveil a new world of learning.</h2>
        <div className='cont'>
        <input type="email" placeholder="Enter your email" />
        <button>Let's Talk</button>
        </div>
      </div>
      <footer className="App-footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <img src={logo1} alt="Credenza Logo" />
            </div>
            <div className="links">
              <a href="/">Home</a>
              <a href="/about-us">About us</a>
              <a href="/learning-science">Learning Science</a>
              <a href="/learning-vedic-maths">Learning Vedic Maths</a>
              <a href="/learning-bespoke">Learning Bespoke</a>
            </div>
            <div className="copyright">
              <p>2023 © Copyright by The Credenza | Developed by Value Thoughtz</p>
            </div>
          </div>
        
          <div className="footer-content2">
            <div className="links1">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms</a>
              <a href="/cookies">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Fifth;
