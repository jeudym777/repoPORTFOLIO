import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Computer Engineer specialized in AI, Computer Vision and applied Machine Learning, with experience building real-time systems, LLM-based tools and production-ready web platforms. Focused on automation, data-driven solutions and scalable software for real-world problems."
        }
      ],
      tech_skills: [
        "React", "Next.js", "Supabase", "TypeScript", "TailwindCSS", "Google SEO", "Java", "C#", "Python", "Android Studio", "Javascript", "SQL Server", "Firebase", "Unity", "C++", "Postgres SQL", "Azure", "Weaviate DB", "Cloudflare", "herramientas de desarrollo y diseño"
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <strong>SKILLS TÉCNICAS:</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                        {this.state.tech_skills.map(skill => (
                          <span key={skill} style={{
                            background: '#f1f1f1',
                            color: '#333',
                            borderRadius: '16px',
                            padding: '6px 14px',
                            fontSize: '0.95em',
                            fontWeight: 500,
                            boxShadow: '0 1px 2px rgba(0,0,0,0.07)'
                          }}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
