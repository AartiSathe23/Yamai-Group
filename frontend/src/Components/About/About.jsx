import React, { useEffect , useState } from 'react';
import "./About.css"
import Footerpg from '../Footer/Footer';
import mixer1 from '../Assets/mixer1.jpg';
import site from '../Assets/site.jpg';
import rod from '../Assets/rod.jpg';
import cement from '../Assets/cement.jpg';
import mixer from '../Assets/mixer.jpg'
import { data } from "./Accordion/data";
import { Accordion } from "./Accordion/Accordion";

const Aboutus = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

return (
      <div>
        <div className='aboutcompany'>
          <div className='aboutcontent'>
            <div className='aboutimage'>
              <div className='centered'>
                <h2>Yamai Group</h2>
                <p>Welcome to Yamai Group, where innovation meets excellence in construction services. Established since 17+ years,Yamai Group has been a trusted name in the industry, delivering high-quality construction solutions across a diverse range of projects. From residential developments to commercial complexes, we specialize in turning your vision into reality.</p>
              </div>
            </div>
            

          <div className='aboutmission'>
            <div className='missioncontent'>
              <h3>Our Mission</h3>
              <p>The mission of our company is to consistently deliver High-Quality products and services while fostering innovation, sustainability, and customer satisfaction. We strive to exceed industry standards by continuously improving our processes, embracing new technologies, and adapting to changing market dynamics.
              </p>
              <p>Our Goal is to be a trusted partner for our clients, providing them with reliable solutions that meet their needs and contribute to their success. We are committed to creating a positive impact in the communities we serve, promoting environmental stewardship, and upholding the highest standards of integrity.We are committed to fostering a culture of excellence, where every team member is empowered to contribute their unique skills and ideas towards our collective success.
              </p>
              <p>Ultimately, our mission is to be a catalyst for positive change, driving innovation, sustainability, and social responsibility in everything we do.                
              </p>
            </div>
            <div class='missionimage'>
              <img class='img2' src={site} alt="" />
              <div class="img3-container">
                <img class='img3' src={rod} alt="" />
                <img class='img3' src={cement} alt="" />
              </div>
            </div>

          </div>
          
          <div className='aboutvision'>
            <div className='visionimage'>
              <img className='img2' src={mixer1} alt="" />
            </div>
            <div className='visioncontent'>
              <h3>Our Vision</h3>
              <p>Our vision is to be a leading construction company known for our commitment to quality, safety, and sustainability. We aim to set new standards of excellence in the construction industry, continuously evolving and adapting to meet the changing needs of our clients and the environment.
              </p>
              <p>Our vision at Yamai Group of Construction is to be a beacon of innovation and excellence in the construction industry. We aspire to lead the way in creating sustainable, high-quality infrastructure that enriches communities and enhances lives. With a relentless commitment to integrity, professionalism, and client satisfaction, we aim to shape the future of construction, setting new standards of excellence and leaving a lasting positive impact on the world around us.We strive to build lasting relationships with our clients, suppliers, and subcontractors based on integrity, transparency, and mutual respect.
              </p>
            </div>
          </div>

          <div className='aboutgoal'>
            <div className='container'>
              <h4>Expert Worker</h4>
              <p>We are dedicated to provide High Quality products and Quality Assurance. Whether you're looking for building a house  or seeking products and trade, we've got you covered.Our team of experts is committed to provide your dream into reality with its professionality and customer hospitality. With years of experience in the industry, we understand the needs and preferences of our customers, and we strive to exceed their expectations with every interaction</p>
            </div>
            <div className='container'>
              <h4>Quality Work</h4>
              <p>What sets us apart is our unwavering commitment to quality. From the initial consultation to the final execution, we pay attention to detail, ensuring that every aspect of our work meets the highest standards of craftsmanship.We provide nothing but the best for our valued clients. Join the ranks of satisfied customers who have experienced the difference of working with Yamai Group.</p>
            </div>
            <div className='container'>
              <h4>24/7 Support</h4>
              <p>Experience peace of mind with our 24/7 support. Our dedicated team of experts is here around the clock to address your concerns and provide the assistance you need for a seamless experience. Explore our wide range of products and services on our website, knowing that help is always just a click or call away. </p>
            </div>
          </div>
          
          <div className='aboutservices'>
            <div className='servicescontent'>
              <h3>Our Services</h3>
              {data.map((section, index) => (
                <Accordion key={index} section={section} />
              ))}
            </div>
            <div className='servicesimage'>
              <img src={mixer} alt="" />
            </div>
          </div>

          <div className='aboutimp'>
            <div className='imp1'>
              <h3>Why Choose Yamai Construction?</h3>
                <div className='bullet'>
                  <ul>
                    <li>Experienced Team: Our team of skilled professionals brings years of experience and expertise to every project.</li>
                    <li>Quality Craftsmanship: We are dedicated to delivering superior craftsmanship and exceptional results that stand the test of time.</li>
                    <li>Customer-Centric Approach: We prioritize open communication, collaboration, and customer satisfaction throughout the construction process.</li>
                    <li>Safety First: Safety is our top priority, and we adhere to the highest standards of safety protocols to ensure a secure working environment for all.</li>
                  </ul>
              </div>
            </div>

            <div className='imp2'>
              <h3>Our Infrastructure</h3>
              <p>
              We are authoritative in designing the qualitative signboard and nameplate and are well-integrated work set up is our key to growth. Our infrastructure is scattered over a large area. Our manufacturing units are parted into manufacturing, packaging, designing, transportation, and distribution units that are headed by trained professionals.
              </p>
              <p>That's why our infrastructure is engineered for maximum resilience and efficiency, minimizing downtime and ensuring continuous operations even in the face of unexpected challenges.</p>
            </div>
            <div className='imp3'>
              <h3>Contact Us</h3>
              <p>Ready to embark on your next construction project? Contact ABC Construction today to learn more about our services and how we can bring your vision to life. Let's build something incredible together!
              </p>
              <div className='info'>
                <div className='icon'>
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div className='name'>
                163/3 Venkatesh Appartment Saat Rasta Railway Lines Solapur, Maharashtra, 413001 India 
                </div> 
              </div>
              <div className='info'>
                <div className='icon'>
                <span class="material-symbols-outlined">mail</span>
                </div>
                <div className='name'>
                  yamaigroup99@gmail.com
                </div>
              </div> <br />
              <div className='info'>
                <div className='icon'>
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div className='name'>
                   095613 34999 
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
        <Footerpg/>
    </div>
);
};

export default Aboutus;
