import React from 'react';
import Footerpg from '../Footer/Footer';
import { useState , useEffect} from 'react';
import "./Visit.css"
import bg from '../Assets/background.jpg';
import { useSnackbar } from 'notistack';


const Visit = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [company, setCompany] = useState('');
    const [service, setService] = useState('');
    const {enqueueSnackbar}=useSnackbar();
    console.log(name)

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
      }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update state based on the input name
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'company':
                setCompany(value);
                break;
            case 'service':
                setService(e.target.value);
                break;
            default:
                break;
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let result = await fetch("http://localhost:4000/visit", {
        method: "post",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, date, company, service }),
        });
        result = await result.json();
        localStorage.setItem("visit", JSON.stringify(result));
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setCompany("");
        setDate("");
        enqueueSnackbar("Visit details submitted", { variant: "success" });
        if(result.status==500){
    enqueueSnackbar("Error occured", { variant: "error" });
}
        } catch (error) {
        enqueueSnackbar("error occured", { variant: "success" });
        }
        };
       

    return (
        <div>
            <div className="topimage1">
                <div className="overlay"></div>
                <div className="heading"><h2>Contact Yamai Group</h2></div> 
            </div>
            <div className='contactcontent'>
                <div className='contactimage'>
                    <img className='img2' src={bg} alt="" />
                    <div className='content'>
                        <div className='paragraph'>
                            <h3>Yamai Group of Construction</h3>
                            <p>Feel free to contact us regarding your project, we would love to hear from you.</p>
                        </div>
                        <div className='information'>
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
                            </div>
                            <div className='info'>
                                <div className='icon'>
                                    <span class="material-symbols-outlined">call</span>
                                </div>
                                <div className='name'>
                                    095613 34999 
                                </div>
                            </div>
                            <div className='info'>
                                <div className='icon'>
                                    <span class="material-symbols-outlined">apartment</span>
                                </div>
                                <div className='name'>
                                    095613 34999 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Visit Us</h2>
                        <div className="inline-inputs">
                            <div>
                                <label htmlFor="name">Name*</label>
                                <input type="text" id="name" name="name" value={name} onChange={handleChange}required />
                            </div>
                            <div>
                                <label htmlFor="email">Email*</label>
                                <input type="email" id="email" name="email" value={email} onChange={handleChange}required />
                            </div>
                        </div>
                        <div className="inline-inputs">
                            <div>
                                <label htmlFor="date">Date*</label>
                                <input type="date" id="date" name="date" value={date} onChange={handleChange}required />
                            </div>
                            <div>
                                <label htmlFor="service">Select a Service*</label>
                                <select id="service" name="service" value={service} onChange={handleChange}>
                                    <option value="service0">- Select -</option>
                                    <option value="yamaiconstruction">Yamai Construction</option>
                                    <option value="yamaibricks">Yamai Bricks</option>
                                    <option value="energy">Yamai Energy</option>
                                    <option value="stone crusher">Yamai Stone Crusher</option>
                                    <option value="shruti enterprises">Shruti Enterprises</option>
                                    <option value="shraddhaagency">Shraddha Agencies</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message"> Your Company name</label>
                            <input type="company" id="company" name="company" value={company} onChange={handleChange}required />
                        </div>
                        <div>
                            <label htmlFor="message">Message*</label>
                            <textarea id="message" name="message" value={message} onChange={handleChange}required />
                        </div>
                        
                        <button type="submit">Submit</button>
                        {/* {submitted && <div className="success-message">Form submitted successfully!</div>} */}
                    </form>
                </div>
            </div>
            <Footerpg/>
        </div>
    );
};

export default Visit;
