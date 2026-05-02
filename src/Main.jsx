import React, {useEffect, lazy, Suspense} from 'react';
import {useLocation} from 'react-router-dom';

import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Preloader from './components/preloader';
import WhatsAppButton from './components/whatsapp-button.jsx';

// Lazy load heavy components for better initial load time
const Services = lazy(() => import('./components/services.jsx'));
const Experience = lazy(() => import('./components/experience.jsx'));
const Portfolio = lazy(() => import('./components/portfolio.jsx'));

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
      
      <Suspense fallback={<div style={{minHeight: '500px'}}></div>}>
        <About />
        <Services />
        <Portfolio />
        <Experience />
      </Suspense>
      
      <Contact />
      <WhatsAppButton />
      <Preloader />
    </>
  )
}
