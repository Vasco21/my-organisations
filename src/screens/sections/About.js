import React from "react";
import aboutImage from "../../images/about.jpg";
import { Section, Button } from "../../Styles/global";
import { Container } from "./AboutStyles";
import { Link } from "react-router-dom";


const About = () => (
  <Container>
    <Section id="about" accent>
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Company
          </h3>
          <p className="section-subtitle mr-auto ml-auto">
            <span>Voices of Youth</span> Creating better path for our youth, and
            bring back young people to light, A New Generation it is our leaders to a
            better future and success.
          </p>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">About Us</h3>
              <div className="about-description">
                <p>
                  The Creative Power Organisation Guide has been developed by
                  Vasco Eti and his team, with different lived
                  experiences, and a passion for change. It was originally
                  created through an extensive consultative process, which
                  brought together the voices of young people from various parts
                  of Botshabelo...
                </p>
                <p>
                  The Creative Power Organisation Guide is a youth-focused
                  resource that aims to support young people to get back to life
                  and focus on the goal and dreams of their journeys.
                </p>
                <p>
                  The Creative Power Organisation Guide was Created 2021 by Vasco Eti
                  young person who saw the heavy path of the young people in our
                  community, and our will is to bring back young people to light
                  and give to our community.
                </p>
                <Link to="/page">
                  <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Container>
);

export default About;
