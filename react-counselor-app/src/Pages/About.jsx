import React from 'react';
import "../Styles/About.css"; // import the CSS file
import { Button } from 'bootstrap';

export default function About(){
  return (

    <>
   <section className="heading-image">
  <div className="container-fluid p-0 image-container">
    <img 
      src="https://preview.colorlib.com/theme/counselor/images/bg_5.jpg.webp" 
      alt="Landing" 
      className="custom-img"
    />
    <div className="center-text">
      <h1>About Us</h1>
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
