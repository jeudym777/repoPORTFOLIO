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
      skill_categories: [
        {
          title: "🔹 AI / ML / DATA",
          skills: [
            "Python (ML / DL)",
            "Computer Vision (YOLOv8, FaceNet, Anti-spoofing)",
            "LLMs (Gemma, Ollama, RAG pipelines)",
            "Weaviate DB",
            "Real-time inference pipelines"
          ]
        },
        {
          title: "🔹 Backend / Web",
          skills: [
            "Flask / APIs",
            "Supabase (Auth, Storage, RLS, PostgreSQL)",
            "SQL Server / Postgres",
            ".NET Framework",
            "Azure Services"
          ]
        },
        {
          title: "🔹 Frontend",
          skills: [
            "React / Next.js",
            "TypeScript / JavaScript",
            "TailwindCSS",
            "HTML / CSS"
          ]
        },
        {
          title: "🔹 Game / 3D / VR",
          skills: [
            "Unity 3D (PC / Mobile / VR)",
            "C#",
            "Blender",
            "XR / Quest 2"
          ]
        }
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
                      <strong>TECHNICAL SKILLS:</strong>
                      <div style={{ marginTop: '15px' }}>
                        {this.state.skill_categories.map((category, categoryIndex) => (
                          <div key={categoryIndex} style={{ marginBottom: '20px' }}>
                            <h6 style={{ 
                              fontWeight: 'bold', 
                              marginBottom: '10px',
                              color: '#0078ff'
                            }}>
                              {category.title}
                            </h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                              {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} style={{
                                  background: '#f8f9fa',
                                  color: '#495057',
                                  border: '1px solid #dee2e6',
                                  borderRadius: '12px',
                                  padding: '5px 12px',
                                  fontSize: '0.9em',
                                  fontWeight: 500,
                                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                }}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
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
