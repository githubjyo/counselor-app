import React from 'react';
import ImageBanner from '../Components/ImageBanner/Imagebanner';
import bannerImg from "../assets/images/head_img_5.jpg";
import { NavLink } from 'react-router-dom';
import blogData from "../Components/Blogsection/BlogData";
import BlogCardSection from "../Components/Blogsection/BlogSection";
export default function Blogs(){
  return (
    <>
     <section className="heading-image">
  <div>
      <ImageBanner 
        imageSrc={bannerImg}
        overlayText="Our Blog"
       breadcrumbs={[
    { name: 'Home', NavLink: '/' },
    { name: 'Blog', NavLink: null }  
  ]}
      />
    </div>
</section>

<BlogCardSection blogs={blogData}/>
</>
  );
}
