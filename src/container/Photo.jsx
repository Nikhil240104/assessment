import React from 'react';
import './photo.css';
import image from "../images/image.png";
import image2 from "../images/image1.jpeg";
import image3 from "../images/image2.jpeg";
 const Photo = () => {
  return (
    <>
   <div className='third-container'>
    <div className='card'>
      <div className='img'>
        <img src={image} ></img>
      </div>
      <div className='content'>
        <h1 className='heading-conetent'>
        Learning Science
        </h1>
        <p className='main-conetent'>
      Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly.
      </p>
      <div className='foot-conetent'>
        Read More
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      </div>
    </div>
    <div className='card'>
     
      <div className='content'>
        <h1 className='heading-conetent'>
        Vedic Math
        </h1>
        <p className='main-conetent'>
        Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly. </p>
      <div className='foot-conetent'>
        Read More
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      </div>
      <div className='img'>
        <img src={image2} ></img>
      </div>
    </div>
    <div className='card'>
      <div className='img'>
        <img src={image3} ></img>
      </div>
      <div className='content'>
        <h1 className='heading-conetent'>
        Bespoke
        </h1>
        <p className='main-conetent'>
        Tailored Learning Solutions - Your Vision, Our Creation. where your unique educational vision takes center stage. At [Your Company Name], we understand that one size doesn't fit all in the world of education. That's why we specialize in crafting custom learning materials that align perfectly with your requirements. </p>
      <div className='foot-conetent'>
        Read More
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      </div>
    </div>
   </div>
    </>
  );
}

export default Photo;
