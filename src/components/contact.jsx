import React from "react";
import imageOverlay from "../img/earth.jpg";

const Contact = () => {
  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div
                id="contact"
                className="box-shadow-full"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "320px",
                }}
              >
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "2.2rem",
                    color: "#222",
                    textAlign: "center",
                  }}
                >
                  Let's Talk
                </h2>
                <div style={{ marginTop: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
                  <a
                    href="https://www.instagram.com/yeoolabs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(225, 48, 108, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e1306c',
                      fontSize: '22px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(225, 48, 108, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(225, 48, 108, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yeudimartinezengineer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(0, 119, 181, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0077b5',
                      fontSize: '22px',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 119, 181, 0.2)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 119, 181, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
