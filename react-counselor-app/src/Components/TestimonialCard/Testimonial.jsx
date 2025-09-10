import React from 'react';
import './Testimonial.css';

import testimonal1 from "../../assets/images/testi_person_1.jpg";
import testimonal2 from "../../assets/images/testi_person_2.jpg";
import testimonal3 from "../../assets/images/testi_person_3.jpg";
export default function TestimonialCard(){
  return (
    <>
     
      {/* testimonal section */}
<section className="testimonial-section text-center mb-5 pb-5">
  <div className="overlay"></div>
  <div className="container position-relative">
    <h6 className="text-uppercase text-white">Testimonial</h6>
    <h2 className="fw-bold text-white mb-5">Happy Clients</h2>

    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card p-4 shadow-sm text-start">
                <p>
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia…”
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={testimonal1}
                    alt="client"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-0">Roger Scott</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card p-4 shadow-sm text-start">
                <p>
                  “Separated they live in Bookmarksgrove right at the coast of
                  the Semantics…”
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={testimonal2}
                    alt="client"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-0">Roger Scott</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card p-4 shadow-sm text-start">
                <p>
                  “Even the all-powerful Pointing has no control about the blind
                  texts…”
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={testimonal3}
                    alt="client"
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-0">Roger Scott</h6>
                    <small className="text-muted">Marketing Manager</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       {/* Indicators */}
      <div className="carousel-indicators mt-4">
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
      </div>
  </div>
</section>
</>
  );
}


