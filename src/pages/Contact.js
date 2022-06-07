

const Contact = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>

          <div className="row">
            
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-phone"></i></div>
              <h4>Call Me On</h4>
              <p>+47 90964379</p>
            </div>
      
             
             <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-envelope"></i></div>
              <h4>Email</h4>
              <p>Mats_krane@hotmail.com</p>
            </div>
            
             
             <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-globe-europe"></i></div>
              <h4>Website</h4>
              <p>www.matskrane.no</p>
            </div>
            
          </div>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>

          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea name="" className="form-control" id=""  placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact