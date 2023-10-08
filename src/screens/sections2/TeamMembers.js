import React from 'react';
import Mvuka from "../../images/Mvuka.jpg"
import { Container, Button } from '../../Styles/global';

export default function TeamMembers() {
  return(
    <Container>
    <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Team
          </h3>
          <h3 className="section-subtitle mr-auto ml-auto">
            Our strength lies in our strong team
          </h3>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImages">
                <img src={Mvuka} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title Pronames" >Nthabeleng <span>Mvuka</span></h3>
              <h5  className="section-subtitle mr-auto ml-auto">
                HR administrator
              </h5>
              <div className="about-description">
                <p>
                Nthabeleng Mvuka Creative Power Organisation as HR administrator, 
                Throughout her career she has managed, streamlined, and organized 
                processes developed training materials, and facilitated 
                customer service, sales, and behavioral style training.
               <br/>
                Mvuka has a heart for youth and mentorship and has had the opportunity to participate with 
                and lead several mission.
                During these experiences, she discovered her ability to connect with 
                and empower youth.Being part of the Creative Power Organisation allows Her
                o use her professional knowledge while contributing to a mission she’s passionate about.
                </p>
                <Button exact to={""} style={{ textDecoration: 'none' }}>
                  Learn More &nbsp; &rarr;
                </Button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
