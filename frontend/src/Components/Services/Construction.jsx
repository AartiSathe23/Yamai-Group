import React from "react";
import Footerpg from "../../Components/Footer/Footer";

import "./Construction.css";
// import styles from './Accordion.module.css';
import house from "../Assets/house.jpeg";
import bg from "../Assets/constructionabout.jpg";
import bg1 from "../Assets/contructionabout1.jpg";
import proj1 from "../Assets/proj1.jpg";
import proj2 from "../Assets/proj2.jpg";
import proj3 from "../Assets/proj3.jpg";
import { useEffect } from "react";

const Construction = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);
  
  return (
    <div>
      <section>
        <div className="topimage">
          <div className="overlay"></div>
          <div className="heading">
            <h2>Yamai construction</h2>
          </div>
          <div className="para">
            <p>
            Welcome to the Yamai Construction, where innovation meets excellence and dreams turn into reality. Our mission is to redefine the standards of construction by providing unparalleled quality, craftsmanship, and attention to detail in every project we undertake. 
            </p>
          </div>
        </div>
        <div className="vision">
          <div class="container">
            <div class="row1">
              <div className="title">
                <h1>About us</h1>
              </div>
            </div>
            <div class="row">
              <div class="about-img">
                <div class="img-box">
                  <img src={bg} alt="about img" class="image" />
                  <img src={bg1} alt="about img" class="image" />
                </div>
              </div>
              <div class="about-text">
                <p>
                With over 17 years of invaluable experience, we at Yamai Group have been at the forefront of shaping the landscape of both government and private construction projects. From iconic landmarks to essential infrastructure, our portfolio speaks volumes about our commitment to excellence and our dedication to turning visions into reality.
                </p>
                <br />
                <h3>Qualities of Our Company</h3>
                <div class="skills">
                  <div class="skill-item">Experience</div>
                  <div class="skill-item">Expertise</div>
                  <div class="skill-item">Skilled Workforce</div>
                  <div class="skill-item">Quality</div>
                  <div class="skill-item">Communication</div>
                  <div class="skill-item">Customer Satisfaction</div>
                  <div class="skill-item">Reputation</div>
                  <div class="skill-item">Integrity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clientinfo">
          <div className="clientid">
            <h3>Government Contractor</h3>
            <p>Collaborating with government agencies provides opportunities to contribute to public infrastructure projects, ensuring compliance with regulatory standards and fostering long-term partnerships to address community needs.</p>
          </div>
          <div className="clientid">
            <h3>Private Contractor</h3>
            <p>Engaging with private clients offers flexibility and innovation in project design and execution, catering to diverse needs and preferences while maintaining a focus on quality and client satisfaction.</p>
          </div>
          <div className="clientid">
            <h3>Road Contractor</h3>
            <p>Specializing in road construction demands meticulous planning and execution to ensure safety, efficiency, and sustainability, contributing to enhanced transportation infrastructure and facilitating economic growth and development.</p>
          </div>
        </div>

        <div className="main">
          <div className="title">
            <h1>Our projects</h1>
          </div>
          <div className="projects">
            <div className="card">
              <div className="image">
                <img src={proj1} alt="" />
              </div>
              <div className="content">
                <h3>100-Bed Women's Hospital </h3>
                <h4> (Project Value: 30 Crores) </h4>
                <p>
                Contributing to the betterment of society is ingrained in our ethos. The completion of the 100-Bed Women's Hospital showcases our ability to undertake and execute critical healthcare infrastructure projects.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={proj2} alt="" />
              </div>
              <div className="content">
                <h3>Road Construction</h3>
                <h4>(Project Value: 3 Crores) </h4>
                <p>
                Our involvement in road construction projects underscores our commitment to enhancing connectivity and infrastructure development in the regions we serve.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={proj3} alt="" />
              </div>
              <div className="content">
                <h3>Heritage Restoration Project</h3>
                <h4>(Project Value: 2 Crores) </h4>
                <p>
                Preserving our cultural heritage is a passion of ours, as demonstrated by our successful completion of the Heritage Restoration Project. This project stands as a symbol of our craftsmanship and reverence for history.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="clienthead">
            <h1>Our Clients</h1>
            <p>Our relationships with our clients have always been partnerships. We are continuously seeking to expand our own horizons and develop our capabilities so that our clients are able to harness our expertise to propel their own. Our client profile is diverse, spanning public, private, and multinational companies and government bodies. Building lasting relationships with our stakeholders is a fundamental tenet of our company, and we look forward to continuing to serve clients in all sectors as we grow together.</p>
          </div>
        </div>
      
 
      </section>
      <Footerpg />
    </div>
  );
};

export default Construction;
