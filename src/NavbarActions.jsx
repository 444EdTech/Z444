import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

import logo from './images/2.png';
import cap from './images/CAP.webp';
import connectImage from './images/connectlogo.jpg';

const NavbarActions = () => {
  const navbarRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const navbarComponent = navbarRef.current;
    const toggles = document.querySelectorAll(".navbar5_menu-dropdown");
    const links = document.querySelectorAll(".navbar5_link");
    const menuIcon = menuIconRef.current;

    let currentOpenDropdown = null;

    function closeDropdown(toggle) {
      const dropdownList = toggle.querySelector(
        ".navbar5_dropdown-toggle"
      ).nextElementSibling;
      gsap.set(dropdownList, { maxHeight: "0px" });
    }

    const handleMouseEnterToggle = (event) => {
      const toggle = event.currentTarget;
      const dropdownList = toggle.querySelector(".navbar5_dropdown-toggle")
        .nextElementSibling;

      navbarComponent.classList.add("active-navbar");
      dropdownList.style.display = "block";
      gsap.to(dropdownList, { maxHeight: dropdownList.scrollHeight + "px" });
      currentOpenDropdown = toggle;
    };

    const handleMouseLeaveToggle = (event) => {
      const toggle = event.currentTarget;
      navbarComponent.classList.remove("active-navbar");
      closeDropdown(toggle);
      currentOpenDropdown = null;
    };

    const handleMouseEnterLink = () => {
      navbarComponent.classList.add("active-navbar");
    };

    const handleMouseLeaveLink = () => {
      navbarComponent.classList.remove("active-navbar");
    };

    const handleMenuClick = () => {
      navbarComponent.classList.toggle("active-navbar");
      toggles.forEach(closeDropdown);
      currentOpenDropdown = null;
    };

    // Add event listeners
    toggles.forEach((toggle) => {
      toggle.addEventListener("mouseenter", handleMouseEnterToggle);
      toggle.addEventListener("mouseleave", handleMouseLeaveToggle);
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnterLink);
      link.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    menuIcon.addEventListener("click", handleMenuClick);

    // Cleanup function to remove event listeners
    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener("mouseenter", handleMouseEnterToggle);
        toggle.removeEventListener("mouseleave", handleMouseLeaveToggle);
      });

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnterLink);
        link.removeEventListener("mouseleave", handleMouseLeaveLink);
      });

      menuIcon.removeEventListener("click", handleMenuClick);
    };
  }, []);

  return (
    <div
      data-w-id="e739d54c-2aa9-09dc-088f-eae000ca226c"
      data-animation="default"
      data-collapse="medium"
      data-duration={0}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      ref={navbarRef}
      className="navbar5_component w-nav"
    >
      <div className="upper-nav">
        <div className="padding-global">
          <div className="navbar5_container">
            <a
              href="/"
              aria-current="page"
              className="navbar5_logo-link w-nav-brand w--current"
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "88%", height: "auto" }}
              />
            </a>
            <nav role="navigation" className="navbar5_menu w-nav-menu">
              <div className="navbar5_menu-left">
                <a
                  href="/"
                  aria-current="page"
                  className="navbar5_link"
                >Home
                </a>
                <div className="navbar5_menu-dropdown">
                  <div className="navbar5_dropdown-toggle">
                    <div>Community</div>
                  </div>
                  <div className="navbar5_dropdown-list">
                    <div className="navbar5_container">
                      <div className="navbar5_dropdown-content">
                        <div className="navbar5_dropdown-content-left">
                          <div className="navbar5_dropdown-column">
                            <div className="navbar5_dropdown-link-list">
                              <Link
                                to="/Community"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Overview</div>
                              </Link>
                              <Link
                                to="/Community#all-templates"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Developers Community</div>
                              </Link>
                              <Link
                                to="/Community#all-templates"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Job Alerts</div>
                              </Link>
                              <Link
                                to="/Community#all-templates"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Coding Clubs</div>
                              </Link>
                              <Link
                                to="#founder-circle"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Founder Circle</div>
                              </Link>
                            </div>
                          </div>
                          <div className="navbar5_dropdown-column mobile-hide">
                            <div className="navbar5_dropdown-link-list full-center">
                              <a
                                href="courses.html#all-templates"
                                target="_blank"
                                className="launch-card w-inline-block"
                              >
                                <div className="launch-card_tag-2">
                                  New Launch ✨
                                </div>
                                <img
                                  src={cap}
                                  alt="Logo"
                                  className="image-container"
                                  style={{ width: "72%", height: "auto" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://z444pro.vercel.app/guides"
                  target="_blank"
                  className="navbar5_link"
                >
                  Connect
                </a>
                <a href="/Awarenessprograms" target="_blank" className="navbar5_link">
                  Awareness Programs
                </a>
                <a
                  href="/ContactUs"
                  target="_blank"
                  className="navbar5_link"
                >
                  Contact Us
                </a>

                <div className="navbar5_menu-dropdown">
                  <div className="navbar5_dropdown-toggle">
                    <div>Z444++</div>
                  </div>
                  <div className="navbar5_dropdown-list">
                    <div className="navbar5_container">
                      <div className="navbar5_dropdown-content">
                        <div className="navbar5_dropdown-content-left">
                          <div className="navbar5_dropdown-column">
                            <div className="navbar5_dropdown-link-list">
                              <a
                                href="https://z444pro.vercel.app/"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Login/Register</div>
                              </a>
                              <a
                                href="https://z444pro.vercel.app/job-openings"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Job Alerts</div>
                              </a>
                              <a
                                href="https://z444pro.vercel.app/guides"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Connect with Guides</div>
                              </a>
                              <a
                                href="https://z444pro.vercel.app/groups"
                                target="_blank"
                                className="navbar5_dropdown-link w-inline-block"
                              >
                                <div>Groups</div>
                              </a>
                            </div>
                          </div>
                          <div className="navbar5_dropdown-column mobile-hide">
                            <div className="navbar5_dropdown-link-list full-center">
                              <a
                                href="courses.html#all-templates"
                                target="_blank"
                                className="launch-card w-inline-block"
                              >
                                <div className="launch-card_tag-2">
                                  New Launch ✨
                                </div>
                                <img
                                  src={connectImage}
                                  alt="Logo"
                                  style={{ width: "auto", height: "auto" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="navbar5_menu-right">
                <a
                  href="https://growthx.cc/apply"
                  target="_blank"
                  className="growthx-button is-nav w-button"
                >
                  Z444++
                </a>
              </div> */}
            </nav>
            {/* <div className="navbar5_menu-right is-mobile-nav">
              <a
                href="https://growthx.cc/apply"
                target="_blank"
                className="growthx-button is-nav w-button"
              >
                Become a member
              </a>
            </div> */}
            <div className="navbar5_menu-button w-nav-button">
              <div ref={menuIconRef} className="menu-icon1">
                <div className="menu-icon1_line-top" />
                <div className="menu-icon1_line-middle">
                  <div className="menu-icon1_line-middle-inner" />
                </div>
                <div className="menu-icon1_line-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarActions;
