import React from "react";
import Carousel from "./carousel";
import AllservicesCarousel from "../utils/allservicesCarousel";

// Video promocional
import promoVideo from "../videos/CLIP_PROMORUFFTUFF_original.mp4";

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
      allservicesImages: loadedImages.length > 0 ? loadedImages : AllservicesCarousel.generatePlaceholders(5)
    };
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Explora mi trabajo como desarrollador web, de inteligencia artificial y videojuegos. Incluye sitios web en producción, detección de seguridad en tiempo real y juegos en 2D, 3D y realidad virtual.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          {/* FEATURED VIDEO */}
          <div className="row">
            <div className="col-sm-12">
              <div className="video-section text-center mb-5">
                <h4 className="mb-4" style={{fontWeight:'bold'}}>Ruff and Tuff gameplay</h4>
                <div className="video-container" style={{maxWidth: '800px', margin: '0 auto'}}>
                  <video 
                    controls 
                    style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}
                    poster="" 
                  >
                    <source src={promoVideo} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                  <p className="mt-3" style={{color: '#666', fontSize: '0.95em'}}>
                    Client: Toledo Again and DjP
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* WEB PROJECTS */}
          <h4 className="mt-5 mb-3" style={{fontWeight:'bold'}}>Web Projects</h4>
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
                    <span>Landing Page (2025)</span>
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
                      <br />
                      <span>2025</span>
                      <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                        <li><b>Stack:</b> React, Supabase (Auth/DB/Storage with RLS), React Hook Form, Cloudflare Hosting</li>
                        <li><b>Client:</b> Dra Daniela Oca Varela</li>
                      </ul>
                    </div>
                  </div>
                {/* cierre de work-content, no debe haber </a> aquí */}
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
                      <span>Landing Page (2025)</span>
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
                {/* cierre de work-content, no debe haber </a> aquí */}
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_3.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_4.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_5.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/PIZZARINCONCITO_6.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/PIZZERIA/agoogleindexacion.png")} data-lightbox="gallery-pizzeria" style={{ display: "none" }}>Imagen extra</a>
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
                    <span>Web Site (2025)</span>
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
                {/* Imágenes adicionales para el lightbox */}
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
                    <span>Web Project (2025)</span>
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
                {/* Imágenes adicionales para el lightbox */}
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
                    <span>Web Site (2025)</span>
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
                {/* Imágenes adicionales para el lightbox */}
                <a href={require("../images/contructoraAPP/constru2.png")} data-lightbox="gallery-construcciones-lafortuna" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/contructoraAPP/constru3.png")} data-lightbox="gallery-construcciones-lafortuna" style={{ display: "none" }}>Imagen extra</a>
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
                    <span>Sitio web (2025)</span>
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
                {/* Imágenes adicionales para el lightbox */}
                <a href={require("../images/GREENECOPARK/greenecoparkinimage1.png")} data-lightbox="gallery-green-eco-park" style={{ display: "none" }}>Imagen extra</a>
                <a href={require("../images/GREENECOPARK/greenecoparkimage2.png")} data-lightbox="gallery-green-eco-park" style={{ display: "none" }}>Imagen extra</a>
              </div>
            </div>
          </div>
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
                    <span>ITCR / Poder Judicial Costa Rica (2025)</span>
                    <a href="https://youtu.be/2W7S_aO_W9Q" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold', color:'#e53935', display:'inline-flex', alignItems:'center', gap:'7px', margin:'8px 0'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Ver demo en YouTube
                    </a>
                    <ul style={{marginTop:'10px', marginBottom:'0', paddingLeft:'18px', fontSize:'0.95em'}}>
                      <li><b>Description:</b> Designed and implemented real-time AI security modules for anti-spoofing and weapon detection using YOLOv8 and FaceNet, deployed as proof-of-concept for academic and judicial institutions. Focus on low-latency inference and real-time pipelines.</li>
                      <li><b>Stack:</b> Python DL, FaceNet, YOLOv8, Computer Vision, Real-time inference pipelines</li>
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
            {/* Aquí puedes agregar nuevas imágenes para el proyecto AI si lo deseas */}
          </div>

          {/* AI PRODUCTS & SYSTEMS */}
          <h4 className="mt-5 mb-3" style={{fontWeight:'bold'}}>AI Products & Systems</h4>
          <div className="row">
            <div className="col-12">
              <div style={{
                background: '#3498db',
                padding: '25px',
                borderRadius: '12px',
                color: 'white',
                marginBottom: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div style={{ padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', height: '100%' }}>
                      <h6 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>
                        🤖 Private LLM Systems
                      </h6>
                      <p style={{ fontSize: '0.9em', margin: 0, lineHeight: '1.4' }}>
                        Private LLM-based systems (Ollama + Flask) for internal document analysis and domain-specific knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div style={{ padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', height: '100%' }}>
                      <h6 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>
                        👁️ Computer Vision Systems
                      </h6>
                      <p style={{ fontSize: '0.9em', margin: 0, lineHeight: '1.4' }}>
                        AI-powered computer vision systems for security and operational monitoring.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div style={{ padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', height: '100%' }}>
                      <h6 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>
                        ⚡ Automation Tools
                      </h6>
                      <p style={{ fontSize: '0.9em', margin: 0, lineHeight: '1.4' }}>
                        Custom automation tools for businesses using ML and LLMs.
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
        </div>
      </section>
    );
  }
}

export default Portfolio;
