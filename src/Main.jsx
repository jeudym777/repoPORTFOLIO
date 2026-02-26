import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import Services from './components/services.jsx';
import About from './components/about.jsx';
import Experience from './components/experience.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import Preloader from './components/preloader';
import WhatsAppButton from './components/whatsapp-button.jsx';

export default function Main(){
  const location = useLocation();

  useEffect(()=>{
    // map path to section id
    const path = location.pathname.replace(/^\//, '');
    if(!path || path === ''){
      // scroll to top
      window.scrollTo({top:0, behavior: 'smooth'});
      return;
    }
    const id = path; // expects /services -> element with id="services"
    // small delay to ensure elements are mounted
    setTimeout(()=>{
      const el = document.getElementById(id);
      if(el){
        const nav = document.querySelector('nav');
        const offset = nav ? nav.offsetHeight : 0;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset + 5;
        window.scrollTo({top, behavior: 'smooth'});
      }
    }, 150);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Intro />
      <Portfolio />
      <Services />
      <Experience />
      <About />
      <Contact />
      <WhatsAppButton />
      <Preloader />
    </>
  )
}
