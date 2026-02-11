import React from "react";
import Carousel from "./carousel";
import AllservicesCarousel from "../utils/allservicesCarousel";

// Video promocional
import promoVideo from "../videos/CLIP_PROMORUFFTUFF_original.mp4";

// Logos de clientes
import logoTec from "../images/logos/logotec.png";
import logoPoderJudicial from "../images/logos/poderjudicial-Photoroom.png";
import logoRuffTuff from "../images/logos/rufftufflogo-Photoroom.png";

// Imágenes de videojuegos
import mm1 from "../images/MISIONMONEY/MISIONMONEYVR_1.png";
import mm2 from "../images/MISIONMONEY/MISIONMONEYVR_2.png";
import mm3 from "../images/MISIONMONEY/MISIONMONEYVR_3.png";
import mm4 from "../images/MISIONMONEY/MISIONMONEYVR_4.png";
import mm5 from "../images/MISIONMONEY/MISIONMONEYVR_5.png";
import mm6 from "../images/MISIONMONEY/MISIONMONEYVR_6.png";
import mm7 from "../images/MISIONMONEY/MISIONMONEYVR_7.png";
import mm8 from "../images/MISIONMONEY/MISIONMONEYVR_8.png";

import skf1 from "../images/SKULLFIGHT/SKF_1.jpg";
import skf2 from "../images/SKULLFIGHT/SKF_2.jpg";
import skf3 from "../images/SKULLFIGHT/SKF_3.jpg";
import skf4 from "../images/SKULLFIGHT/SKF_4.jpg";
import skf5 from "../images/SKULLFIGHT/SKF_5.jpg";

import st1 from "../images/SKULLTROOP/skullgame.png";
import st2 from "../images/SKULLTROOP/skullgame0.jpg";
import st3 from "../images/SKULLTROOP/skullgame2.png";
import st4 from "../images/SKULLTROOP/skullgame3.png";
import st5 from "../images/SKULLTROOP/skullgame4.png";

import stvr1 from "../images/SKULLTROOPVR/SKTVR_1.png";
import stvr2 from "../images/SKULLTROOPVR/SKTVR_2.png";
import stvr3 from "../images/SKULLTROOPVR/SKTVR_3.png";
import stvr5 from "../images/SKULLTROOPVR/SKTVR_5.png";
import stvr6 from "../images/SKULLTROOPVR/SKTVR_6.png";
import stvr8 from "../images/SKULLTROOPVR/SKTVR_8.png";
import stvr9 from "../images/SKULLTROOPVR/SKTVR_9.png";
import stvr10 from "../images/SKULLTROOPVR/skullgame2.png";

class Portfolio extends React.Component {
  constructor() {
    super();
    const loadedImages = AllservicesCarousel.loadImages();
    this.state = {
      allservicesImages: loadedImages.length > 0 ? loadedImages : AllservicesCarousel.generatePlaceholders(5),
      showAllWebProjects: false,
      showAllAIProjects: false,
      showAllGames: false
    };
  }

  toggleWebProjects = () => {
    this.setState(prev => ({ showAllWebProjects: !prev.showAllWebProjects }));
  }

  toggleAIProjects = () => {
    this.setState(prev => ({ showAllAIProjects: !prev.showAllAIProjects }));
  }

  toggleGames = () => {
    this.setState(prev => ({ showAllGames: !prev.showAllGames }));
  }

  render() {
    const { showAllWebProjects } = this.state;
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  <strong style={{color: '#4fc3f7'}}>Real projects. Real clients. Real results.</strong><br/>
                  From AI systems deployed for government institutions to commercial websites driving business growth — explore the work that demonstrates what I can build for you.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* METRICS SECTION */}
          <div className="row mb-5">
            <div className="col-12">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '40px',
                padding: '40px 20px',
                background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,58,95,0.9) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#4fc3f7', lineHeight: 1}}>7+</div>
                  <div style={{color: '#94a3b8', fontSize: '0.95rem', marginTop: '8px'}}>Websites Deployed</div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#4fc3f7', lineHeight: 1}}>3+</div>
                  <div style={{color: '#94a3b8', fontSize: '0.95rem', marginTop: '8px'}}>AI Systems in Production</div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#10b981', lineHeight: 1}}>90%+</div>
                  <div style={{color: '#94a3b8', fontSize: '0.95rem', marginTop: '8px'}}>Detection Accuracy</div>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#10b981', lineHeight: 1}}>&lt;100ms</div>
                  <div style={{color: '#94a3b8', fontSize: '0.95rem', marginTop: '8px'}}>Inference Latency</div>
                </div>
              </div>
            </div>
          </div>

          {/* TRUSTED BY SECTION */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <p style={{color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '25px'}}>
                Trusted By
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '50px'
              }}>
                <img src={logoPoderJudicial} alt="Poder Judicial Costa Rica" style={{height: '55px', objectFit: 'contain', opacity: 0.9, filter: 'brightness(1.1)'}} />
                <img src={logoTec} alt="TEC Costa Rica" style={{height: '55px', objectFit: 'contain', opacity: 0.9, filter: 'brightness(1.1)'}} />
                <img src={logoRuffTuff} alt="Ruff & Tuff TV" style={{height: '55px', objectFit: 'contain', opacity: 0.9, filter: 'brightness(1.1)'}} />
              </div>
            </div>
          </div>

          {/* FEATURED VIDEO */}
          {/* WEB PROJECTS */}
          <h4 className="mt-5 mb-3" style={{fontWeight:'bold'}}>Web Projects</h4>
          <div className="row">
            {/* Mundo Movil JR — Online Store */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/MUNDOMOVILJR/MUNDOMOVILIMAGE0.png")} data-lightbox="gallery-mundomoviljr">
                    <img src={require("../images/MUNDOMOVILJR/MUNDOMOVILIMAGE0.png")} alt="Mundo Movil JR — Online Store" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Online Store Mundo Movil JR</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Curicó, Santiago, Chile (Sep 2025 – Dec 2025)</span>
                    <br />
                    <span>Commercial Website & CRM</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Stack:</b> React, SQL Server (Auth/DB/Storage with RLS), React Hook Form, Javascript</li>
                      <li><b>Hosting:</b> Cloudflare</li>
                      <li><b>Role:</b> Full Stack Developer</li>
                      <li>Commercial website with integrated CRM system for mobile phone store.</li>
                      <li><b>Client:</b> Leonardo Jimenez</li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/MUNDOMOVILJR/MUNDOMOVILIMAGE_1.png")} data-lightbox="gallery-mundomoviljr" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/MUNDOMOVILJR/MUNDOMOVILIMAGE_2.png")} data-lightbox="gallery-mundomoviljr" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/MUNDOMOVILJR/MUNDOMOVILIMAGE3.png")} data-lightbox="gallery-mundomoviljr" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/MUNDOMOVILJR/MUNDOMOVILIMAGE4.png")} data-lightbox="gallery-mundomoviljr" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* Hotel Campo Arenal — Sitio Oficial */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/HotelCampoArenal/hcArenal.png")} data-lightbox="gallery-hotel-campo-arenal">
                    <img src={require("../images/HotelCampoArenal/hcArenal.png")} alt="Hotel Campo Arenal — La Fortuna" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Hotel Campo Arenal — Official Site</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Tourism in La Fortuna, reservations & direct contact</span>
                    <br />
                    <span>Web Site</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Stack:</b> React + Vite, Supabase (Auth, Database), Cloudflare (Hosting & Storage)</li>
                      <li>Clear hotel presentation and its proposal to enjoy La Fortuna, Costa Rica.</li>
                      <li>Guest-oriented content: photos of the place, experience description and quick contact methods.</li>
                      <li>Simple navigation by sections like Home, Rooms, Gallery, Location and Contact.</li>
                      <li>Visible calls-to-action for queries and direct reservations.</li>
                      <li>
                        <a href="https://camposarenal.com/es" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>Visit website</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/HotelCampoArenal/ahcArenal000.png")} data-lightbox="gallery-hotel-campo-arenal" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/HotelCampoArenal/hcArenal3.png")} data-lightbox="gallery-hotel-campo-arenal" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/HotelCampoArenal/hcArenal4.png")} data-lightbox="gallery-hotel-campo-arenal" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/HotelCampoArenal/hcArenal5.png")} data-lightbox="gallery-hotel-campo-arenal" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/HotelCampoArenal/googleSearch00.png")} data-lightbox="gallery-hotel-campo-arenal" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* TicoTrekker — Aventuras en Costa Rica */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/TICOTREKKER/ticotreekerimages.png")} data-lightbox="gallery-ticotrekker">
                    <img src={require("../images/TICOTREKKER/ticotreekerimages.png")} alt="TicoTrekker — Aventuras en Costa Rica" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">TicoTrekker — Adventures in Costa Rica</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Routes, guides & experiences to explore Costa Rica</span>
                    <br />
                    <span>Web Project</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Stack:</b> React + Vite, Supabase (Auth, Database), Cloudflare (Hosting & Storage)</li>
                      <li>Discover hiking routes, viewpoints and weekend plans with real photos.</li>
                      <li>Content designed for the explorer: what to bring, how to get there and what to expect from the tour.</li>
                      <li>Simple navigation by sections like Home, Routes, Blog and Contact.</li>
                      <li>Clear calls-to-action to inspire and plan the next adventure.</li>
                      <li>
                        <a href="https://ticotrekker.com/" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>Visit website</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/TICOTREKKER/ticotreekerimages4.png")} data-lightbox="gallery-ticotrekker" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/TICOTREKKER/ticotreekerimages5.png")} data-lightbox="gallery-ticotrekker" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/TICOTREKKER/ticotreekerimages6.png")} data-lightbox="gallery-ticotrekker" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/TICOTREKKER/ticotreekerimages7.png")} data-lightbox="gallery-ticotrekker" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* Construcciones La Fortuna — Sitio Web */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/contructoraAPP/contru1.png")} data-lightbox="gallery-construcciones-lafortuna">
                    <img src={require("../images/contructoraAPP/contru1.png")} alt="Construcciones La Fortuna — Sitio Web" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Construcciones La Fortuna — Web Site</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Construction & remodeling services in La Fortuna</span>
                    <br />
                    <span>Web Site</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Stack:</b> React + Vite, Supabase (Auth, Database), Cloudflare (Hosting & Storage)</li>
                      <li>Presentation of key services: construction, remodeling and maintenance.</li>
                      <li>Visual portfolio of completed work to build trust.</li>
                      <li>Coverage in La Fortuna and surrounding areas with direct contact for quotes.</li>
                      <li>Visible calls-to-action to request budget and schedule a visit.</li>
                      <li>
                        <a href="https://construccioneslafortuna.com/" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>Visit website</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/contructoraAPP/constru2.png")} data-lightbox="gallery-construcciones-lafortuna" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/contructoraAPP/constru3.png")} data-lightbox="gallery-construcciones-lafortuna" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
          </div>

          {/* View More Web Projects Button */}
          {!showAllWebProjects && (
            <div className="text-center mb-4">
              <button 
                onClick={this.toggleWebProjects}
                className="btn btn-outline-primary"
                style={{
                  padding: '12px 30px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                View More Web Projects ({4} more)
              </button>
            </div>
          )}

          {/* Additional Web Projects - Collapsible */}
          {showAllWebProjects && (
            <>
            <div className="row">
            {/* Lawyer Olivia Oca — Legal Services */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/LAWYER/lawyerpage_5.png")} data-lightbox="gallery-lawyer">
                    <img src={require("../images/LAWYER/lawyerpage_5.png")} alt="Lawyer Olivia Oca" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Lawyer Olivia Oca — Legal Services</h2>
                  <div className="w-more">
                    <span className="w-ctegory">React, Next.js, Tailwind, Supabase, Cloudflare</span>
                    <br />
                    <span>Landing Page</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Stack:</b> React, Next.js, Tailwind, Supabase (Auth, DB), Cloudflare hosting</li>
                      <li><b>Client:</b> Lic. Olivia Oca Varela</li>
                      <li>
                        <a href="https://abogadamariaoliviaocavarela.pages.dev/" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>Visitar sitio web</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/LAWYER/lawyerpage_1.png")} data-lightbox="gallery-lawyer" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/LAWYER/lawyerpage_4.png")} data-lightbox="gallery-lawyer" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* Medical Patient & Clinical Records (Closed System) */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/DOCTORPAGE/doctropage_3.png")} data-lightbox="gallery-doctorpage">
                    <img src={require("../images/DOCTORPAGE/doctropage_3.png")} alt="Medical Patient & Clinical Records" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Medical Patient & Clinical Records (Closed System)</h2>
                  <div className="w-more">
                    <span className="w-ctegory">React, Supabase (Auth/DB/Storage with RLS), React Hook Form, Cloudflare Hosting</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Stack:</b> React, Supabase (Auth/DB/Storage with RLS), React Hook Form, Cloudflare Hosting</li>
                      <li><b>Client:</b> Dra Daniela Oca Varela</li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/DOCTORPAGE/doctropage_1.png")} data-lightbox="gallery-doctorpage" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/DOCTORPAGE/doctropage_2.png")} data-lightbox="gallery-doctorpage" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/DOCTORPAGE/doctropage_4.png")} data-lightbox="gallery-doctorpage" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/DOCTORPAGE/doctropage_5.png")} data-lightbox="gallery-doctorpage" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/DOCTORPAGE/doctropage_6.png")} data-lightbox="gallery-doctorpage" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/DOCTORPAGE/doctropage_7.png")} data-lightbox="gallery-doctorpage" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* Pizzería Rinconcito La Fortuna — Landing Page */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/PIZZERIA/PIZZARINCONCITO_1.png")} data-lightbox="gallery-pizzeria">
                    <img src={require("../images/PIZZERIA/PIZZARINCONCITO_1.png")} alt="Pizzería Rinconcito La Fortuna" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Pizzería Rinconcito La Fortuna — Landing Page</h2>
                  <div className="w-more">
                    <span className="w-ctegory">React, CSS (responsive), WhatsApp Click-to-Chat, Cloudflare Pages</span>
                    <br />
                    <span>Landing Page</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Stack:</b> React (SPA), CSS responsive (Flex/Grid), Cloudflare Pages, dominio/SSL gestionado con Cloudflare, WhatsApp click-to-chat, enlaces a redes sociales.</li>
                      <li><b>Rol:</b> Diseño UI, desarrollo front-end, copy básico y SEO on-page.</li>
                      <li><b>Cliente:</b> Pizzería Rinconcito La Fortuna.</li>
                      <li><b>Notas:</b> Navegación por anclas (#home, #menu, #contacto), CTA a WhatsApp desde móvil/desktop y sección de redes para contacto rápido.</li>
                      <li>
                        <a href="https://pizzeria-rinconcito-lafortuna.pages.dev/" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>Visitar sitio web</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_3.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_4.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_5.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_6.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/agoogleindexacion.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* Green Eco Park — Atracciones y Naturaleza */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/GREENECOPARK/greenecoparkimage0.png")} data-lightbox="gallery-green-eco-park">
                    <img src={require("../images/GREENECOPARK/greenecoparkimage0.png")} alt="Green Eco Park — Atracciones y Naturaleza" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Green Eco Park — Atracciones y Naturaleza</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Parque ecológico y actividades al aire libre en La Fortuna</span>
                    <br />
                    <span>Sitio web</span>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li>Experiencia familiar en medio de la naturaleza: senderos, miradores y diversión al aire libre.</li>
                      <li>Galería con fotos reales del parque para conocer el recorrido antes de visitar.</li>
                      <li>Información clara sobre horarios, ubicación, tarifas y contacto directo.</li>
                      <li>Llamados a la acción visibles para planear la visita y resolver dudas.</li>
                      <li>
                        <a href="https://greenecopark.com/" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>Visitar sitio web</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/GREENECOPARK/greenecoparkinimage1.png")} data-lightbox="gallery-green-eco-park" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/GREENECOPARK/greenecoparkimage2.png")} data-lightbox="gallery-green-eco-park" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* CUSTOM WEB SOLUTIONS SHOWCASE */}
            <div className="col-md-8">
              <div style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
                padding: '30px',
                borderRadius: '16px',
                height: '100%',
                border: '1px solid rgba(79, 195, 247, 0.3)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
              }}>
                <h5 style={{color: '#4fc3f7', fontWeight: 'bold', marginBottom: '20px', fontSize: '1.3rem'}}>
                  Custom Web Solutions
                </h5>
                <p style={{color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px'}}>
                  I build <b style={{color: '#fff'}}>tailored web applications and digital platforms</b> for businesses across industries. 
                  From e-commerce stores to professional service websites — I deliver solutions that convert visitors into clients.
                </p>
                
                <div className="row">
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>E-Commerce</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Custom online stores, payment integration, inventory management</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Hotels & Tourism</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Booking systems, galleries, availability calendars, multilingual</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Professional Services</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Lawyers, doctors, consultants — portfolios that build trust</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Business Platforms</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Dashboards, CRMs, internal tools, admin panels</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>AI Integrations</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Chatbots, smart search, recommendations, automation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>SEO & Performance</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Fast loading, mobile-first, Google optimized, analytics</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '20px',
                  padding: '15px 20px',
                  background: 'rgba(79, 195, 247, 0.1)',
                  borderRadius: '10px',
                  borderLeft: '4px solid #4fc3f7'
                }}>
                  <p style={{color: '#e2e8f0', margin: 0, fontSize: '0.95rem'}}>
                    <b style={{color: '#4fc3f7'}}>Ready to go digital?</b> From idea to launch — I handle design, development, and deployment. Your business deserves a website that works as hard as you do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* View Less Web Projects Button */}
          <div className="text-center mb-4">
            <button 
              onClick={this.toggleWebProjects}
              className="btn btn-outline-secondary"
              style={{
                padding: '10px 25px',
                fontSize: '0.95rem',
                borderRadius: '8px'
              }}
            >
              View Less
            </button>
          </div>
          </>
          )}
          {/* AI PROJECTS */}
          <h4 className="mt-5 mb-3" style={{fontWeight:'bold'}}>AI Projects</h4>
          <div className="row">
            {/* Security AI Modules — Anti-spoofing & Weapon Detection */}
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={require("../images/IASECURITY/securityIA_1.png")} data-lightbox="gallery-iasecurity">
                    <img src={require("../images/IASECURITY/securityIA_1.png")} alt="Security AI" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Security AI Modules — Anti-spoofing & Weapon Detection (PoC)</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Python DL, Facenet, Yolov8, Computer Vision</span>
                    <br />
                    <span>ITCR / Poder Judicial Costa Rica</span>
                    <a href="https://youtu.be/2W7S_aO_W9Q" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#e53935', display:'inline-flex', alignItems:'center', gap:'7px', margin:'8px 0'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Ver demo en YouTube
                    </a>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Description:</b> Built and deployed real-time AI security modules for facial anti-spoofing and weapon detection. Successfully tested with Costa Rica's Judicial Branch as proof-of-concept. Achieved sub-100ms inference latency with 90%+ detection accuracy.</li>
                      <li><b>Stack:</b> Python, FaceNet, YOLOv8, OpenCV, Real-time inference pipelines</li>
                      <li><b>Client:</b> ITCR & Poder Judicial de Costa Rica</li>
                    </ul>
                  </div>
                </div>
                <a href={require("../images/IASECURITY/securityIA_2.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/IASECURITY/securityIA_3.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/IASECURITY/securityIA_4.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/IASECURITY/securityIA_5.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/IASECURITY/securityIA_6.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/IASECURITY/securityIA_7.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/IASECURITY/securityIA_8.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/IASECURITY/securityIA_9.png")} data-lightbox="gallery-iasecurity" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* AI CAPABILITIES SHOWCASE */}
            <div className="col-md-8">
              <div style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
                padding: '30px',
                borderRadius: '16px',
                height: '100%',
                border: '1px solid rgba(79, 195, 247, 0.3)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
              }}>
                <h5 style={{color: '#4fc3f7', fontWeight: 'bold', marginBottom: '20px', fontSize: '1.3rem'}}>
                  Custom AI Detection Systems
                </h5>
                <p style={{color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.7', marginBottom: '25px'}}>
                  I develop <b style={{color: '#fff'}}>tailor-made computer vision and AI detection modules</b> for private enterprises. 
                  From real-time surveillance to intelligent inventory tracking — I build systems that see, analyze, and act.
                </p>
                
                <div className="row">
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Security & Access</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Facial recognition, anti-spoofing, weapon detection, intruder alerts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Smart Inventory</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Object counting, SKU tracking, shelf monitoring, stock alerts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Person Identification</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Employee tracking, VIP recognition, attendance systems, behavior analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Geolocation & Tracking</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Vehicle tracking, zone monitoring, heat maps, movement patterns</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Industrial QA</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Defect detection, quality control, assembly verification, anomaly alerts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                      <div>
                        <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Vehicle & Plate Reading</h6>
                        <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>License plate recognition, parking management, traffic analysis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '20px',
                  padding: '15px 20px',
                  background: 'rgba(79, 195, 247, 0.1)',
                  borderRadius: '10px',
                  borderLeft: '4px solid #4fc3f7'
                }}>
                  <p style={{color: '#e2e8f0', margin: 0, fontSize: '0.95rem'}}>
                    <b style={{color: '#4fc3f7'}}>Need a custom solution?</b> I design and deploy AI systems tailored to your specific business requirements — from prototype to production-ready deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCTS */}
          <h4 className="mt-5 mb-3" style={{fontWeight:'bold', color: '#fff'}}>Products</h4>
          <div className="row">
            <div className="col-12">
              <div style={{
                background: 'linear-gradient(135deg, #0077b6 0%, #00b4d8 50%, #90e0ef 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 8s ease infinite',
                padding: '35px',
                borderRadius: '20px',
                color: 'white',
                marginBottom: '20px',
                boxShadow: '0 15px 50px rgba(0, 119, 182, 0.4)',
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <style>{`
                  @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                `}</style>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div style={{ 
                      padding: '25px', 
                      background: 'rgba(255,255,255,0.15)', 
                      borderRadius: '16px', 
                      height: '100%',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <h6 style={{ fontWeight: 'bold', marginBottom: '12px', color: '#fff', fontSize: '1.1rem' }}>
                        Private LLM Systems
                      </h6>
                      <p style={{ fontSize: '0.95em', margin: 0, lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                        Secure, on-premise AI assistants using Ollama + Flask. Query internal documents without data leaving your servers.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div style={{ 
                      padding: '25px', 
                      background: 'rgba(255,255,255,0.15)', 
                      borderRadius: '16px', 
                      height: '100%',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <h6 style={{ fontWeight: 'bold', marginBottom: '12px', color: '#fff', fontSize: '1.1rem' }}>
                        Computer Vision Systems
                      </h6>
                      <p style={{ fontSize: '0.95em', margin: 0, lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                        Real-time detection and recognition. Production-proven for security with sub-100ms latency.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div style={{ 
                      padding: '25px', 
                      background: 'rgba(255,255,255,0.15)', 
                      borderRadius: '16px', 
                      height: '100%',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <h6 style={{ fontWeight: 'bold', marginBottom: '12px', color: '#fff', fontSize: '1.1rem' }}>
                        Automation Tools
                      </h6>
                      <p style={{ fontSize: '0.95em', margin: 0, lineHeight: '1.6', color: 'rgba(255,255,255,0.9)' }}>
                        Custom workflows that eliminate repetitive tasks. Save hours weekly with intelligent automation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carrusel de Imágenes */}
              <div style={{ marginTop: '30px' }}>
                <Carousel 
                  images={this.state.allservicesImages} 
                  title="Custom services"
                />
              </div>
            </div>
          </div>

          {/* VIDEOGAMES */}
          <h4 className="mt-5 mb-3" style={{fontWeight:'bold'}}>Videogames</h4>
          
          {/* Featured Video */}
          <div className="row mb-4">
            <div className="col-sm-12">
              <div className="video-section text-center">
                <h5 className="mb-3" style={{fontWeight:'bold', color: '#fff'}}>Featured: Ruff and Tuff Gameplay</h5>
                <div className="video-container" style={{maxWidth: '800px', margin: '0 auto'}}>
                  <video 
                    controls 
                    style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)'}}
                    poster="" 
                  >
                    <source src={promoVideo} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                  <p className="mt-3" style={{color: '#94a3b8', fontSize: '0.95em'}}>
                    Client: Toledo Again and DjP
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={st1} data-lightbox="gallery-skulltroop">
                    <img src={st1} alt="Skull Troop" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                    <h2 className="w-title">Skull Troop (PC, Mobile)</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Unity 3D, Mobile Optimization, UI, Shooter/Tower Defense</span>
                        <br />
                        <span>It’s a combination of shooter and tower defense. Command your soldiers, protect the General of our army, conquer territories, and eliminate the General of the Enemy army to win the battle. Good luck!</span>
                        <br />
                        <a href="https://yeoogames.itch.io/skull-troop" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>DOWNLOAD DEMO APK</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=WzLCk57-Pow" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#e53935', display:'inline-flex', alignItems:'center', gap:'7px', margin:'8px 0'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                          Ver demo en YouTube
                        </a>
                        <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                          <li><b>Unity 3D</b></li>
                          <li><b>Mobile Performance Optimization:</b></li>
                          <ul>
                            <li>Occlusion Culling: Rendering only what's necessary, improving performance.</li>
                            <li>Texture Compression and Mesh Optimization: Reducing texture and model complexity to improve frame rate and reduce memory consumption.</li>
                          </ul>
                          <li><b>User Interface (UI):</b> Intuitive and user-friendly interface for touch screens, optimizing controls and accessibility for Android.</li>
                          <li><b>Unity Input System:</b> Control commands on touch screens, adapting shooter gameplay for mobile devices.</li>
                          <li><b>Testing and Debugging on Real Devices:</b> Ensuring compatibility and optimal performance across different Android hardware.</li>
                          <li><b>Multi-Platform Deployment:</b> Handling configuration differences between Oculus Quest and Android.</li>
                          <li><b>Play Store:</b> APK to AAB transformation and permission handling.</li>
                        </ul>
                      </div>
                  </div>
                {/* cierre de work-content, no debe haber </a> aquí */}
                <a href={st2} data-lightbox="gallery-skulltroop" style={{ display: "none" }}>Imagen extra</a>
                <a href={st3} data-lightbox="gallery-skulltroop" style={{ display: "none" }}>Imagen extra</a>
                <a href={st4} data-lightbox="gallery-skulltroop" style={{ display: "none" }}>Imagen extra</a>
                <a href={st5} data-lightbox="gallery-skulltroop" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={stvr1} data-lightbox="gallery-skulltroopvr">
                    <img src={stvr1} alt="Skull Troop VR" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <h2 className="w-title">Skull Troop VR (Quest 2)</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Unity XR, VR UX, C#, Hurricane VR, XR Interaction Toolkit</span>
                    <br />
                    <span>You are the general of the army, send your soldiers to eliminate the enemy, and don’t neglect the towers!</span>
                    <br />
                    <a href="https://youtu.be/tlA6WmyO5rM" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#e53935', display:'inline-flex', alignItems:'center', gap:'7px', margin:'8px 0'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Ver demo en YouTube
                    </a>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Unity 3D:</b> Full game development using Unity to create game logic, level design, and optimization for VR.</li>
                      <li><b>C#</b></li>
                      <li><b>XR Interaction Toolkit:</b> Use of XR Plugin Management to integrate and optimize the game for Oculus Quest 2.</li>
                      <li><b>Hurricane VR:</b> Advanced integration for detailed physical interaction in virtual reality.</li>
                      <li><b>VR Optimization:</b> Performance optimization for standalone devices like Oculus Quest 2, ensuring high FPS and a smooth experience.</li>
                      <li><b>Game Design:</b> Shooter and tower defense mechanics, level design, difficulty balancing, and user experience.</li>
                      <li><b>Level Design:</b> Strategic placement of enemies, tanks, airplanes, and defenses for challenging gameplay.</li>
                      <li><b>Multimedia Integration:</b> 3D models of tanks, airplanes, and special effects (explosions, missiles).</li>
                      <li><b>Physics-Based Interaction:</b> Physical interactions for weapons and defenses.</li>
                      <li><b>Audio Design:</b> Sound effects and background music for immersion.</li>
                      <li><b>User Experience (UX) in VR:</b> UI design and testing for VR, considering player interaction with environment and mechanics.</li>
                    </ul>
                  </div>
                </div>
                <a href={stvr2} data-lightbox="gallery-skulltroopvr" style={{ display: "none" }}>Imagen extra</a>
                <a href={stvr3} data-lightbox="gallery-skulltroopvr" style={{ display: "none" }}>Imagen extra</a>
                <a href={stvr5} data-lightbox="gallery-skulltroopvr" style={{ display: "none" }}>Imagen extra</a>
                <a href={stvr6} data-lightbox="gallery-skulltroopvr" style={{ display: "none" }}>Imagen extra</a>
                <a href={stvr8} data-lightbox="gallery-skulltroopvr" style={{ display: "none" }}>Imagen extra</a>
                <a href={stvr9} data-lightbox="gallery-skulltroopvr" style={{ display: "none" }}>Imagen extra</a>
                <a href={stvr10} data-lightbox="gallery-skulltroopvr" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={skf1} data-lightbox="gallery-skullfight">
                    <img src={skf1} alt="Skull Fights" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                    <h2 className="w-title">Skull Fights (PC/Mobile)</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Unity 3D, C#, Blender, Game Design, Audio Design</span>
                        <br />
                        <span>Hand-to-hand combat game, only the one with the most skills survives in the octagon.</span>
                        <br />
                        <a href="https://yeoogames.itch.io/skull-fight" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>DOWNLOAD DEMO APK</a>
                        <br />
                        <a href="https://www.youtube.com/watch?v=HGFKOuOUDhY" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#e53935', display:'inline-flex', alignItems:'center', gap:'7px', margin:'8px 0'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                          Ver demo en YouTube
                        </a>
                        <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                          <li><b>Unity 3D C#</b></li>
                          <li><b>Game Design:</b> Mechanics, gameplay, levels, game balance, and user experience.</li>
                          <li><b>3D Modeling:</b> Blender and makehuman-community</li>
                          <li><b>Audio Design and Composition:</b> Sound effects and original music using FL Studio and Bandlab.</li>
                          <li><b>User Interface (UI) Design:</b> Interface elements and navigation.</li>
                          <li><b>Shaders and Post-Processing:</b> Unity Post-Processing Stack.</li>
                          <li><b>Project Management:</b> Full game lifecycle management, from planning to release and testing.</li>
                          <li><b>Quality Assurance (QA):</b> Testing and performance optimization.</li>
                          <li><b>Multimedia Integration:</b> Images, animations, and music in Unity.</li>
                        </ul>
                      </div>
                  </div>
                {/* cierre de work-content, no debe haber </a> aquí */}
                <a href={skf2} data-lightbox="gallery-skullfight" style={{ display: "none" }}>Imagen extra</a>
                <a href={skf3} data-lightbox="gallery-skullfight" style={{ display: "none" }}>Imagen extra</a>
                <a href={skf4} data-lightbox="gallery-skullfight" style={{ display: "none" }}>Imagen extra</a>
                <a href={skf5} data-lightbox="gallery-skullfight" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <a href={mm1} data-lightbox="gallery-misionmoney">
                    <img src={mm1} alt="Mission Money" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                    <h2 className="w-title">Mission Money (PC/VR)</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Unity 3D, C#, XR Interaction Toolkit, VR Optimization, Game Design, Audio Design</span>
                        <br />
                        <span>Shooter for VR. They stole from the wrong person—get your money back by eliminating the enemies in a nighttime ambush.</span>
                        <br />
                        <a href="https://www.youtube.com/watch?v=a9VQpjFfpTU" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#e53935', display:'inline-flex', alignItems:'center', gap:'7px', margin:'8px 0'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                          Ver demo en YouTube
                        </a>
                        <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                          <li><b>Unity 3D:</b> Full game development using Unity to create game logic, level design, and optimization for VR.</li>
                          <li><b>C#</b></li>
                          <li><b>XR Interaction Toolkit:</b> Use of XR Plugin Management to integrate and optimize the game for Oculus Quest 2.</li>
                          <li><b>VR Optimization:</b> Performance optimization for standalone devices like Oculus Quest 2, ensuring high FPS and a smooth experience.</li>
                          <li><b>Game Design:</b> Shooter and tower defense mechanics, level design, difficulty balancing, and user experience.</li>
                          <li><b>Level Design:</b> Strategic placement of enemies, tanks, airplanes, and defenses for challenging gameplay.</li>
                          <li><b>Audio Design:</b> Sound effects and background music for immersion.</li>
                          <li><b>User Experience (UX) in VR:</b> UI design and testing for VR, considering player interaction with environment and mechanics.</li>
                        </ul>
                      </div>
                  </div>
                {/* cierre de work-content, no debe haber </a> aquí */}
                <a href={mm2} data-lightbox="gallery-misionmoney" style={{ display: "none" }}>Imagen extra</a>
                <a href={mm3} data-lightbox="gallery-misionmoney" style={{ display: "none" }}>Imagen extra</a>
                <a href={mm4} data-lightbox="gallery-misionmoney" style={{ display: "none" }}>Imagen extra</a>
                <a href={mm5} data-lightbox="gallery-misionmoney" style={{ display: "none" }}>Imagen extra</a>
                <a href={mm6} data-lightbox="gallery-misionmoney" style={{ display: "none" }}>Imagen extra</a>
                <a href={mm7} data-lightbox="gallery-misionmoney" style={{ display: "none" }}>Imagen extra</a>
                <a href={mm8} data-lightbox="gallery-misionmoney" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
            {/* Nuevo juego: Penguin Adventure */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={require("../images/PENGUINADVENTURE/MISIONMONEY_1.png")} data-lightbox="gallery-penguinadventure">
                  <div className="work-img">
                    <img src={require("../images/PENGUINADVENTURE/MISIONMONEY_1.png")} alt="Penguin Adventure" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <h2 className="w-title">Penguin Adventure (2D)</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Unity 2D, C#, Game Design, Level Design, Physics 2D, Audio, UI, AI</span>
                      <br />
                      <span>My first project!!! Educational 2D adventure game, you must collect solar panels and survive the obstacles, storytelling included.</span>
                      <br />
                      <a href="https://yeoogames.itch.io/penguin-adventure" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#007bff'}}>DOWNLOAD DEMO APK</a>
                      <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                        <li><b>Unity 2D Development:</b> 2D platformer game from scratch, game logic, mechanics, and level design.</li>
                        <li><b>C# Scripting:</b> Character logic, collision detection, player movement, enemy control.</li>
                        <li><b>Game Design:</b> Gameplay, platform mechanics, obstacle creation (traps, enemies).</li>
                        <li><b>Level Design:</b> Unity Tilemap for environments.</li>
                        <li><b>Physics 2D:</b> Collisions, moving platforms, interactive elements.</li>
                        <li><b>Audio Design:</b> Sound effects and music integration.</li>
                        <li><b>User Interface (UI) Design:</b> HUD, menus, interactive elements.</li>
                        <li><b>Basic AI Scripting:</b> Enemy behaviors (movement, attacks).</li>
                        <li><b>Character Controller:</b> Custom 2D controller for running, jumping, attacking with a bat.</li>
                      </ul>
                    </div>
                  </div>
                </a>
                <a href={require("../images/PENGUINADVENTURE/MISIONMONEY_2.png")} data-lightbox="gallery-penguinadventure" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PENGUINADVENTURE/MISIONMONEY_3.png")} data-lightbox="gallery-penguinadventure" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
          </div>

          {/* CUSTOM GAME DEVELOPMENT SHOWCASE */}
          <div className="row mt-4">
            <div className="col-12">
              <div style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
                padding: '35px',
                borderRadius: '20px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 15px 50px rgba(139, 92, 246, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Glow effect */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-10%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h5 style={{color: '#a78bfa', fontWeight: 'bold', marginBottom: '15px', fontSize: '1.4rem'}}>
                      Custom Game Development
                    </h5>
                    <p style={{color: '#e2e8f0', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px'}}>
                      <b style={{color: '#fff'}}>Your face. Your brand. Your game.</b><br/>
                      I create fully customized video games for PC, Mobile, and VR — featuring your likeness, your company branding, or your wildest ideas brought to life.
                    </p>
                    
                    <div style={{
                      padding: '15px 20px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      borderRadius: '12px',
                      borderLeft: '4px solid #a78bfa',
                      marginBottom: '20px'
                    }}>
                      <p style={{color: '#cbd5e1', margin: 0, fontSize: '0.95rem'}}>
                        <b style={{color: '#a78bfa'}}>From concept to playable experience</b> — I handle 3D modeling, game mechanics, audio design, and multi-platform deployment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-6 mb-3">
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                          <div>
                            <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>VR Proposals</h6>
                            <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Unforgettable marriage proposals in virtual reality with your face and story</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                          <div>
                            <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Brand Games</h6>
                            <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Interactive marketing experiences with your company branding and products</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                          <div>
                            <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Commercial Games</h6>
                            <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Revenue-generating games for App Store, Play Store, or Steam release</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                          <div>
                            <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Investor Showcases</h6>
                            <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Playable prototypes and demos to pitch your game idea to investors</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                          <div>
                            <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>VR Experiences</h6>
                            <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Immersive virtual reality for training, tours, or entertainment</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                          <div>
                            <h6 style={{color: '#fff', fontWeight: 'bold', marginBottom: '5px'}}>Personal Games</h6>
                            <p style={{color: '#94a3b8', fontSize: '0.85rem', margin: 0}}>Birthday gifts, anniversaries, or just because — your own playable story</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
