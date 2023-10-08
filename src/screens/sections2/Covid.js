import React from "react";
import CovidP from "../../images/Covid-19.png";
import { Button } from "../../Styles/global";
import { Container } from "../../Styles/global";

export default function Covid() {
  return (
    <div>
      <Container>
        <div className="container pt-2 pb-5">
          <div className="section-header pt-5 pb-5 text-center">
            <h3 className="section-title">
              <span>COVID-19 </span>Response
            </h3>
            <p className="section-subtitle mr-auto ml-auto">
              Now is the time for education, innovation, and community.
            </p>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <h3 className="about-title Pronames">Info about Covid-19</h3>
                <h5 className="section-subtitle mr-auto ml-auto">
                  We're working to ensure that every Member of Creative Power
                  Organisation is Safe
                </h5>
                <div className="about-description">
                  <p>
                    COVID-19 has - and will continue to have - an unprecedented
                    impact on Creative Power Organisation. Support systems that
                    were already overtaxed are being pushed beyond their limit.
                    Young people have restricted access to community supports.
                    Some are stuck in homes that are unsafe, while others don’t
                    have a space to call home. Many are navigating unemployment
                    and the financial fallout of the pandemic. We're working
                    around the clock to make sure young people have the
                    education, resources, and community they need right now in
                    order to look out for their own mental health and that of
                    their peers.
                  </p>
                  <p>
                    Thank you to our generous partners who continue to support
                    our COVID-19 response efforts.
                  </p>
                  <Button
                    href="https://ourworldindata.org/covid-vaccinations?country=OWID_WRL"
                    style={{ textDecoration: "none" }}
                  >
                    Learn More &nbsp; &rarr;
                  </Button>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 mb-3">
                <div className="aboutImages">
                  <img src={CovidP} alt="Covid-19" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
