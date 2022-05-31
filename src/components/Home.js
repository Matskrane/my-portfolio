import image from "../images/user-male-icon.png";


const Home = () => {
  return (
    <>
      <div className="main-content">
        <section className="home section">
          <div className='container'>
              <div className='row'>
                    <div className='home-info'>
                        <h3 className='hello'> Hello, my name is <span className='name'>Mats Krane</span></h3>
                        <h3 className='my-profession'>I' m a <span className='typing'>Frontend Developer</span></h3>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                           dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                        </p>
                        <a href='#contact' className='btn-hire-me'>More About Me</a>
                    </div>
                    <div className='home-img'>
                        <img src={image} alt='profile image'></img>
                    </div>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home