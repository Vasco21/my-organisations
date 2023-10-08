import React from 'react';
import { Nav } from "react-bootstrap";
import Cpo1 from "../../images/Cpo1.jpg"
import { Container } from '../../Styles/global';


export default function Stories() {
  return (
    <Container>
    <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Stories 
          </h3>
          <h3 className="section-subtitle mr-auto ml-auto">
           Workshop and Events Update
          </h3>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title Pronames">Motivation <span>Workshop</span></h3>
              <h5  className="section-subtitle mr-auto ml-auto">
                Examination Approaches
              </h5> 
              <div className="about-description">
                <p>
                 On Saturday 09th September 2023 Creative Power Organisation 
                 well be having Workshop, 
                 Introducing a Organisation and welcoming New Members.
                </p> 
                <p>
                 I  am happy 
                 to invite you to join the Creative Power 
                 Organization Workshop on the abovementionedd date.
                 C.P.O is one of the safest places for all young 
                 people who want to make change and unlock the future and their goals...... 
                </p>
                <ul>
                  <ol>Grade 10</ol>
                  <ol>Grade 11</ol>
                  <ol>Grade 12</ol>
                </ul>
                <p>
                  To become what you want in your future Path is your freedom. 
                  but to unlock that future you need to work hard for it. 
                  Remember that as  young person or youth , 
                  better life  comes with creative tthinking 
                </p>
                 
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImages">
                <img src={Cpo1} alt="about company"/>
              </div>
            </div>
            <Nav.Link href="/">upcoming Events &nbsp; &rarr;</Nav.Link>
          </div>
        </div>
      </div>
    </Container>
    )
}
