import React from "react";

class Services extends React.Component {
  render() {
    const services = [
      {
        id: "ai-development",
        title: "AI Development Services",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
        description: "Custom machine learning models, neural networks, and intelligent automation solutions tailored to your business needs. From data analysis to predictive systems.",
        highlights: ["Custom ML Models", "Data Pipelines", "Predictive Analytics"]
      },
      {
        id: "web-development",
        title: "Custom Web Development",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
        description: "High-performance web applications built with modern frameworks. Full-stack solutions from landing pages to complex business platforms with database integration.",
        highlights: ["React / Next.js", "Full-Stack Apps", "Supabase / PostgreSQL"]
      },
      {
        id: "computer-vision",
        title: "Computer Vision Systems",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
        description: "Real-time image and video analysis systems. Object detection, facial recognition, anti-spoofing, and visual inspection solutions deployed in production environments.",
        highlights: ["Object Detection", "Facial Recognition", "Real-time Processing"]
      },
      {
        id: "llm-automation",
        title: "Private LLM & Automation",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
        description: "Deploy private language models for your organization. Document analysis, intelligent chatbots, and workflow automation that keeps your data secure.",
        highlights: ["Private LLMs", "Document Analysis", "Secure Deployment"]
      },
      {
        id: "vr-experiences",
        title: "VR & Interactive Experiences",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z"/><path d="M6 12h.01M18 12h.01"/><path d="M12 18v-2"/><path d="M8 18l2-2"/><path d="M16 18l-2-2"/></svg>,
        description: "Immersive virtual reality applications and interactive 3D experiences. Training simulations, product visualizations, and engaging entertainment solutions.",
        highlights: ["Unity 3D / VR", "Training Simulations", "Interactive Apps"]
      }
    ];

    return (
      <section id="services" className="services-mf sect-pt4 route" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a" style={{ color: '#fff' }}>Services</h3>
                <p className="subtitle-a" style={{ color: '#94a3b8' }}>
                  End-to-end solutions from concept to deployment
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: '30px' }}>
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={service.id}>
                <div style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(79, 195, 247, 0.2)',
                  borderRadius: '16px',
                  padding: '30px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(79, 195, 247, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(79, 195, 247, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(79, 195, 247, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                    {service.icon}
                  </div>
                  <h2 style={{
                    color: '#fff',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginBottom: '15px',
                    lineHeight: 1.3
                  }}>
                    {service.title}
                  </h2>
                  <p style={{
                    color: '#94a3b8',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    marginBottom: '20px'
                  }}>
                    {service.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {service.highlights.map((highlight, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(79, 195, 247, 0.15)',
                        color: '#4fc3f7',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '20px' }}>
                Have a project in mind? Let's discuss how I can help.
              </p>
              <a
                href="#contact"
                className="btn btn-primary js-scroll"
                style={{
                  padding: '14px 35px',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  borderRadius: '8px'
                }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
