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
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Testimonials
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Terms Of Service
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Privacy policy
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Update News
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Our Services</h4>
              <ul className="footer-list">
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Air Conditioning
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Electrical Panels
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Electrical Services
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Security System
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Surge Protection
                  </a>
                </li>
                <li>
                  <a href="index.html#">
                    <i className="fas fa-caret-right" /> Indoor Lighting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Newsletter</h4>
              <div className="footer-newsletter">
                <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                <div className="subscribe-form">
                  <form action="index.html#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <button className="theme-btn" type="submit">
                      Subscribe Now <i className="far fa-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
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
                <a href="index.html#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <i className="fab fa-youtube" />
                </a>
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