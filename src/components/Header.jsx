import React from 'react'
import logo from '../assets/img/mansi1.jpeg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     
    <>
    
    
  {/* header area */}
  <header className="header">
    {/* top header */}
    <div className="header-top">
      <div className="container">
        <div className="header-top-wrapper">
          <div className="header-top-left">
            <div className="header-top-contact">
              <ul>
                <li>
                  <a href="index.html#">
                    <i className="fa fa-map-marker-alt me-1" /> 
                    486, Kasba Peth Rd, Phadke Haud, Kasba Peth, Pune, Maharashtra 411002

                  </a>
                </li>
                <li>
                  <a href="https://live.themewild.com/cdn-cgi/l/email-protection#b2dbdcd4ddf2d7cad3dfc2ded79cd1dddf">
                    <i className="fa fa-envelope me-1" />
                    <span
                      className="__cf_email__"
                      data-cfemail="462f28202906233e272b362a236825292b"
                    >
                      sales@mansiengg.com
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+21236547898">
                    <i className="fa fa-phone-alt" /> +91 84828 58686

                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-top-right">
            <div className="header-top-social">
              <span>Follow Us: </span>
              <Link to="https://www.facebook.com/mansiengg.in?mibextid=ZbWKwL">
                <i className="fab fa-facebook" />
              </Link>
              <Link >
                <i className="fa-brands fa-whatsapp" />
              </Link>
              
              <Link to="https://www.linkedin.com/company/mansi-engineering-electricals/">
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-navigation">
      <nav className="navbar navbar-expand-lg ">
        <div className="container position-relative">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="logo" style={{ width: '200px', height: '50px' }} />
          </a>
          <div className="mobile-menu-right">
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-mobile-icon">
                <i className="fa-solid fa-bars" />
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link  "
                  to="/"
                  
                >
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="index.html#"
                  data-bs-toggle="dropdown"
                >
                  Services <i className="fa-solid fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu fade-down">
                  <li>
                    <Link className="dropdown-item" to="/rental-services">
                    Rental Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pump-repairing-services">
                    Pump Repairing Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dewatering-pump-hiring-services">
                    Dewatering Pump Hiring
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/rebaring-services">
                    Rebaring Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="index.html#"
                  data-bs-toggle="dropdown"
                >
                  Products <i className="fa-solid fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu fade-down">
                  <li>
                    <Link className="dropdown-item" to="/dewatering-pump">
                    Dewatering Pump
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/water-pump">
                    Water Pump
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/booster-pump">
                    Booster Pump
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/borewell-pump">
                    Borewell Pump
                    </Link>
                  </li>
                 
                  
                  
                </ul>
              </li>
             
              
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-right">
              
              <div className="nav-right-btn mt-2">
                <a href="contact.html" className="theme-btn">
                  Get A Quote
                  <i className="fas fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
          {/* search area */}
          <div className="search-area">
            <form action="index.html#">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Keyword..."
                />
                <button type="submit" className="search-icon-btn">
                  <i className="far fa-search" />
                </button>
              </div>
            </form>
          </div>
          {/* search area end */}
        </div>
      </nav>
    </div>
  </header>
  {/* header area end */}



    </>

  )
}

export default Header