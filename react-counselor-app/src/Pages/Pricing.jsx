import React from 'react';
import ImageBanner from '../Components/ImageBanner/Imagebanner';
import bannerImg from "../assets/images/head_img_5.jpg";
import { NavLink } from 'react-router-dom';
import PricingSection from '../Components/PricingPlan/PricingPlan';
import GetinTouchMsgform from '../Components/GetintouchSection/Msgform';
export default function Pricing(){
  return (
    <>
      <section className="heading-image">
  <div>
      <ImageBanner 
        imageSrc={bannerImg}
        overlayText="Pricing & Plans"
       breadcrumbs={[
    { name: 'Home', NavLink: '/' },
    { name: 'Pricing', NavLink: null }  
  ]}
      />
    </div>
</section>
{/* Pricing Section */}
    
      <PricingSection/>

      {/* Get in touch section */}
        <GetinTouchMsgform/>
</>
  );
}
