// App.js
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/About/About';
import Homepg from './Pages/Home';
import Contact from './Pages/Contactus';
import Construction from './Components/Services/Construction';
import Crusher from './Components/Services/Crusher';
import Bricks from './Components/Services/Bricks';
import Agencies from './Components/Services/Agencies';
import Plant from './Components/Services/Plant';
import Energy from './Components/Services/Energy';
import Enquiry from './Components/Contacts/Enquiry';
import Visit from './Components/Contacts/Visit';
import Quotation from './Components/Contacts/Quotation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepg />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/enquiry' element={<Enquiry />} />
          <Route path='/visit' element={<Visit />} />
          <Route path='/quotation' element={<Quotation />} />
          <Route path='/Construction' element={<Construction />} />
          <Route path='/Crusher' element={<Crusher />} />
          <Route path='/Bricks' element={<Bricks />} />
          <Route path='/Agencies' element={<Agencies />} />
          <Route path='/Plant' element={<Plant />} />
          <Route path='/Energy' element={<Energy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
