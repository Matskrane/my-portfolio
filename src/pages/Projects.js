

const Projects = () => {
  return (
    <>
          <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Last Projects :</h2>
            </div>
          </div>
          <div className="row">
            
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/images/holidaze.png" alt="" />
                  <div className="project-info padd-15">
                  <h4>Holidaze - Hotel Booking</h4>  
                  <div className="stack">
                    <div className="stack-description">
                      <h5>Description:</h5>
                      <ul>
                        <li>Make a Hotel booking website located in Bergen</li>
                        <li>An Admin page using jwt tokens.</li>
                        <li>Using strapi api as backend for the project connected to Heroku.</li>
                      </ul>
                    </div>
                    <div className="stack-used">
                      <h5>Built With:</h5>
                      <ul>
                        <li>NextJS</li>
                        <li>Boostrap</li>
                        <li>Sass</li>
                        <li>Heroku</li>
                        <li>Strapi</li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Matskrane/project-exam-2-Matskrane">Github</a>
                    <a href="https://project-exam-2-matskranes.vercel.app/">Live Demo</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
             
             <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">                 
                  <img src="/images/strapi-project (13).png" alt="" />
                  <div className="project-info padd-15">
                  <h4>Preworkout - E-Commerce</h4>  
                  <div className="stack">
                    <div className="stack-description">
                      <h5>Description:</h5>
                      <p>E-commerce site that sells supplement called Preworkout.</p>
                    </div>
                    <div className="stack-used">
                      <h5>Built With:</h5>
                      <ul>
                        <li>Vanilla JS</li>
                        <li>Strapi</li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Matskrane/mats-krane-semester-project-2">Github</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
             
             <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/images/Screenshot (21).png" alt="" />
                  <div className="project-info padd-15">
                  <h4>Api and Login with NextjS</h4>  
                  <div className="stack">
                    <div className="stack-description">
                      <h5>Description:</h5>
                      <p>This project card will be removed when feedback is given, since i already have a next project</p>
                    </div>
                    <div className="stack-used">
                      <h5>Built With:</h5>
                      <ul>
                        <li>NextJS</li>
                        <li>Hooks</li>
                        <li>Sass</li>
                      </ul>
                    </div>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Matskrane">Github</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
             

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects