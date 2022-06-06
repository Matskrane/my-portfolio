import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>
                    I'm Mats Lian Krane and a <span>Frontend Developer</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam quo ea commodi autem eius id error. Corporis inventore
                    adipisci hic sequi! Blanditiis architecto reprehenderit
                    rerum assumenda, illum aliquam quae dolore nobis laudantium
                    incidunt maiores harum officiis animi commodi! Ipsam
                    exercitationem molestias, non et velit facilis cupiditate,
                    ducimus, dolor harum explicabo cum necessitatibus obcaecati
                    minima dignissimos.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Age : <span>26</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>matskrane.no</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>mats_krane@hotmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Frontend</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+47 90964379</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Mo i Rana</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <Link
                        to={"/contact"}
                        data-section-index="1"
                        className="btn hire-me"
                      >
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width: '60%'}}></div>
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width: '70%'}}></div>
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width: '80%'}}></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{width: '80%'}}></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2018
                          </h3>
                          <h4 className="timeline-title">
                            Tärnaby Alpine School
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, maiores. Facere, minus? Quam minus autem
                            quidem similique dignissimos cumque dolorum quis
                            optio blanditiis, doloremque veritatis.
                          </p>
                        </div>

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2020 - 2022
                          </h3>
                          <h4 className="timeline-title">
                            Noroff Frontend
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, maiores. Facere, minus? Quam minus autem
                            quidem similique dignissimos cumque dolorum quis
                            optio blanditiis, doloremque veritatis.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Work</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2016 - 2021
                          </h3>
                          <h4 className="timeline-title">
                            Nokas Security
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, maiores. Facere, minus? Quam minus autem
                            quidem similique dignissimos cumque dolorum quis
                            optio blanditiis, doloremque veritatis.
                          </p>
                        </div>

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2021 - 2022
                          </h3>
                          <h4 className="timeline-title">
                            Vinmonopolet
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, maiores. Facere, minus? Quam minus autem
                            quidem similique dignissimos cumque dolorum quis
                            optio blanditiis, doloremque veritatis.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About