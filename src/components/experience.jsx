import React from "react";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      experiences: [
        {
          id: "exp-1",
          title: "Web API REST Developer",
          technologies: ["C#", ".NET", "Dapper", "T-SQL"],
          description: "Development of RESTful APIs using C# and .NET framework. Data access implementation with Dapper and optimized T-SQL queries.",
          type: "Backend"
        },
        {
          id: "exp-2",
          title: "Frontend Developer",
          technologies: ["Angular"],
          description: "Development of responsive and dynamic web interfaces with Angular. Experience in components, services and state management.",
          type: "Frontend"
        }
      ]
    };
  }

  render() {
    return (
      <section id="experience" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">.NET EXPERIENCE</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                {this.state.experiences.map((exp) => (
                  <div key={exp.id} style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "15px" }}>
                      <div>
                        <h5 style={{ margin: "0 0 8px 0", color: "#222" }}>{exp.title}</h5>
                        <span style={{ 
                          display: "inline-block",
                          background: "#e8f4f8",
                          color: "#0066cc",
                          borderRadius: "12px",
                          padding: "4px 12px",
                          fontSize: "0.85em",
                          fontWeight: 500
                        }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p style={{ margin: "12px 0", color: "#666", fontSize: "0.95em" }}>
                      {exp.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '15px' }}>
                      {exp.technologies.map(tech => (
                        <span key={tech} style={{
                          background: '#f1f1f1',
                          color: '#333',
                          borderRadius: '16px',
                          padding: '6px 14px',
                          fontSize: '0.9em',
                          fontWeight: 500,
                          boxShadow: '0 1px 2px rgba(0,0,0,0.07)'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
