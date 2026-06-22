
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";

import ScrollToTopBtn from "@/components/layout/ScrollToTopBtn";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3 wow fadeInLeft" data-wow-duration="700ms" data-wow-delay="900ms">
                        <div className="footer-widget white">
                            <div className="footer-logo">
                                <a className="navbar-brand" target="_blank" rel="noopener noreferrer" href="">
                                    <Image
                                    className="dark:invert"
                                    src="/images/logo.png"
                                    alt="Boxer Builder"
                                    width={100}
                                    height={20}
                                    priority />
                                </a>
                            </div>
                            <p>We have heap of fun piece of equipmnt builds dow every inh your body the and From</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="900ms">
                        <div className="footer-widget white">
                            <h3 className="widget-title">Address</h3>
                            <p>98 Winn St, Woburn, MA 01801,<br/> United States</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="900ms">
                        <div className="footer-widget white">
                            <h3 className="widget-title">Phone</h3>
                            <div className="popular-tags">
                                <ul className="mb-0 list-unstyled">
                                    <li>(+44) 123 456 789</li>
                                    <li>(+44) 321 456 789</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3  wow fadeInRight" data-wow-duration="700ms" data-wow-delay="900ms">
                        <div className="footer-widget white">
                            <h3 className="widget-title">Social</h3>
                            <div className="footer-social">
                                <ul>
                                    <li><a href="#" title=""> <FaFacebookF/> </a></li>
                                    <li><a href="#" title=""><FaGooglePlusG /></a></li>
                                    <li><a href="#" title=""><FaLinkedinIn /></a></li>
                                    <li><a href="#" title=""><FaXTwitter /></a></li>
                                    <li><a href="#" title=""><FaTumblr /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Footer Top */}

        <div className="footer-bottom">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-duration="700ms" data-wow-delay="900ms">
                    <div className="col-md-12">
                        <div className="copyright text-center">
                            © 2021, All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Footer Bottom */}
       
        <ScrollToTopBtn />
    </footer>

  )
}

export default Footer