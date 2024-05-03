import React from 'react';
import Enquiry from '../Components/Contacts/Enquiry.jsx';
import Visit from '../Components/Contacts/Visit.jsx';
import Quotation from '../Components/Contacts/Quotation.jsx';


const Contact = () => {
  return (
    <div>
        <Enquiry/>
        <Visit/>   
        <Quotation/>  
    </div>
  );
}

export default Contact;
