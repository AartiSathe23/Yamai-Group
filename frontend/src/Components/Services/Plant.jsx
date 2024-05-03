import React from 'react';
import Footerpg from '../Footer/Footer';
import rmc from "../Assets/rmc.png";
import "./Plant.css";
import agam from "../Assets/agam.jpg";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import StarIcon from '@mui/icons-material/Star';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useEffect } from 'react';

const Enterprises = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
      }, []);
return (
        <div>
            <section>
                <div className="topimage">
                    <div className="overlay"></div>
                        <div className="heading">
                            <h2>Agam RMC Plant</h2>
                        </div>
                        <div className="para">
                            <p>
                            Welcome to our Ready Mix Concrete Plant, your reliable source for high-quality concrete solutions. With our state-of-the-art facility and commitment to precision mixing, we ensure that every batch meets your project's exact specifications.
                            </p>
                        </div>
                </div>
                <div className="plantcontent">
                    <div className="content-text">
                        <h2>Agam Ready Mix Plant</h2>
                        <div className="hr">
                            <hr className='yellow'/><hr className='blue' />
                        </div>
                        <p>
                        Agam ready mix plant is a facility where concrete is produced in batches according to a set recipe and then delivered to construction sites. These plants typically combine various ingredients such as water, aggregates like sand and gravel, cement, and additives in precise proportions to produce concrete tailored to specific project requirements. 
                        </p>
                        <p>
                        Agam ready mix plants adhere to strict quality control measures and safety standards to guarantee the durability and reliability of the concrete they produce, contributing significantly to the success and sustainability of construction endeavors.
                        We offer several advantages, including increased efficiency, and precise customization of concrete mixes for various project needs. They play a vital role in delivering high-quality concrete promptly to construction sites, ranging from small-scale residential projects to large-scale infrastructure developments.
                        </p>
                    </div>
                    <div className="contentimage">
                        <img src={agam} alt="" />
                    </div>
                </div>
                <div className="plantservice">
                        <div className="service1">
                            <EmojiObjectsIcon sx={{ fontSize:60}} />
                            <h3>Our Concrete Mixes</h3>
                            <ul>
                                <li>Standard concrete mix</li>
                                <li>High-strength concrete</li>
                                <li>Fiber-reinforced concrete</li>
                                <li>Colored concrete options</li>
                        </ul>
                        </div>
                        {/* <div className="service1">
                            <EmojiObjectsIcon sx={{ fontSize:80}} />
                            <h3>Sustainable Concrete Solutions</h3>
                            <ul>
                                <li>Use of eco-friendly materials</li>
                                <li>Recycling of waste materials</li>
                                <li>Energy-efficient production processes</li>
                            </ul>
                        </div> */}
                        <div className="service1">
                            <StarIcon sx={{ fontSize:60}} />
                            <h3>Featured Projects</h3>
                            <ul>
                                <li>Infrastructure projects</li>
                                <li>Residential and commercial construction</li>
                                <li>Landscaping projects</li>
                            </ul>
                        </div>
                        <div className="service1">
                            <HandshakeIcon sx={{ fontSize:60}} />
                            <h3>Building Together</h3>
                            <ul>
                                <li>Sponsorship of events</li>
                                <li>Educational outreach programs</li>
                                <li>Partnerships with local businesses and organizations</li>
                            </ul>
                        </div>
                    </div>
                <div className="plantprocess">
                    <img className='plantimage' src={rmc} alt="" />
                </div>
            </section>
        <Footerpg/>
        </div>
);
};

export default Enterprises;
