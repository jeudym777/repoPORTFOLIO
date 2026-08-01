import React, {useEffect, lazy, Suspense} from 'react';
import {useLocation} from 'react-router-dom';

import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import Preloader from './components/preloader';
import WhatsAppButton from './components/whatsapp-button.jsx';
import { trackEvent } from './utils/analytics';

// Lazy load lighter components for better initial load time
const Experience = lazy(() => import('./components/experience.jsx'));

export default function Main(){
  const location = useLocation();

  useEffect(() => {
    const recordVisit = async () => {
      let geoInfo = "Unknown Location";
      try {
        const response = await fetch("https://freeipapi.com/api/json");
        if (response.ok) {
          const geo = await response.json();
          geoInfo = `${geo.cityName}, ${geo.regionName}, ${geo.countryName} (IP: ${geo.ipAddress})`;
        }
      } catch (e) {
        console.warn("Could not fetch geolocation:", e);
      }
      
      const referrer = document.referrer ? ` | Referrer: ${document.referrer}` : "";
      const screenRes = ` | Screen: ${window.screen.width}x${window.screen.height}`;
      const details = `UA: ${navigator.userAgent} | Lang: ${navigator.language}${screenRes}${referrer} | Loc: ${geoInfo}`;
      
      trackEvent('visit', 'Home', details);
    };

    recordVisit();
  }, []);

  useEffect(()=>{
    // map path to section id
    const path = location.pathname.replace(/^\//, '');
    if(!path || path === ''){
      // scroll to top
      window.scrollTo({top:0, behavior: 'smooth'});
      return;
    }
    const id = path; // expects /work -> element with id="work"
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
      <About />
      <Portfolio />
      
      <Suspense fallback={<div style={{minHeight: '500px'}}></div>}>
        <Experience />
      </Suspense>
      
      <Contact />
      <WhatsAppButton />
      <Preloader />
    </>
  )
}
