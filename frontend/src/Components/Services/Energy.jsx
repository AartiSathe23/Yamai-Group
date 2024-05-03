import React, { useState, useEffect } from 'react';
import Footerpg from '../../Components/Footer/Footer';
import './Energy.css';
import E1 from "../Assets/energy1.JPG";
import E2 from "../Assets/energy2.JPG";
import flow from "../Assets/flowchart.png";
import accordion from "../Assets/accordion.jpg"
import { data } from "./Accordion/data";
import { Accordion } from "./Accordion/Accordion";

const Energy = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
      }, []);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };


    return (
        <div>
            <section>
                <div className="topimage">
                    <div className="overlay"></div>
                    <div className="heading">
                        <h2>Yamai Energy</h2>
                    </div>
                    <div className="para">
                        <p>
                        Introducing Yamai Energy, your trusted partner for doorstep diesel delivery services. Our efficient and reliable operations ensure that your diesel requirements are met conveniently and on time, with a focus on customer satisfaction and quality assurance.
                        </p>
                    </div>
                </div>
                <div className="content">
                        <div className="image-container">
                            <img src={E1} alt="" />
                            <img src={E2} alt="" />
                            {/* <img src={E3} alt="" /> */}
                        </div>
                        <div className="text-content">
                            <h3><span>Doorstep Diesel Delivery</span></h3><hr />
                            <p>
                            Yamai Energy specializes in doorstep diesel delivery services, offering a convenient and efficient solution for fueling needs. Through our streamlined operations, we ensure prompt and reliable delivery of diesel directly to your location, eliminating the hassle of refueling trips. This innovative service caters to a wide range of industries and applications, including commercial fleets, construction sites, agricultural operations, and residential properties.
                            </p>
                            <p>
                            With a focus on customer satisfaction and quality assurance, we prioritize safety and efficiency in every delivery, providing peace of mind and uninterrupted fuel supply for your operations. Whether for commercial, industrial, or residential purposes, Yamai Energy is your trusted partner for convenient and dependable diesel delivery services.
                            </p>
                        </div>
                    </div>
                    <div className="flowchart">
                        <img src={flow} alt="" />
                    </div>
                    <div className='energyaccordion'>
                        <div className='accordionimage'>
                            <h3>Key Benefits </h3>
                            <p>
                            Yamai Energy's doorstep diesel delivery service offers unparalleled convenience and efficiency to customers across various sectors. By bringing diesel directly to their location, we eliminate the need for time-consuming trips to fuel stations, saving valuable resources and optimizing operational workflows. Our flexible scheduling options and on-demand delivery ensure that customers have access to fuel precisely when they need it, reducing the risk of downtime and operational disruptions.
                            </p>
                            <img src={accordion} alt="" />
                        </div>
                        <div className='accordioncontent'>
                            {data.map((section, index) => (
                                <Accordion key={index} section={section} index={index} expanded={index === expandedIndex}
                                toggleAccordion={() => toggleAccordion(index)} />
                            ))}
                        </div>
                    </div>
                    <div className="energyservice">
                        <div className="service">
                            <span className="service-icon">🚀</span>
                            <h3>On Demand</h3>
                            <p>Our on-demand doorstep diesel delivery ensures prompt access to fuel whenever you need it, minimizing downtime and maximizing efficiency.</p>
                        </div>
                        <div className="service">
                            <span className="service-icon">💡</span>
                            <h3>Flexible</h3>
                            <p>Offering flexible scheduling options, we tailor our delivery services to suit your specific needs, providing convenience and reliability tailored to your operations.</p>
                        </div>
                        <div className="service">
                            <span className="service-icon">🌟</span>
                            <h3>Quality Assurance</h3>
                            <p>With stringent quality assurance measures, we guarantee that every drop of diesel delivered meets the highest standards, ensuring optimal performance for your operations.</p>
                        </div>
                        <div className="service">
                            <span className="service-icon">🤝</span>
                            <h3>Customer Support</h3>
                            <p>Our dedicated customer support team is available round-the-clock to address any queries or concerns, providing personalized assistance and ensuring a seamless experience.</p>
                        </div>
                    </div>
                    <div className="energycontact">
                    <p className="contact-para">Contact us today to learn more about our services and how we can support your business.</p>
                    </div>
            </section>
            <Footerpg />
        </div>
    );
};

export default Energy;
