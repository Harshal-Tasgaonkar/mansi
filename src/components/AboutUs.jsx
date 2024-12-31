import React from 'react'
import Header from './Header'
import Footer from './Footer'
import about from '../assets/img/about/01.jpg' 
import pump8 from '../assets/img/pump8.webp'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    
  <>
  
  <Header/>

  <main className="main">

  {/* breadcrumb */}
  <div
    className="site-breadcrumb"
    style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
  >
    <div className="container">
      <h2 className="breadcrumb-title">About Us</h2>
      <ul className="breadcrumb-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active"><i className="fa-solid fa-angles-right"></i>About Us</li>
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
                <div className="about-experience-icon">
                  <i className="icon-plug" />
                </div>
                <b className="text-start">
                  30 Years Of <br /> Quality Service
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
  
  </main>

  <Footer/>

  </>

  )
}

export default AboutUs