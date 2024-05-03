import React from 'react';
import { useEffect } from 'react';
import Footerpg from '../../Components/Footer/Footer';
import agency from "../Assets/agencytwo.png" ;


import "./Agencies.css";


const Agencies = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);
return (
<div>
    <section>
    <div className="topimage">
      <div className="overlay"></div>
        <div className="heading">
          <h2>Shraddha Agencies</h2>
        </div>
        <div className="para">
          <p>
          Welcome to Shraddha Agencies, your trusted partner for sustainable bagasse solutions. With our commitment to eco-friendly practices and quality products, we provide high-grade bagasse that meets your packaging and disposable needs. Count on us for reliable supply, exceptional customer service.
          </p>
        </div>
    </div>
  <div className="information">
    <h1>THINK BIG, THINK ENVIRONMENT</h1>

    <div className="hr">
      <hr className='yellow'/><hr className='blue' />
    </div>
    <div className="main">
      <p>At Green Energy Solutions, brought to you by Shraddha Agency, we're at the forefront of sustainable energy practices through innovative bagasse trading. Bagasse offers several environmental benefits due to its renewable and biodegradable nature. As a byproduct of sugarcane processing, it reduces waste by utilizing material that would otherwise be discarded. Specializing in harnessing bagasse produced from sugar factories, we facilitate its transfer to boiler factories and particle board manufacturers.  Additionally, when used as a biofuel, bagasse provides a cleaner alternative to fossil fuels, reducing greenhouse gas emissions and dependence on non-renewable energy sources.
      </p>
  
      <p>Furthermore, bagasse products such as paper and packaging materials offer a sustainable alternative to conventional materials, helping to reduce deforestation and promote responsible resource management. Overall, the utilization of bagasse contributes to conservation efforts, mitigates environmental pollution, and supports the transition towards a more sustainable and eco-friendly economy.</p>
    </div>
  </div>


  <div className="bagas">
  <div className='name'>
    <h1>Bagasse Trading</h1>
  </div>
  <div className='trading'>
    <p>
    Bagasse trading involves the buying and selling of bagasse, the fibrous residue left over from sugarcane processing. This trading activity typically occurs between producers, processors, and end-users who utilize bagasse for various purposes. Buyers may include industries such as paper manufacturing, packaging, and biofuel production, while sellers consist of sugar mills and other sugarcane processing facilities. 
    </p>
    <div className="list">
      <ul>
      <li><span>Bagasse Procurement</span> : We collaborate with sugar factories to capture bagasse emitted during the production process. Through state-of-the-art technology, we ensure efficient extraction and purification of bagasse, maximizing its potential for various applications.</li>
      <li><span>Bagasse Trading</span> : Our platform connects sugar factories with boiler factories and particle board manufacturers in need of reliable bagasse sources. Through transparent and fair trading practices, we facilitate seamless transactions that benefit both producers and consumers.
      </li>
      <li><span>Customized Solutions</span> : We understand that each industrial operation has unique energy requirements. That's why we offer tailored solutions to meet the specific needs of our clients, ensuring optimal utilization of bagasse resources.
      </li>
      <li><span>Environmental Impact</span> : By diverting bagasse from sugar factories away from harmful emissions, we contribute to reducing greenhouse gas emissions and mitigating environmental pollution. Our sustainable approach helps industries transition towards cleaner energy alternatives, fostering a healthier planet for future generations.
      </li>
    </ul>
    </div>
    
    <div className="picture">
    <img src={agency} alt="" className='picturetwo' />
    </div>
    
  </div>
</div>

<button class="button">
  <div class="container">
    <div class="header">
      Why Choose Green Energy Solutions by Shraddha Agency
    </div>

    <div className="questions">
      <ul>
      <li><p> <span > Reliability :</span> With years of experience in the renewable energy sector, we guarantee a steady and consistent supply of high-quality bagasse to our clients.
      </p>

      </li>
      <li><p> <span>Efficiency :</span> Our streamlined processes and cutting-edge technology ensure efficient extraction, purification, and distribution of bagasse, minimizing wastage and maximizing productivity
      </p>
      
      </li><li><p> <span> Sustainability:</span>  We're committed to promoting sustainable practices that benefit both industries and the environment. By choosing Green Energy Solutions by Shraddha Agency, you're actively contributing to a greener, more sustainable future.
      </p>

      
      </li>
      </ul>
    </div>
  </div>
</button>

<div className="joinus">
  <h1>Join Us in Shaping a Greener Future</h1>
  <div className="hr1">
    <hr className='yellow'/>
    </div>
  <p>Experience the power of renewable energy with Green Energy Solutions by Shraddha Agency. Together, let's build a sustainable tomorrow powered by bagasse innovation. Contact us today to learn more about our services and how we can help optimize your energy efficiency while reducing your carbon footprint.</p>
</div>

    
</section>
<Footerpg/>
</div>
);
};

export default Agencies;