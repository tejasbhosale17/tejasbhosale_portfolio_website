import profileImg from "../assets/profile-img-2.png";
import ScrollFloat from "./IntroScrollReveal";
import IntroScrollReveal from "./IntroScrollReveal";

import ProjectsCarousel from "./ProjectsCarousal";
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
        <ScrollVelocity
          texts={["ABOUT"]}
          velocity={100}
          className="custom-scroll-text"
          parallaxClassName="parallax"
          scrollerClassName="scroller"
          direction="left"
        />
      </div>

      {/* <div className="intro-reveal-section">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.01}
        >
          Hi, I'm Tejas Bhosale, a passionate Java Full Stack Developer with 2
          years of experience, specializing in React, Spring Boot, and AWS. I
          have a strong foundation in Data Structures and Algorithms, and I
          actively contribute to open source. Currently, I'm preparing for my
          Master's in Computer Science at Syracuse University while working on
          innovative projects like Interview AI and my portfolio website.
        </ScrollFloat>
      </div> */}
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
      <div className="projects-section">
        <ProjectsCarousel />
      </div>
    </div>
  );
};
export default LandingPage;
