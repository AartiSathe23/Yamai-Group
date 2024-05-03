import React from 'react';
import { useEffect } from 'react';
import Homepg from '../Components/Home/home';
import Footerpg from '../Components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div>
        <Homepg/>
        <Footerpg/>
    </div>
  );
}

export default Home;