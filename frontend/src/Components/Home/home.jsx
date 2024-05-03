import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import construction from '../Assets/construction.jpg';
import crusher from '../Assets/crusher.jpg';
import bricks from '../Assets/bricks.jpg';
import agencies from '../Assets/agencies.jpg';
import enterprises from '../Assets/enterprises.jpg';
import energy from '../Assets/energy.jpg';
import agam from '../Assets/agam.jpg';
// import about from '../Assets/about.jpg'
import { useEffect } from 'react';
import CountUp from "react-countup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faClock, faSmile, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import different icons
import TestimonialSlider from "./TextimonialSlider/TestimonialSlider";

const Homepg = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  return (
    
    <section id='home' className="maincontainer">
      <div className="home-container">
        <div className="centered">
          <h1>Welcome to Yamai Group</h1>
          <p>Discover amazing magic of construction</p>
          <button className='btn1'> 
          <Link to="/about" className="menu-item">
            <span className="explore-button">Explore</span>
          </Link>
          </button>
        </div>
      </div>

      <div></div>

      <section id='about' className='aboutus'>
        <div><h2 className='heading-with-line'>About Us</h2></div>
        
        <div className='about-container'>
          <div className='about-content'>
            <div className='para'>For over a decade and a half, YAMAI GROUP has been a cornerstone of the construction and services industry in Solapur and beyond. As a multifaceted company, we specialize in both product manufacturing and service provision, catering to diverse needs with unwavering dedication and expertise. Our journey is marked by a relentless pursuit of excellence, fueled by a commitment to delivering highly efficient solutions that exceed expectations.
            </div>
            <div className='para2'>
            <span className='name'>Yamai Group: Where Vision Meets Construction.</span>
            </div>
            <div className='para'>At Yamai Group, we believe in the power of innovation and continuous improvement.
            </div>
            <div className="btn">
            <button style={{color: "black"}}><Link to="/about" className="menu-item">Know More</Link></button>
            </div>

          </div>
          <div className="about-image"><img src='' alt="" /></div>
        </div>
          
        <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={450} end={600} duration={4} /> <span>+</span>
                </span> <br />
                <span class="secondaryText">Complete Projects</span>
                <FontAwesomeIcon icon={faTrophy} className="icon" />
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp  end={17} duration={2} /> <span>+</span>
                </span> <br />
                <span className="secondaryText">Years of Experience</span>
                <FontAwesomeIcon icon={faClock} className="icon" />
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={100} /> <span>+</span>
                </span> <br />
                <span className="secondaryText">Happy Clients</span>
                <FontAwesomeIcon icon={faSmile} className="icon" />
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={150} end={200} duration={4} /> <span>+</span>
                </span> <br />
                <span className="secondaryText">Professional Team</span>
                <FontAwesomeIcon icon={faUsers} className="icon" />
              </div>
          </div>
      </section>

      <div></div>
      
      <section id="services" className="services">
        <h2 className='heading-with-line'>Our Services</h2>

        <div className="services-container">
          <div className="services-box">
            <img src= {construction} alt="" />
            <h3>Yamai Construction</h3>
            <p style={{color: "black"}}>Building Dreams, Building Futures. Trusted Construction Firm.</p>
            <div className="services-layer">
              <h4>Construction</h4>
              <p style={{color: "black", fontSize: "15px"}}>With our expertise, dedication, and passion for excellence, we'll help you build the future you envision. Contact us today to discuss your project requirements and let's build together.</p>
              <button className='btn'>
                <Link to="/Construction">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={crusher} alt="" />
            <h3>Yamai Stone Crusher</h3>
            <p>Stone Crusher has been dedicated to providing sustainable solutions for the construction industry.</p>
            <div className="services-layer">
              <h4>Crusher</h4>
              <p style={{color: "black", fontSize: "15px"}}>Our commitment to innovation and environmental responsibility drives us to continuously optimize our processes and products. </p>
              <button className='btn'>
                <Link to="/Crusher">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={bricks} alt="" />
            <h3>Yamai Bricks</h3>
            <p> Yamai Bricks is engineered to deliver superior performance while minimizing environmental impact</p>
            <div className="services-layer">
              <h4>Bricks</h4>
              <p style={{color: "black", fontSize: "15px"}}> we're redefining the construction industry with our innovative approach to sustainable building materials.</p>
              <button className='btn'>
                <Link to="/Bricks">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={agencies} alt="" />
            <h3>Shraddha Agencies</h3>
            <p>We're at the forefront of sustainable energy practices through innovative biogas trading.</p>
            <div className="services-layer">
              <h4>Agencies</h4>
              <p style={{color: "black", fontSize: "15px"}}>Efficient extraction, purification, and distribution of biogas, minimizing wastage and maximizing productivity.</p>
              <button className='btn'>
                <Link to="/Agencies">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={agam} alt="" />
            <h3>Agam Plant</h3>
            <p>Supplying high-quality ready-mix concrete for construction projects.</p>
            <div className="services-layer">
              <h4>Agam Plant</h4>
              <p style={{color: "black", fontSize: "15px"}}> RMC plant is a facility that produces concrete in a centralized manner, following precise formulations and quality standards. It delivers ready-to-use concrete to construction sites, enhancing efficiency, consistency, and quality in construction projects.</p>
              <button className='btn'>
                <Link to="/Plant">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={energy} alt="" />
            <h3>Yamai Enerygy</h3>
            <p> Committed to simplifying your diesel fuel procurement process by offering reliable and efficient delivery services.</p>
            <div className="services-layer">
              <h4>Energy</h4>
              <p style={{color: "black", fontSize: "15px"}}>Whether you're looking for on-demand deliveries, flexible scheduling, or reliable service, we're here to help.</p>
              <button className='btn'>
                <Link to="/Energy">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div></div>

        </div>
      </section>
      
      <section className='TextimonialSlider'>
        <TestimonialSlider/>
      </section>
     
    </section>
  );
};

export default Homepg;
