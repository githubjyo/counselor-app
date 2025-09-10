import React from 'react';
import "../Styles/About.css"; // import the CSS file
import { Button } from 'bootstrap';
import "../Styles/Home.css";
import consultantImg from "../assets/images/about-1.jpg.webp";
import ImageBanner from '../Components/ImageBanner/Imagebanner';
import bannerImg from "../assets/images/head_img_5.jpg";
import { NavLink } from 'react-router-dom';
import TestimonialCard from '../Components/TestimonialCard/Testimonial';
import GetinTouchMsgform from '../Components/GetintouchSection/Msgform';

export default function About(){
  return (

    <>
   <section className="heading-image">
  <div>
      <ImageBanner 
        imageSrc={bannerImg}
        overlayText="About Us"
       breadcrumbs={[
    { name: 'HOME', NavLink: '/' },
    { name: 'ABOUT US', NavLink: null }  
  ]}
      />
    </div>


</section>
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

         {/* Testimonial section */}
                <TestimonialCard/>

                 {/* Get in touch section */}
                        <GetinTouchMsgform/>
</>

      
  );
}
