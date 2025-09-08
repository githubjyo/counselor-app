import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaUsers, FaUmbrella } from "react-icons/fa";
import { BsCalendar, BsChatDots, BsClipboardCheck } from 'react-icons/bs';

import "../Styles/Home.css"; // import the CSS file
import About from "./About";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
     <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-7 text-black hero-content">
                <h1 className="display-4 fw-bold">
                  Counseling For Your Better Life
                </h1>
                <p className="lead mb-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <div>
                  <Link to="/contact" className="btn btn-success btn-lg me-3">
                    Contact us
                  </Link>
                  <Link to="/about" className="btn btn-light btn-lg">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="play-btn">▶</button>
      </section>

      {/* Feature Boxes */}
      <section className="features-section text-white py-5 ">
        <div className="row text-center">
          <div className="col-md-4">
            <FaClipboardList size={40} className="mb-3" />
            <h4 className="fw-bold">100% Confidential</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="col-md-4">
            <FaUsers size={40} className="mb-3" />
            <h4 className="fw-bold">Qualified Team</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="col-md-4">
            <FaUmbrella size={40} className="mb-3" />
            <h4 className="fw-bold">Individual Approach</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </section>

     <section className="services-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h6 className="text-success text-uppercase">SERVICES</h6>
            <h2 className="fw-bold">How It Works</h2>
          </div>
        </div>
        
        {/* Three-Column Layout */}
        <div className="row text-center">
          {/* Item 1 */}
          <div className="col-md-4 mb-4">
            <div className="card-item p-4">
              <div className="icon-circle mb-4">
                <BsCalendar size={40} className="icon-green" />
                <span className="step-number">01</span>
              </div>
              <h5 className="fw-bold">Make Schedule</h5>
              <p className="text-muted">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="col-md-4 mb-4">
            <div className="card-item p-4">
              <div className="icon-circle-colored mb-4">
                <BsChatDots size={40} className="icon-white" />
                <span className="step-number">02</span>
              </div>
              <h5 className="fw-bold">Start Discussion</h5>
              <p className="text-muted">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-md-4 mb-4">
            <div className="card-item p-4">
              <div className="icon-circle mb-4">
                <BsClipboardCheck size={40} className="icon-green" />
                <span className="step-number">03</span>
              </div>
              <h5 className="fw-bold">Enjoy Plan</h5>
              <p className="text-muted">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="container counselor-wrapper py-5">
      <div className="row align-items-center">
        {/* Consultant Image */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="https://preview.colorlib.com/theme/counselor/images/about-1.jpg.webp"
            alt="Consultant"
            className="img-fluid rounded shadow consultant-img"
          />
          <h5 className="mt-3 text-muted">Your Trusted Consultant</h5>
        </div>

        {/* Text Content */}
        <div className="col-md-7 text-centre">
          <h2 className="text-success">Welcome to Counselor.co</h2>
          <h4 className="mb-3 text-primary">Best Counseling Funding Network Worldwide</h4>
          <p className="lead">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from
            it would have been rewritten a thousand times and everything that was left from its origin
            would be the word 'and' and the Little Blind Text should turn around and return to its own,
            safe country.
          </p>
          <button className="btn btn-success mt-3">Watch Our Consultant Video</button>
        </div>
      </div>
    </section>   
    </>
  );
}
