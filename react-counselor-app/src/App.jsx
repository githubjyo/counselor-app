
import React, { lazy } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages for better performance
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Counselor = lazy(() => import('./Pages/Counselor'));
const Services = lazy(() => import('./Pages/Services'));
const Pricing = lazy(() => import('./Pages/Pricing'));
const Blogs = lazy(() => import('./Pages/Blogs'));
const Contact = lazy(() => import('./Pages/Contact'));

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/counselor" element={<Counselor />} />
  <Route path="/services" element={<Services />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/blogs" element={<Blogs />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      </main>
      <Footer />
    </>
  );
}
