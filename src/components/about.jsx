import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "React_skill", content: "React", porcentage: "90%", value: "90" },
        { id: "NextJS_skill", content: "Next.js", porcentage: "80%", value: "80" },
        { id: "TypeScript_skill", content: "TypeScript", porcentage: "80%", value: "80" },
        { id: "TailwindCSS_skill", content: "TailwindCSS", porcentage: "75%", value: "75" },
        { id: "Supabase_skill", content: "Supabase", porcentage: "70%", value: "70" },
        { id: "Python_skill", content: "Python", porcentage: "80%", value: "80" },
        { id: "JavaScript_skill", content: "JavaScript", porcentage: "90%", value: "90" },
        { id: "SQL_skill", content: "SQL/Postgres", porcentage: "75%", value: "75" },
        { id: "GoogleSEO_skill", content: "Google SEO", porcentage: "70%", value: "70" },
        { id: "CSharp_skill", content: "C#", porcentage: "60%", value: "60" },
        { id: "Java_skill", content: "Java", porcentage: "60%", value: "60" },
        { id: "Unity_skill", content: "Unity", porcentage: "60%", value: "60" },
        { id: "Cloudflare_skill", content: "Cloudflare", porcentage: "70%", value: "70" }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "YEUDI MARTÍNEZ SÁNCHEZ\nSan Carlos, Alajuela, Ciudad Quesada.\nTel: 87025190 | Email: jeudym777@gmail.com\n\nApasionado por la creación de software en diferentes áreas. Creo que el trabajo en equipo es esencial para el crecimiento individual, nos permite escuchar y ampliar perspectivas para resolver cualquier problema."
        },
        {
          id: "second-p-about",
          content:
            "EDUCACIÓN: Instituto Tecnológico de Costa Rica (TEC) | Ingeniería en Computación - 2025\n\nSOFT SKILLS: Pensamiento crítico, trabajo en equipo, adaptabilidad, creatividad, resolución de problemas.\nIDIOMAS: Inglés intermedio, español nativo."
        },
        {
          id: "third-p-about",
          content:
            "SKILLS TÉCNICAS: React, Next.js, Supabase, TypeScript, TailwindCSS, Google SEO, Java, C#, Python, Android Studio, Javascript, SQL Server, Firebase, Unity, C++, Postgres SQL, Azure, Weaviate DB, Cloudflare, herramientas de desarrollo y diseño. "
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
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
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
