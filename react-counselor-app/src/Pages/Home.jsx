import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaUsers, FaUmbrella } from "react-icons/fa";
import { BsCalendar, BsChatDots, BsClipboardCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import "../Styles/Home.css";
import About from "./About";
import consultantImg from "../assets/images/about-1.jpg.webp";
import relationImg from "../assets/images/services-1.jpg";
import coupleImg from "../assets/images/services-2.jpg";
import depressionImg from "../assets/images/services-3.jpg.webp";
import familyImg from "../assets/images/services-3.jpg.webp";
import personalImg from "../assets/images/services-3.jpg.webp";
import businessImg from "../assets/images/services-3.jpg.webp";
import PricingSection from "../Components/PricingPlan/PricingPlan";
import blogData from "../Components/Blogsection/BlogData";
import BlogCardSection from "../Components/Blogsection/BlogSection";
import TestimonialCard from "../Components/TestimonialCard/Testimonial";
import GetinTouchMsgform from "../Components/GetintouchSection/Msgform";


// logic for service section 
const services = [
  {
    id: 1,
    title: "Relation Problem",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    image: relationImg,
  },
  {
    id: 2,
    title: "Couples Counseling",
    desc: "We help couples overcome communication issues, build trust, and create stronger bonds...",
    image: coupleImg,
  },
  {
    id: 3,
    title: "Depression Treatment",
    desc: "Providing professional guidance and therapy to overcome depression and regain happiness...",
    image: depressionImg,
  },
  {
    id: 4,
    title: "Family Problem",
    desc: "Resolving conflicts within families, improving relationships, and building harmony...",
    image: familyImg,
  },
  {
    id: 5,
    title: "Personal Problem",
    desc: "Helping you tackle stress, anxiety, and personal struggles with professional support...",
    image: personalImg,
  },
  {
    id: 6,
    title: "Business Problem",
    desc: "Guidance for handling business conflicts, workplace stress, and decision-making...",
    image: businessImg,
  },
];

export default function Home() {
  // logic for contact button
  const navigate = useNavigate();
  const goTOContact = () => {
    navigate('/contact');
  };

  // logic for service section 
  const [activeService, setActiveService] = useState(services[0]);

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
                  <button to="/contact" onClick={goTOContact} className="btn btn-success btn-lg me-3">
                    Contact us
                  </button>
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

      {/* Services section */}
      <section className="services-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h6 className="text-success text-uppercase">SERVICES</h6>
              <h2 className="fw-bold">How It Works</h2>
            </div>
          </div>

          <div className="row text-center">
            {/* Item 1 */}
            <div className="col-md-4 mb-4">
              <div className="card-item p-4">
                <div className="icon-circle mb-4">
                  <BsCalendar size={40} className="icon-symbol" />
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
                <div className="icon-circle mb-4">
                  <BsChatDots size={40} className="icon-symbol" />
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
                  <BsClipboardCheck size={40} className="icon-symbol" />
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

{/* counseling section */}
      <section className="counseling-section py-4">
        <div className="container">
          <div className="row align-items-center bg-light-grey section-box">
            {/* Left - Image */}
            <div className="col-md-6 p-0">
              <img
                src={consultantImg}
                alt="Consultant"
                className="img-fluid h-100 w-100 object-fit-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="col-md-6 p-5">
              <p className="welcome-text">WELCOME TO COUNSELOR</p>
              <h2 className="title">
                Best Counseling Funding Network Worldwide.
              </h2>
              <p className="description">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="description">
                On her way she met a copy. The copy warned the Little Blind Text,
                that where it came from it would have been rewritten a thousand
                times and everything that was left from its origin would be the
                word "and" and the Little Blind Text should turn around and return
                to its own, safe country.
              </p>
              <button className="btn btn-light video-btn">
                <span className="play-icon">▶</span> WATCH OUR CONSULTANT VIDEO
              </button>
            </div>
          </div>
        </div>
      </section>

     {/* our Services section */}
      <section>
        <div className="container py-5">
          {/* Section Title */}
          <div className="text-center mb-4">
            <p className="text-success fw-bold">OUR SERVICES</p>
            <h2 className="fw-bold">We Can Help You With This Situation</h2>
          </div>

          <div className="row pt-3 px-5 mx-5">
            {/* Left side (tabs) */}
            <div className="col-md-4">
              {services.map((service) => (
                <div
                  key={service.id}                              
                  className={
                    activeService.id === service.id              
                      ? "p-3 mb-4 border rounded active-tab"     
                      : "p-3 mb-4 border rounded bg-white"       
                  }
                  onClick={() => setActiveService(service)}     
                  style={{ cursor: "pointer" }}                  
                >
                  <h6
                    className={
                      activeService.id === service.id ? "text-white mb-0" : "text-dark mb-0"
                    }
                  >
                    {service.title}                              
                  </h6>
                </div>
              ))}
            </div>

            {/* Right side (content) */}
            <div className="col-md-8">
              <div className="card border-0">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="img-fluid rounded service-img"
                />
                <div className="mt-3">
                  <h5 className="fw-bold">{activeService.title}</h5>
                  <p>{activeService.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Testimonial section */}
        <TestimonialCard/>

      {/* Pricing Section */}
    
      <PricingSection/>

      {/* Get in touch section */}
        <GetinTouchMsgform/>

         <BlogCardSection blogs={blogData} limit={3} />
    </>
  );
}
