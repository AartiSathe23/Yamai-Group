import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); 
    }, 3300);

    const slides = document.querySelectorAll('.slider__contents');
    setTotalSlides(slides.length);

    return () => clearInterval(intervalId);
  }, []);

  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className='testimonial'>
      <h2 className='heading-with-line1'>Testimonials</h2>

      <div className='testimonials-section'>
        <div className='slider__inner' style={{ transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">I’ve had the privilege to work with Yamai Construction since 2012, during which time they have provided an excellent team of well-established and experienced professionals. Their work on the Project was outstanding, as was their level of professionalism, attentiveness, attitude and performance. </p>
            <h3 className="slider__caption">V.P. Patil | Factory</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Working with Shraddha Agency was really a great profesional experince, delivery of bagasee was on time when needed. I will definately suggest Yamai Group for your needs!</p>
            <h3 className="slider__caption">Sachin kalyanshetty| sugars</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">We contacted Yamai Construction for our farm house project and they did help us with resourcing products and constructing services.Well Organized company.</p>
            <h3 className="slider__caption">Manoj Kumar | Heritage</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">We source the bricks from Yamai Bricks since 4 years and never had any issues with it. Good profesional team and quality.</p>
            <h3 className="slider__caption"> Government Contractor| Womens' Hospital</h3>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Good working ethics and managers and supreident are helpful in providing information.</p>
            <h3 className="slider__caption">Pravin Bhutda | Kothari's </h3>
          </div>
        </div>
      </div>

      <div className='slider__dots'>
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type='radio'
            name='slider'
            title={`slide${index + 1}`}
            className='slider__nav'
            checked={index === currentIndex}
            onChange={() => handleNavClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
