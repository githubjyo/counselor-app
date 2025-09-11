import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogSection.css";


const BlogCardSection = ({ blogs, limit }) => {
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs; // show limited or all

  return (
    <section className="blog-section py-5 text-center">
      <div className="container">
        <h6 className="text-success">BLOG</h6>
        <h2 className="mb-5">Recent Blog</h2>
        <div className="row">
          {displayedBlogs.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card blog-card shadow-sm border-0">
                <div className="position-relative">
                  <img src={blog.img} className="card-img-top" alt={blog.title} />
                  <div className="date-badge text-center ">
                    <h5>{blog.date}</h5>
                    <small>{blog.month}</small>
                    <p className="mb-0">{blog.year}</p>
                  </div>
                </div>
                <div className="card-body mt-4">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">{blog.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCardSection;
