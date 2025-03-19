import profileImg from "../assets/profile-img-1.png";

import "./styles/landingPage.min.css";
const LandingPage = () => {
  return (
    <div className="landing-main">
      <div className="hero-section" style={{ borderBottom: "1px solid grey" }}>
        <div className="container tag-line">
          <div className="row">
            <div className="col-6">
              <h1 class="heading">
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
    </div>
  );
};
export default LandingPage;
