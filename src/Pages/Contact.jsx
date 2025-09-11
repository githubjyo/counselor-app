import React from 'react';
import ImageBanner from '../Components/ImageBanner/Imagebanner';
import bannerImg from "../assets/images/head_img_5.jpg";
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaGlobe } from "react-icons/fa";
import "../Styles/ContactSection.css"; // import the CSS file
export default function Contact(){
  return (
    <>
    <section className="heading-image">
  <div>
      <ImageBanner 
        imageSrc={bannerImg}
        overlayText="Contact Us"
       breadcrumbs={[
    { name: 'Home', NavLink: '/' },
    { name: 'Contact', NavLink: null }  
  ]}
      />
    </div>
</section>

<section className="contact-section py-5">
      <div className="container">
        {/* Contact Info */}
        <div className="row text-center mb-5">
          <div className="col-md-3">
            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>
            <p>
              <strong>Address:</strong> 198 West 21th Street,
              <br /> Suite 721 New York NY 10016
            </p>
          </div>
          <div className="col-md-3">
            <div className="icon-circle">
              <FaPhoneAlt />
            </div>
            <p>
              <strong>Phone:</strong> + 1235 2355 98
            </p>
          </div>
          <div className="col-md-3">
            <div className="icon-circle">
              <FaPaperPlane />
            </div>
            <p>
              <strong>Email:</strong> info@yoursite.com
            </p>
          </div>
          <div className="col-md-3">
            <div className="icon-circle">
              <FaGlobe />
            </div>
            <p>
              <strong>Website:</strong> yoursite.com
            </p>
          </div>
        </div>

        {/* Contact Form + Map */}
        <div className="row">
          <div className="col-md-6">
            {/* Google Map Embed */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.958439646547!2d-74.00594128459342!3d40.71277597933057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1615325051234!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="col-md-6">
            <div className="contact-form p-4 bg-white shadow-sm">
              <h4 className="mb-4">Contact Us</h4>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
