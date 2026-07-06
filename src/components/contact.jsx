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
                <div style={{ marginTop: "20px", display: "flex", gap: "12px", alignItems: "center" }}>
                  <a
                    href="https://www.instagram.com/yeoolabs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{
                      width: '44px',
                      height: '44px',
                      padding: 0,
                      borderRadius: '50%',
                      background: 'transparent',
                      border: 'none',
                      boxShadow: 'none',
                      textDecoration: 'none',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img src="https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg" alt="Instagram" style={{height:'28px',width:'28px', display:'block'}} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yeudimartinezengineer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      width: '44px',
                      height: '44px',
                      padding: 0,
                      borderRadius: '50%',
                      background: 'transparent',
                      border: 'none',
                      boxShadow: 'none',
                      textDecoration: 'none',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img src="data:image/png;base64,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" alt="LinkedIn" style={{height:'28px',width:'28px', display:'block'}} />
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
