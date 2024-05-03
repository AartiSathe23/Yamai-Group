import React from 'react';
import Footerpg from '../../Components/Footer/Footer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RestoreIcon from '@mui/icons-material/Restore'; 
import brick from "../Assets/viit.png" ;
import FindInPageIcon from '@mui/icons-material/FindInPage';
import EngineeringIcon from '@mui/icons-material/Engineering'; 
import DesignServicesIcon from '@mui/icons-material/DesignServices'; 
import "./Bricks.css";
import { useEffect } from 'react';

const Bricks = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);
return (
<div>
  <section>

  <div className="topimage">
  <div className="overlay"></div>
  <div className="heading">
    <h2>Yamai Bricks</h2>
  </div>
  <div className="para">
    <p>
    Welcome to Yamai Bricks, your premier destination for eco-friendly construction materials. Specializing in fly ash bricks, we offer sustainable solutions that not only meet but exceed industry standards. Our commitment ensures that every brick contributes to building a greener future while maintaining superior durability and strength for your construction projects.
    </p>
  </div>
  </div>

  <div className="info-container">
    <div className="heading"><h1>"Building a Greener Future, Brick By Brick"</h1></div>
   

    <hr className='hr-nine' />
    <div className="extra-info">
    At Fly ash Bricks, we're redefining the construction industry with our innovative approach to sustainable building materials. Our flagship product, Fly Ash Bricks, is engineered to deliver superior performance while minimizing environmental impact. Made from a blend of <br /> <span>fly ash, crusher dust, cement, and bonding liquid,</span>  our bricks offer unmatched strength, durability, and eco-friendliness. <br />Our bricks undergo rigorous testing to ensure superior strength and durability, meeting the highest industry standards. The combination of fly ash, crusher dust, and cement creates a resilient material capable of withstanding the harshest environmental conditions, making Fly Ash Bricks ideal for both structural and non-structural applications.

    </div>


  </div>
  <hr className='divider' />


  <div className="heading-title">
  <h2>Our Product</h2>
</div>
    <div className="product-info">
    <img src={brick} alt="" className='brick' />
    <div className="theory">
    <h1>Fly Ash Bricks</h1>
    <p> Fly Ash Bricks are available in a standardized size of 4x3x9 inches (4 inches in height, 3 inches in width, and 9 inches) in length, providing versatility and ease of use in various construction projects. Whether you're building walls, partitions, or structural elements, our bricks offer the flexibility and consistency needed for efficient construction processes.
    </p></div>
    
    </div>
    <hr className='divider' />
  
  <div class="packages">
  <h3 class="title">Why Us</h3>
  <p>Choose Yamai Bricks for unparalleled quality and commitment to sustainability. With our extensive experience and dedication to eco-friendly practices, we offer fly ash bricks that surpass industry standards. Our products not only contribute to a greener environment but also ensure unmatched durability and reliability for your construction needs. Partner with us for exceptional service, superior products, and a shared vision for a sustainable future.</p>
  <hr />
  
  <ul class="grid">
    {/* <li>
    <h1><ApartmentIcon sx={{ fontSize:80}}/></h1>
      <h4>Top builder</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi ea, natus quaerat, iure, neque voluptatum beatae assumenda totam doloribus id officia aliquid!</p>
    </li> */}

    <li>
    <h1><FindInPageIcon sx={{ fontSize:80}}/></h1>

      <h4>Quality Assurance</h4>
      <p>Fly Ash Bricks undergo stringent quality control measures to guarantee consistent performance and reliability, giving you peace of mind for your construction projects.</p>
    </li>

    <li>       
    <h1><RestoreIcon sx={{ fontSize:80}}/></h1>

      <h4>Time Delivery</h4>
      <p>Experience the assurance of timely delivery with Yamai Bricks. We prioritize efficiency and reliability in our delivery services. Count on us to ensure that your bricks arrive promptly.</p>
    </li>

    <li>     
    <h1><EngineeringIcon sx={{ fontSize:80}}/></h1>
     
      <h4>Budget Friendly</h4>
      <p>At Yamai Bricks, we believe in providing budget-friendly solutions without compromising on quality. With competitive pricing and cost-effective options, we ensure that you get the best value for your investment.</p>
    </li>

    <li>  
    <h1><DesignServicesIcon sx={{ fontSize:80}}/></h1>
     
      <h4>Versatility</h4>
      <p>With standardized dimensions and enhanced bonding properties, Fly Ash Bricks offer versatility in design and construction, catering to a wide range of project requirements.</p>
    </li>

    
    
  </ul>
  </div>
  </section>
 
  
  




<Footerpg/>
</div>
);
};

export default Bricks;
