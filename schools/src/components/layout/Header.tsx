"use client";
import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
    const scrollHandler = () => {
      setSticky(window.scrollY > 20);
    };
        window.addEventListener("scroll", scrollHandler);

        return () => {
        window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

  return (
     <header className={sticky ? "header sticky" : "header"}>
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="top-contact">
                            <ul>
                                <li><a href="#"><i className="fas fa-envelope mr-1"></i> example@gmail.com</a></li>
                                <li><a href="#"><i className="fas fa-phone-alt mr-1"></i> (016) 269-039-999</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="top-social">
                            <ul>
                                <li><a href="#" title=""> <FaFacebookF/> </a></li>
                                <li><a href="#" title=""><FaGooglePlusG /></a></li>
                                <li><a href="#" title=""><FaLinkedinIn /></a></li>
                                <li><a href="#" title=""><FaDribbble /></a></li>
                                <li><a href="#" title=""><FaXTwitter /></a></li>
                                <li><a href="#" title=""><FaTumblr /></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="navbar-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 mob-p-0">
                        <nav className="main-navbar p-0">
                            <div className="logo">
                                <a className="navbar-brand" rel="noopener noreferrer" href="/">
                                    <Image
                                    className="dark:invert"
                                    src="/images/logo.png"
                                    alt="Boxer Builder"
                                    width={160}
                                    height={35}
                                    priority />
                                </a>
                            </div>
                            <div className="navigation">
                                <ul id="onepage-nav" className="mainnav">
                                    <li><a className="scroll active" href="#home">Home</a></li>
                                    <li><a className="scroll" href="#about">About</a></li>
                                    <li><a className="scroll" href="#trainer">Trainer</a></li>
                                    <li><a className="scroll" href="#schedules">schedules</a></li>
                                    <li><a className="scroll" href="#pricing">Pricing</a></li>
                                    <li><a className="scroll" href="#gallery_section">Gallery</a></li>
                                    <li><a className="scroll" href="#blog">Blog <i className="fas fa-chevron-down fa-xs"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blogs List</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-single.html">Blogs Single</a></li>
                                          </ul>
                                    </li>
                                    <li><a className="scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
 
    </header>
  )
}

export default Header