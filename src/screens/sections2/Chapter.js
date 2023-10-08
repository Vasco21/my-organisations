import React from 'react';
import chapter from "../../images/chapter.jpg"
import { Section } from '../../Styles/global';

export default function Chapter() {
  return (
      <Section>

        <div className="home">
          <div
            className="home-content p-5"
            style={{ backgroundImage: `url(${chapter})` }}
          >
            <div className="intro container text-center text-light">
              <h6 className="title gradient__bg">
                Creative Power Organisation Chapters
              </h6>
              <h6 className="sub-title mb-4">
                Bring the revolution to your own backyard.
              </h6>
            </div>
          </div>
        </div>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <strong>Chapters</strong>
          </h3>
          <h3 className='section'>
            What are CPO Chapters?
          </h3>
          <p className='section-subtitle mr-auto ml-auto'>
            Creative Power Organisation Chapters are groups of young people working Positive mindset in their communities,
            and Start chapters at high schools, or anywhere else that youth gather.
          </p>
          <p className='section-subtitle mr-auto ml-auto'>
            With Creative Power Organisation Chapters in every Sections across Botshabelo, 
            each chapter is part of a powerful, active and inclusive movement. 
            With Creative Power Organisation Chapters spanning across Botshabelo, 
            you can find the Chapter closest to you or start your own Creative Power Organisation Chapters now!
          </p>
        </div>
        <h3 className='section-title'>
            Find Chapters
        </h3>
        <div>
          <iframe
            title='mapMarker'
            src='https://maps.google.com/maps?q=Botshabelo&t=&z=13&ie=UTF8&iwloc=&output=embed'
            width='100%'
            height='450'
            frameBorder='0'
            style={{ border: 0, marginBottom: '-7px' }}
            allowFullScreen
          />
        </div>
      </Section>
  )
}
