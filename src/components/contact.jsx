import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
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
                  <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                    <a
                      href="https://www.instagram.com/yeoolabs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        style={{
                          backgroundColor: "#E4405F",
                          color: "white",
                          border: "none",
                          borderRadius: "25px",
                          padding: "10px 20px",
                          fontSize: "1rem",
                          cursor: "pointer",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          transition: "transform 0.2s",
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                      >
                        <img src="https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg" alt="Instagram" style={{height:'20px',width:'20px'}} />
                        Instagram
                      </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yeudimartinezengineer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <button
                        style={{
                          backgroundColor: "#0077B5",
                          color: "white",
                          border: "none",
                          borderRadius: "25px",
                          padding: "10px 20px",
                          fontSize: "1rem",
                          cursor: "pointer",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          transition: "transform 0.2s",
                        }}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                      >
                        LinkedIn
                      </button>
                    </a>
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

export default Contact;
