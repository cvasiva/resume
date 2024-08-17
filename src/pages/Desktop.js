import { Link, useNavigate } from "react-router-dom";
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();
  const hanldechange=()=>{
    navigate("resume")
  }
  return (
    <div className="desktop-4">
      {/* <img className="desktop-4-child" alt="" src="/group-1707479419.svg" />
      <img className="desktop-4-inner" alt="" src="/vector-7839.svg" />
      <img className="mask-group-icon" alt="" src="/mask-group.svg" /> */}
      <div className="group-div">
        <div className="group-child" />
      </div>
      <div className="desktop-4-inner1">
        <div className="group-wrapper">
          <div className="group-wrapper">
            <div className="resumeguru">
              <span className="resumeguru-txt">
                <span>resume</span>
                <span className="guru">guru</span>
              </span>
            </div>
            <img className="group-item" alt="" src="/group-1707479416.svg" />
          </div>
        </div>
      </div>
      <div className="desktop-4-item">
        <div className="backgroundbordershadowoverl">
          <img
            className="homepage-6png-icon"
            alt=""
            src="/homepage6png@2x.png"
          />
        </div>
        <Link to="/resume">
          <b className="inbox-your-resume-container" onClick={hanldechange}>
            <span className="inbox-your-resume-container1">
              <p className="inbox-your-resume">{`Inbox Your resume &`}</p>
              <p className="inbox-your-resume">
                <span>{`Get customised `}</span>
                <span className="resume-review">#Resume-Review</span>
              </p>
            </span>
          </b>
        </Link>

        <div className="desktop-4-inner3">
          <div className="rectangle-parent1">
            <div className="group-child17" />
            <b className="verified-by-professional">
              Verified by Professional Resume Makers
            </b>
            <img className="group-child18" alt="" src="/group-1707479428.svg" />
          </div>
        </div>
        <div className="group-parent3">
          <div className="image-105013-parent">
            <img
              className="image-105013-icon"
              alt=""
              src="/image-105013@2x.png"
            />
            <img
              className="image-105014-icon"
              alt=""
              src="/image-105014@2x.png"
            />
            <img
              className="image-105015-icon"
              alt=""
              src="/image-105015@2x.png"
            />
            <img
              className="image-105016-icon"
              alt=""
              src="/image-105016@2x.png"
            />
          </div>
          <div className="image-104988-parent">
            <img
              className="image-104988-icon"
              alt=""
              src="/image-104988@2x.png"
            />
            <div className="group-child9" />
            <i className="ats-score">ATS SCORE</i>
          </div>
        </div>
        <div className="group-parent4">
          <div className="image-105009-parent">
            <img
              className="image-105009-icon"
              alt=""
              src="/image-105009@2x.png"
            />
            <img
              className="image-105009-icon"
              alt=""
              src="/image-105010@2x.png"
            />
            <img
              className="image-105011-icon"
              alt=""
              src="/image-105011@2x.png"
            />
            <img
              className="image-105012-icon"
              alt=""
              src="/image-105012@2x.png"
            />
          </div>
          <div className="image-104988-group">
            <img
              className="image-104988-icon1"
              alt=""
              src="/image-1049881@2x.png"
            />
            <div className="group-child10" />
            <i className="ats-score1">ATS SCORE</i>
          </div>
          <div className="group-child11" />
          <b className="b">31</b>
          <div className="group-child12" />
        </div>
        <div className="rectangle-group">
          <div className="group-child13" />
          <div className="upload-section">
            <img className="frame-icon" alt="" src="/frame.svg" />
            <div className="click-file-to">
              Click file to this area to upload
            </div>
          </div>
          <div className="file-type-text">
            Formats accepted are .Pdf and .word
          </div>
          <div className="divider-line" />
          <div className="background1">
            <b className="update-in-whats">Update in What’s app</b>
          </div>
          <div className="group-parent5">
            <div className="group-wrapper2">
              <div className="group-wrapper2">
                <div className="rectangle-container">
                  <div className="group-child14" />
                  <div className="div">9342735728</div>
                </div>
                <div className="whats-app-number">What’s App Number</div>
              </div>
            </div>
            <div className="dropdown">
              <img className="ireland-ie-icon" alt="" src="/ireland-ie.svg" />
              <div className="us">+91</div>
            </div>
            <img className="group-child15" alt="" src="/vector-7478.svg" />
          </div>
          <img
            className="image-105018-icon"
            alt=""
            src="/image-105018@2x.png"
          />
        </div>
        <img className="group-icon2" alt="" src="/group2@2x.png" />
        <div className="desktop-4-inner2">
          <div className="resumeguru-group">
            <div className="resumeguru-group">
              <div className="resumeguru1">
                <span className="resumeguru-txt">
                  <span>resume</span>
                  <span className="guru">guru</span>
                </span>
              </div>
              <img
                className="group-child16"
                alt=""
                src="/group-17074794161.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-div">
        <b className="heading-3-container">
          <span className="inbox-your-resume-container1">
            <span>{`Get Your `}</span>
            <span className="winning-resume">Winning Resume</span>
            <span> in 24 hrs</span>
          </span>
        </b>
        <div className="our-free-ats-container">
          <span className="inbox-your-resume-container1">
            <p className="inbox-your-resume">
              Our free ATS Resume are tailored for specific job Roles and
              identifies important keywords
            </p>
            <p className="inbox-your-resume">
              and skills missing from your resume in just a click.
            </p>
          </span>
        </div>
        <div className="vector-parent">
          <img className="group-inner" alt="" src="/vector-7792.svg" />
          <div className="group-parent">
            <div className="group-parent">
              <div className="ellipse-parent">
                <div className="ellipse-div" />
                <div className="upload-your-old-container">
                  <span className="inbox-your-resume-container1">
                    <p className="inbox-your-resume">Upload</p>
                    <p className="inbox-your-resume">your old Resume</p>
                  </span>
                </div>
              </div>
              <div className="ellipse-group">
                <div className="group-child1" />
                <div className="get-resume-score">Get Resume Score</div>
              </div>
              <div className="ellipse-container">
                <div className="group-child2" />
                <div className="we-work-on-container">
                  <span className="inbox-your-resume-container1">
                    <p className="inbox-your-resume">We work</p>
                    <p className="inbox-your-resume">on your Resume</p>
                  </span>
                </div>
              </div>
              <div className="group-frame">
                <div className="ellipse-parent1">
                  <div className="group-child3" />
                  <div className="get-hr-calls">Get HR Calls</div>
                </div>
              </div>
            </div>
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="group-icon" alt="" src="/group.svg" />
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <img className="group-icon1" alt="" src="/group1.svg" />
          </div>
        </div>
        <div className="group-parent1">
          <div className="rectangle-parent">
            <div className="rectangle-parent">
              <div className="group-child4" />
              <b className="unlock-access-to-container">
                <span className="inbox-your-resume-container1">
                  <span>{`Unlock Access to Resumes that landed `}</span>
                  <span className="six-figure-salary-jobs">
                    Six-figure salary jobs
                  </span>
                </span>
              </b>
              <div className="group-child5" />
              <img
                className="image-104930-icon"
                alt=""
                src="/image-104930@2x.png"
              />
              <img
                className="image-104931-icon"
                alt=""
                src="/image-104931@2x.png"
              />
              <div className="group-wrapper1">
                <img
                  className="group-child6"
                  alt=""
                  src="/group-1707479388@2x.png"
                />
              </div>
              <img
                className="image-104929-icon"
                alt=""
                src="/image-104929@2x.png"
              />
              <img
                className="image-104923-icon"
                alt=""
                src="/image-104923@2x.png"
              />
              <img className="group-child7" alt="" src="/vector-7810.svg" />
              <b className="free">FREE*</b>
            </div>
            <img
              className="image-104949-icon"
              alt=""
              src="/image-104949@2x.png"
            />
            <img
              className="image-104950-icon"
              alt=""
              src="/image-104950@2x.png"
            />
          </div>
          <img className="group-child8" alt="" src="/group-1707479434@2x.png" />
        </div>
        <div className="background">
          <b className="get-winning-resume">Get Winning Resume✨</b>
        </div>
      </div>
      <div className="desktop-4-child1">
        <img className="image-105006-icon" alt="" src="/image-105006@2x.png" />
        <div className="home">Home</div>
        <div className="resume-templates">Resume Templates</div>
        <div className="resume-audit">Resume Audit</div>
        <div className="terms-and-conditions">Terms and Conditions</div>
        <img className="desktop-4-child2" alt="" src="/vector-7804.svg" />
        <div className="make-my-resume">
          Make My Resume is a premium service and product of Daily Design, for
          the betterment of India’s employment development. We strongly believe
          in achieving in listing our brand in the following organisations.
        </div>
        <img className="image-104942-icon" alt="" src="/image-104942@2x.png" />
        <img className="image-104943-icon" alt="" src="/image-104943@2x.png" />
        <img className="image-104944-icon" alt="" src="/image-104944@2x.png" />
        <div className="dailydesign">
          <span className="resumeguru-txt">
            <span>Daily</span>
            <b className="design">design</b>
          </span>
        </div>
        <div className="all-rights-reserved">
          ©2024 All Rights Reserved, Makemyresume.in
        </div>
      </div>
    </div>
  );
};

export default Desktop;
