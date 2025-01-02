import React from 'react'
import Header from './Header'
import Footer from './Footer'
import about from '../assets/img/about/01.jpg' 
import pump8 from '../assets/img/pump8.webp'
import { Link } from 'react-router-dom'
import breadcrumb from '../assets/img/breadcrumb/01.jpg'
import worker from '../assets/img/worker.png'
import review from '../assets/img/review.png'
import project from '../assets/img/project-management.png'
import guarantee from '../assets/img/guaranteed.png'

const AboutUs = () => {
  return (
    
  <>
  
  <Header/>

  <main className="main">

  {/* breadcrumb */}
  <div
    className="site-breadcrumb"
    style={{ backgroundImage: `url(${breadcrumb})` }}
  >
    <div className="container">
      <h2 className="breadcrumb-title">About Us</h2>
      <ul className="breadcrumb-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active"><i className="fa-solid fa-angles-right me-1"></i>About Us</li>
      </ul>
    </div>
  </div>
  {/* breadcrumb end */}



   {/* about area */}
    <div className="about-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
              <div className="about-img">
                <img src={pump8} alt="" />
              </div>
              <div className="about-experience">
                <div className="fa-solid fa-plug">
                  <i className="icon-plug" />
                </div>
                <b className="text-start">
                  20 Years Of <br /> Quality Service
                </b>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right wow fadeInRight" data-wow-delay=".25s">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">
                  <i className="fa-solid fa-lightbulb" /> About Us
                </span>
                <h2 className="site-title">
                  We Are Commited To <span>Provide Quality</span> Service
                </h2>
              </div>
              <p className="about-text">
              Founded in 2004, Mansi Engineering & Electricals has established itself as a prominent and trusted name in the water handling solutions industry. With an unwavering commitment to excellence and customer satisfaction, we have become a leading supplier of water supply pumps for a diverse range of applications across various industries. Our wide product range includes Dewatering Pump, Submersible Dewatering Pumps, Dewatering Equipments, Dewatering Pump, Diesel Dewatering Pump, Rainwater Dewatering System, Sludge Dewatering Pump, Water Pumps, Booster Pump, and Borewell Pumps.
              </p>
              <p className="about-text">
              At Mansi Engineering & Electricals, our unwavering commitment to excellence has led us to remarkable growth under the able guidance of our esteemed Owner, Dipak Shinde. With years of experience in the water handling solutions domain, his visionary leadership has been instrumental in shaping our success.
              </p>
              <p className="about-text">
              Presently, we take pride in achieving an annual turnover of approximately Rs. 5-10 Crore, a testament to our dedication to quality and customer satisfaction. As a leading name in the industry, we continually strive to exceed expectations and set new benchmarks.
              </p>
              <p className="about-text">
              Choose Mansi Engineering & Electricals for all your water handling needs, and experience excellence in every drop.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about area end */}


     {/* counter area */}
  <div className="counter-area pt-50 pb-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <img src={project} alt="" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={500}
                data-speed={3000}
              >
                500
              </span>
              <h6 className="title">+ Projects Done </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <img src={review} alt="" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={900}
                data-speed={3000}
              >
                900
              </span>
              <h6 className="title">+ Happy Clients</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <img src={worker} alt="" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={1500}
                data-speed={3000}
              >
                1500
              </span>
              <h6 className="title">+ Experienced Staff</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <img src={guarantee} alt="" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={30}
                data-speed={3000}
              >
                30
              </span>
              <h6 className="title">+ Win Awards</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* counter area end */}
  
  </main>

  <Footer/>

  </>

  )
}

export default AboutUs