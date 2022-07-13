import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className="main-content">
        <section className="home section">
          <div className='container'>
              <div className='row'>
                    <div className='home-info padd-15'>
                        <h3 className='hello'> Hello, my name is <span className='name'>Mats Lian Krane</span></h3>
                        <h3 className='my-profession'>I'm a <span className='typing'>Frontend Developer</span></h3>
                        <p>I currently live in Mo i Rana, northern Norway. I recently finished 2 years of studying at Noroff. <br></br>
                        My Hobbies are gaming and going to the gym.
                        <br></br>
                        <br></br>
                           I'm looking for a job where i can develop my skills even further and create cool things.
                        </p>
                        <Link to={'/about'} className='btn hire-me'>More About Me</Link>
                    </div>
                    <div className='home-img padd-15'>
                        <img src="images/sticker.png" alt='profile'></img>
                    </div>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home