import React from "react";
import { Section, Button } from "../../Styles/global";
import bgImage from "../../images/home_bg.jpg";
import { Link } from "react-router-dom";
import MapMarker from "./MapMarker";
import About from "../sections/About";
import Mission from "./Mission";
import Blog from './Blog';
import Faq from './Faq';
import Facts from './Facts';
import "../../Styles/styles"

const Header = () => {
  return (
    <>
      <Section id="home" accent>
        <div className="centerB">
        <Link to="/members">
          <Button style={{ marginLeft: 50, marginTop: 6 }} size="lg">
            <strong>See All Members</strong>
          </Button>
        </Link>
          <Button 
            style={{ marginLeft: 50, marginTop: 6, }} 
            size="lg"><strong><a className="atag" href="https://comment-api.netlify.app/">Student Room
            </a></strong>
          </Button>
        </div>
  
          <div className="homes">
            <div
              className="home-contents p-4"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="intros container text-center text-light">
                <h5 className="titles gradient__bg">
                  <span>YOUTH!!</span> GREATER POWER OF FUTURE!!!
                </h5>
                <h6 className="sub-titles mb-4">
                  You will shine and you will achieve whatever you want if you
                  keep working hard and dreaming more. Don't let anybody destroy
                  your peace of mind. You are on the right path to pursue your
                  dreams. You have to be ready to do whatever you are interested
                  in. You are the hero of your family, society, community and your
                  country.
                </h6>
                <div>
                </div>
              </div>
            </div>
          </div>
      <About />
      <Blog />
      <Mission />
      <Faq />
      {/* <Followers /> */}
      <Facts />
      <MapMarker /> 
      </Section>
    </>
  );
};
export default Header;
