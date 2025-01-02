import React from 'react'
import logo from '../assets/img/mansi1.jpeg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
  <>
  
  
  {/* footer area */}
  <footer className="footer-area">
    <div className="footer-widget">
      <div className="container">
        <div className="row footer-widget-wrapper pt-100 pb-70">
          <div className="col-md-6 col-lg-4">
            <div className="footer-widget-box about-us">
              <a href="index.html" className="footer-logo">
                <img src={logo} alt="" style={{ width: '220px', height: '65px' }}/>
              </a>
              <p className="mb-3">
              Mansi Engineering & Electricals is a trusted leader in water handling solutions, offering a wide range of pumps for diverse applications.
              </p>
              <ul className="footer-contact">
                <li>
                 
                    <i className="fa-solid fa-phone" />
                    +91 84828 58686
                  
                </li>
                <li>
                  <i className="fa-solid fa-location-dot px-2" />
                  486, Kasba Peth Rd, Phadke Haud,
                  Kasba Peth, Pune, Maharashtra 411002
                </li>
                <li>
                  
                    <i className="fa-solid fa-envelope" />
                    sales@mansiengg.com
                    
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/">
                    <i className="fas fa-caret-right" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <i className="fas fa-caret-right" /> About
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <i className="fas fa-caret-right" /> Contact
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Our Services</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/rental-services">
                    <i className="fas fa-caret-right" /> Rental Services
                  </Link>
                </li>
                <li>
                  <Link to="/pump-repairing-services">
                    <i className="fas fa-caret-right" /> Pump Repairing Services
                  </Link>
                </li>
                <li>
                  <Link to="/dewatering-pump-hiring-services">
                    <i className="fas fa-caret-right" /> Dewatering Pump Hiring Services
                  </Link>
                </li>
                <li>
                  <Link to="/rebaring-services">
                    <i className="fas fa-caret-right" /> Rebaring Service
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Our Products</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/dewatering-pump">
                    <i className="fas fa-caret-right" />  Dewatering Pump
                  </Link>
                </li>
                <li>
                  <Link to="/water-pump">
                    <i className="fas fa-caret-right" />  Water Pump
                  </Link>
                </li>
                <li>
                  <Link to="/booster-pump">
                    <i className="fas fa-caret-right" /> Booster Pump
                  </Link>
                </li>
                <li>
                  <Link to="/borewell-pump">
                    <i className="fas fa-caret-right" />  Borewell Pump
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <p className="copyright-text">
              © Copyright <span id="date" />{" "}
              <a href="index.html#"> Electrow </a> All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 align-self-center">
            <ul className="footer-social">
              <li>
                <Link to="https://www.facebook.com/mansiengg.in?mibextid=ZbWKwL">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link >
                  <i className="fa-brands fa-whatsapp" />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/mansi-engineering-electricals/">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer area end */}



  </>

  )
}

export default Footer