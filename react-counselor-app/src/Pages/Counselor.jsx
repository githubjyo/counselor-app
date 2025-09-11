import React from 'react';
import ImageBanner from '../Components/ImageBanner/Imagebanner';
import bannerImg from "../assets/images/head_img_5.jpg";
import { NavLink } from 'react-router-dom';
import TeamSection from '../Components/TeamSection/Teamsection';
import PricingSection from '../Components/PricingPlan/PricingPlan';
export default function Counselor(){
  return (
    <>
      <section className="heading-image">
  <div>
      <ImageBanner 
        imageSrc={bannerImg}
        overlayText="Qualified Counselor"
       breadcrumbs={[
    { name: 'Home', NavLink: '/' },
    { name: 'Counselor', NavLink: null }  
  ]}
      />
    </div>
</section>

{/* Team section */}
<TeamSection/>

{/* Pricing Section */}
    
      <PricingSection/>
</>
  );
}
