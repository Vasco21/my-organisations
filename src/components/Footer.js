import React from "react";
import { Section } from "../pages/global"
import Link from "../pages/Links"
 
const Footer = () => {
  return (
    <Section>
    <footer className='footer'>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Creative Power Organisation training and empowering <br/>
                  young leaders to revolutionize dreams and goals
                </small>
              </p>
              <button className='btn btn-sm btn-primary rounded-0'>
                Learn more
              </button>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>About</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='blog'>Blog</Link>
                </li>
                <li>
                  <Link target='contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Latest News</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Examination approaches 
                </small>
              </p>
              <p>
                <small className='text-muted'>
                  9th September 2023

                  12h00pm -13h00pm
                </small>
              </p>
              <p>
                <small className='text-muted'></small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Address : 2670 Section M, Botshabelo, Bloemfontein</small>
              </p>
              <p className='text-muted'>
                <small>Phone : +27 (0) 63 317 9828</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : creativepowerorganization123@gmail.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='https://web.facebook.com/eddie.vasco/' className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='https://twitter.com/Qvary34' className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='https://www.instagram.com/vascoeti123/' className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
                <a href='https://www.youtube.com/channel/UCQmetPui686m6OoX_Eb2D8Q' className='text-light'>
                  <i className='fab fa-youtube' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved. Design By Vasco Eti</small>
      </div>
    </footer>
    </Section>
  );
};

export default Footer;