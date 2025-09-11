import React from 'react';
import './Imagebanner.css';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const ImageBanner = ({ imageSrc, overlayText, breadcrumbs }) => {
  return (
    <section className="heading-image">
      <div className="container-fluid p-0 image-container">
        <img 
          src={imageSrc} 
          alt="Banner" 
          className="custom-img"
        />
        <div className="overlay"></div>

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="breadcrumb-text">
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                {crumb.link ? (
                  <NavLink to={crumb.link} style={{ color: 'black', textDecoration: 'none' }}>
                    {crumb.name}
                  </NavLink>
                ) : (
                  crumb.name
                )}
                {index < breadcrumbs.length - 1 && ' > '}
              </span>
            ))}
          </div>
        )}

        {/* Overlay Text */}
        <div className="overlay-text">{overlayText}</div>
      </div>
    </section>
  );
};

export default ImageBanner;
