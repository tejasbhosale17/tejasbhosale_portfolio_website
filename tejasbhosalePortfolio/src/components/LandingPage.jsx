import profileImg from "../assets/profile-img-2.png";
import ScrollFloat from "./IntroScrollReveal";
import IntroScrollReveal from "./IntroScrollReveal";
import Rough, { WelcomeScrollVelocity } from "./Rough";
import ScrollVelocity from "./ScrollVelocity";

import "./styles/landingPage.min.css";
import WelcomeText from "./WelcomeText";
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

      <div className="welcome-section-temp">
        <Rough
          texts={["WELCOME!"]}
          velocity={150}
          damping={30}
          stiffness={200}
          numCopies={6}
          direction="left"
          className="welcome-scroller" // Unique class for WELCOME
          parallaxClassName="parallax"
          scrollerClassName="scroller"
        />
      </div>
      <div className="small-heading-scroll">
        {/* <ScrollVelocity
          texts={["ABOUT"]}
          velocity={velocity}
          className="custom-scroll-text"
        /> */}
        <ScrollVelocity
          texts={["ABOUT"]}
          velocity={100}
          className="custom-scroll-text"
          parallaxClassName="parallax"
          scrollerClassName="scroller"
          direction="left"
        />
      </div>
      <div className="intro-reveal-section">
        {/* <IntroScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a
          disease? No! When he ate a soup made out of a poisonous mushroom? No!
          A man dies when he is forgotten!
        </IntroScrollReveal> */}
      </div>
      <div className="small-heading-scroll">
        <ScrollVelocity
          texts={["WHY ME"]}
          velocity={100}
          className="custom-scroll-text"
          parallaxClassName="parallax"
          scrollerClassName="scroller"
          direction="left"
        />
      </div>
    </div>
  );
};
export default LandingPage;
