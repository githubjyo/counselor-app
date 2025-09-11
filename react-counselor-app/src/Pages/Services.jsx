import React from 'react';
import { BsCalendar, BsChatDots, BsClipboardCheck } from 'react-icons/bs';
import "../Styles/Home.css"; 
import ImageBanner from '../Components/ImageBanner/Imagebanner';
import bannerImg from "../assets/images/head_img_5.jpg";
import { NavLink } from 'react-router-dom';
export default function Services(){
  return (
    <>
     <section className="heading-image">
  <div>
      <ImageBanner 
        imageSrc={bannerImg}
        overlayText="Services"
       breadcrumbs={[
    { name: 'Home', NavLink: '/' },
    { name: 'Services', NavLink: null }  
  ]}
      />
    </div>
</section>


     <section className="services-section">
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
    </>

  );
}
