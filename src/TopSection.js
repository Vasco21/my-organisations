import React from 'react';
import { Section } from './Styles/global';

const TopBar = () => {
  return (
    <Section className="header">
    <div className="gradient__bg">
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+27 (0) 813 190 025</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>vascoeti123@gmail.com</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-meddia -flex align-item-center'>
              <a href='https://web.facebook.com/eddie.vasco/' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='https://twitter.com/Qvary34' className='text-light'>
                <i className='fab fa-twitter mr-4' />
              </a>
              <a href='https://www.instagram.com/vascoeti123/' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
              <a href='https://github.com/Vasco21' className='text-light'>
                <i className='fab fa-github' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Section>
  );
};
export default TopBar;

