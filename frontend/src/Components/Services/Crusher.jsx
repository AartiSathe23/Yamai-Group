import React from "react";
import Footerpg from "../../Components/Footer/Footer";
import "./Crusher.css";
import house from "../Assets/house.jpeg";
import c1 from "../Assets/c1.jpg";
import c2 from "../Assets/c2.jpg";
import c3 from "../Assets/c3.jpg";
import c4 from "../Assets/c4.jpg";
import c5 from "../Assets/c5.jpg";
import c6 from "../Assets/c6.jpg";
import img1 from "../Assets/ten.png";
import img2 from "../Assets/twentyone.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import crush from "../Assets/sand.png" ;
import sand from "../Assets/msand.png" ;
import { useEffect } from "react";

 const Crusher = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);
  return (
    <div>
      <section>
        <div className="topimage">
          <div className="overlay"></div>
          <div className="heading">
            <h2>Yamai Stone Crusher</h2>
          </div>
          <div className="para">
            <p>
            Welcome to Yamai Stone Crusher, your trusted source for high-quality aggregates and construction materials. With our state-of-the-art crushing equipment and commitment to excellence, we provide a wide range of crushed stone products tailored to meet your project requirements. 
            </p>
          </div>
        </div>
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container bottomContainer">
            <div class="ultimateImg">
                <img src={c2} className="stars" alt="" />
            </div>
            <div className="allText bottomText">
              <p className="text-blk headingText">Stone Crusher</p>
              <p className="text-blk description">
              At Yamai Stone Crusher Solutions, our mission is to transform the construction landscape through sustainable practices. Driven by our commitment to innovation and environmental stewardship, we tirelessly refine our processes and products. <br /><br /> Offering a wide array of sizes, our aggregates are designed to meet diverse construction requirements, ensuring adaptability and effectiveness in every project. From coarse to fine granules, our tailored solutions cater to various applications, empowering builders to fulfill their objectives while reducing environmental impact.
              </p>
            </div>
          </div>
        </div>

        <div className="heading">
          <h2>Our Products</h2>
        </div>
        <div class="blog-slider">
          <div class="blog-slider__item ">
            <div class="blog-slider__img">
              <img src={img1} alt="" className="image" />
            </div>
            <div class="blog-slider__content">
              <h1>10mm Stone</h1>
              <p>

              10mm stone, also known as 3/8 inch stone, is a smaller-sized aggregate typically used in applications where a finer texture is desired. It is commonly used in concrete mixes, as well as for bedding pipes and drainage layers, road construction, landscaping.
              </p>
            </div>
          </div>
        </div>
        <div class="blog-slider">
        <div class="blog-slider__item2">
          <div class="blog-slider__img">
            <img src={img2} alt="" className="image2" />
          </div>
          <div class="blog-slider__content2">
            <h1>20mm Stone</h1>
            <p>
            20mm stone, also known as 3/4 inch stone, is a larger-sized aggregate used for a variety of construction purposes.
            These medium-sized stones are commonly used in concrete production, as well as for road base, providing structural stability and durability to building foundations, pavements, and structural elements.

            </p>
          </div>
        </div>
      </div>
      <div class="blog-slider">
      <div class="blog-slider__item ">
        <div class="blog-slider__img">
          <img src={sand} alt="" className="image4" />
        </div>
        <div class="blog-slider__content4">
          <h1>M - Sand</h1>
          <p>
          M sand is a type of sand produced by crushing hard granite rocks into fine particles. It is an alternative to natural river sand, which is increasingly scarce. It offers several advantages over river sand, including higher strength, better durability, and reduced environmental impact.
          </p>
        </div>
      </div>
    </div>
    <div class="blog-slider">
    <div class="blog-slider__item">
      <div class="blog-slider__img">
        <img src={crush} alt="" className="image3" />
      </div>
      <div class="blog-slider__content3">
        <h1>Crush Sand</h1>
        <p>
        Crush sand is produced by crushing larger stones or gravel into sand-sized particles using crushers. Crush sand is used in concrete production, plastering, and paving. Crush sand may have a slightly rougher texture due to the crushing process, it still provides good strength and stability to construction materials.
        </p>
      </div>
    </div>
  </div>
        

        <div className="heading-images">
          <h2>Image Gallery</h2>
          
        </div>
        <div className="accordian">
          <p>VSI Machine , HSI Machine, Crusher</p>
          <ul>
            <li>
              <img src={c1} className="xyz" />              
            </li>
            <li>
              <img src={c2} className="xyz" />  
            </li>
            <li>
              <img src={c3} className="xyz" />    
            </li>
            <li>
                <img src={c4} className="xyz" />  
            </li>
            <li>
                <img src={c5} className="xyz" />    
            </li>
            <li>
              <img src={c6} className="xyz" />              
            </li>
          </ul>
        </div>
      </section>
      <Footerpg />
    </div>
  );
};

export default Crusher;
