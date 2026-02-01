
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
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <img
                src={fotoPerfil}
                alt="Foto de perfil de Yeudi Martinez"
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
              <div>
                <h1 className="intro-title mb-4">I'm Yeudi Martinez — Computer Engineer & AI Developer</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items"></span>
                  <strong className="text-slider">
                    Building AI Solutions | Production-Ready Web Apps | Immersive VR Experiences
                  </strong>
                </p>
                <p className="pt-3">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#work"
                    role="button"
                  >
                    See My Work
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
