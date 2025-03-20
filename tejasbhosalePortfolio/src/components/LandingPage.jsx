import profileImg from "../assets/profile-img-1.png";
import WelcomeText from "./Rough";
import ScrollVelocity from "./ScrollVelocity";

import "./styles/landingPage.min.css";
const LandingPage = () => {
  const velocity = 100;
  return (
    <div className="landing-main">
      <div className="hero-section">
        <div className="container tag-line">
          <div className="row">
            <div className="col-6 heading-col">
              <h1 className="heading">
                The only
                <br />
                Tech Talent
                <br />
                You Need
              </h1>
            </div>
            <div className="open-work-part">
              <div className="div-block-open">
                <div data-theme="invert" className="div-block-210">
                  <span className="text-block">Open to work</span>
                </div>
              </div>
            </div>
            <div className="col-6 profile-img-section">
              {/* <div className="container "> */}
              <div className="profile-div">
                <img src={profileImg} alt="Profilr Image here" />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="welcome-scroll">
        <ScrollVelocity
          texts={["WELCOME!"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div> */}
      <div className="welcome-section-temp">
        <WelcomeText text="WELCOME!" speed={8} />
      </div>
      <div className="about-section">
        <WelcomeText text="ABOUT" speed={8} />
      </div>
    </div>
  );
};
export default LandingPage;
