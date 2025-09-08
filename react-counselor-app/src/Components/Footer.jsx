import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Counselor Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold">Counselor</h5>
            <p>
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold">Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>What We Do
                </a>
              </li>
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Plans & Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Join Us
                </a>
              </li>
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Blog
                </a>
              </li>
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Privacy & Policy
                </a>
              </li>
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>About Us
                </a>
              </li>
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Blog
                </a>
              </li>
              <li>
                <a href="#" className="  text-decoration-none text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Contact
                </a>
              </li>
              <li>
                <a href="#" className="  text-decoration-none  text-white d-block py-1">
                  <i className="fas fa-chevron-right me-2"></i>Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Have a Questions? Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold">Have a Questions?</h5>
            <ul className="list-unstyled  ">
              <li className="d-flex align-items-start mb-2">
                <i className="fas fa-map-marker-alt me-2 mt-1"></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="fas fa-phone me-2"></i>
                <a href="tel:+23923929210" className="  text-decoration-none text-white">+2 392 3929 210</a>
              </li>
              <li className="d-flex align-items-center">
                <i className="fas fa-paper-plane me-2"></i>
                <a href="mailto:info@yourdomain.com" className="  text-decoration-none text-white">info@yourdomain.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row pt-3 mt-4 border-top border-secondary">
          <div className="col text-center">
            <p className="  mb-0">&copy; 2025 Counselor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
