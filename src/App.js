import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from "react-router-dom"
import NavbarActions from "./NavbarActions";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import FAQSection from './FAQSection';
import Footer from './Footer';
import HomeContent from './HomeContent';
import AwarenessPrograms from './AwarenessProgram';
import Community from './Community';
import ContactUs from './ContactUs';
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    // Function to check if the viewport width is 767px or less
    const isMobile = () => window.innerWidth <= 767;

    // Split text into individual words
    const layoutText = new SplitType(".community-for-content_text", {
      types: "words",
    });

    const layoutTL = gsap.timeline();

    // Define different start and end values for mobile devices
    const startValue = isMobile() ? "top 35%" : "top center";
    const endValue = isMobile() ? "bottom 90%" : "bottom center";

    layoutTL.from(layoutText.words, {
      opacity: 0.25,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".section_communtiy-for",
        start: startValue,
        end: endValue,
        scrub: 2,
      },
    });

    gsap.utils.toArray('.section_grothx_actions .text').forEach((textElement) => {
      gsap.from(textElement, {
        y: 50, // Start 50px below
        opacity: 0, // Initially invisible
        duration: 1.2, // Slower animation duration
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
          trigger: textElement, // Trigger when each text element comes into view
          start: "top 60%", // Start when the top of the text hits 60% of the viewport
          toggleActions: "play none none none", // Play animation when entering
        },
      });
    });
  }, []);


  return (

    <Router>
      <div className="App">
        <div className="main-page-base">
          <div className="page-wrapper">
            <NavbarActions />
            <div className="navbar_backdrop" />

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/Awarenessprograms" element={<AwarenessPrograms />} />

              <Route path="/Community" element={<Community />} />

              <Route path = "/ContactUs" element={<ContactUs />} />

            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
