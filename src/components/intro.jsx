
import React from "react";
import "./stars.scss";
import fotoPerfil from "../img/FotoPerfilYeudiPortafolio.jpg";


class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <img
                src={fotoPerfil}
                alt="Yeudi Martinez - AI Developer & Software Engineer"
                style={{
                  width: 150,
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
                  background: '#eee',
                }}
              />
              <div style={{ textAlign: 'center', maxWidth: '700px' }}>
                <h1 className="intro-title mb-3" style={{ fontSize: '2.4rem', lineHeight: 1.2 }}>
                  Custom AI & Software Solutions for Businesses
                </h1>
                <p className="intro-subtitle mb-3" style={{ 
                  fontSize: '1.15rem', 
                  color: '#4fc3f7', 
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}>
                  Computer Vision • Automation • Web Platforms • VR
                </p>
                <p style={{ 
                  color: '#cbd5e1', 
                  fontSize: '1.05rem', 
                  lineHeight: 1.7,
                  marginBottom: '25px'
                }}>
                  I help companies build production-ready AI systems and high-performance web applications — from concept to deployment.
                </p>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#work"
                    role="button"
                    style={{ 
                      fontSize: '1.05rem', 
                      padding: '12px 28px',
                      fontWeight: 600
                    }}
                  >
                    See My Work
                  </a>
                  <a
                    className="btn btn-outline-light js-scroll px-4"
                    href="#services"
                    role="button"
                    style={{ 
                      fontSize: '1rem', 
                      padding: '12px 28px'
                    }}
                  >
                    Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
