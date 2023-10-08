import React from "react";
import motive from "../../images/motive.jpg"
import { Section } from "../../Styles/global";
import firstSp from "../../images/firstSp.jpg";
import secondSp from "../../images/secondSp.jpg";
import thirdSp from "../../images/thirdSp.jpg";

export default function Talks() {
  return (
    <div>
      <Section>
        <div className="homes">
          <div
            className="home-contents p-5"
            style={{ backgroundImage: `url(${motive})`}}
          >
            <div className="intro container text-center text-light">
            </div>
          </div>
        </div>
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <strong>Creative Power Organisation Talks</strong>
          </h3>
            <h5>What are CPO Talks?</h5>
          <h2>
            Creative Power Organisation Talks presentations delivered <strong>by young people to young people.</strong>
          </h2>
          <h5>
            Trained and certified youth speakers use the power of 
            personal stories and  education to inspire, engage, 
            educate, and equip young people to look out for themselves and their peers.
            Acknowledge  resistance and difficult feelings with motivation.
            Surely there are ways to find motivation, and 
            critically stay motivated? Thankfully, there are.
          </h5>
        </div>
        <h3 className="section-title"><strong>Find </strong>Talks</h3>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <div className='card-body'>
                  <h5><strong>Which Talk</strong> is right for me? </h5>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <div className='card-body'>
                  <h5><strong>Book</strong> Creative Power Organisation</h5>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <div className='card-body'>
                  <h5><strong>Become </strong> a Speaker</h5>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="section-title"><strong>Speaker</strong>  Profile</h3>
        <div className='className="section-header pt-5 pb-5 text-center gradient__bk'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='aboutImages'>
                <img src={firstSp} alt=""/>
                <div className='card-body'>
                  <h5 className='card-title'>Vasco Eddie</h5>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='aboutImages'>
                <img src={secondSp} alt=""/>
                <div className='card-body'>
                  <h5 className='card-title'>Nkosi Makhanda</h5>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='aboutImages'>
                <img src={thirdSp} alt=""/>
                <div className='card-body'>
                  <h5 className='card-title'>Nthabeleng Mvuka</h5>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
