import React from 'react';
import { Nav } from "react-bootstrap";
import aboutImage from "../../images/Vasco.jpg";
import { Container, Button } from '../../Styles/global';

const AboutTeam = () =>{
  return(
    <Container>
    <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Founder 
          </h3>
          <h3 className="section-subtitle mr-auto ml-auto">
            Our strength lies in our strong team
          </h3>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title Pronames">Vasco Eddie <span>Eti</span></h3>
              <h5  className="section-subtitle mr-auto ml-auto">
                President & Project Director
              </h5> 
              <div className="about-description">
                <p>
                 Vasco is an Full Stack Software developer, communications and trusted adviser experience. 
                 Throughout his career, he has developed and executed brand and product strategies across a wide range of industries, 
                 sectors and markets.
                 the role as Project Director, Vasco is focused on creating and delivering unique solutions and experiences that 
                 meet the needs of our Youth and partners, and advance Creative Power Organisation mission.
                </p> 
                <p>
                  Making a difference by empowering young people to thrive in life and career is he long-standing passion.
                  he led all brand and product marketing efforts, empowering Youth, students, districts and schools by providing access to 
                  transformative learning experiences and creating meaningful impact and connections with corporate and future goals and dreams.
                </p>
                <p>
                  Vasco also brings a multicultural mindset and experience working with Creative Power Developer the compnay that he is running.
                  to empowering young people and the Clients for Web Developer.
                </p>
                <Button exact to={""} style={{ textDecoration: 'none' }}>
                  Learn More &nbsp; &rarr;
                </Button>   
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImages">
                <img src={aboutImage} alt="about company"/>
              </div>
            </div>
            <Nav.Link href="/teamMembers">Our Team Members here &nbsp; &rarr;</Nav.Link>
          </div>
        </div>
      </div>
    </Container>

  )
}

export default AboutTeam;
