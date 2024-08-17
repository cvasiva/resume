import React, { useState } from "react";
import "./Resume.css";
import { Link, useNavigate } from "react-router-dom";
import cardbgresume from "../Images/cardbgresume.png";
import logosresume from "../Images/logosresume.png";
import logoguru from "../Images/logoguru.png";
const Resume = () => {
  const navigate = useNavigate();
  const hanldechange = () => {
    navigate("resume");
  };
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWhatsAppChange = (e) => {
    setWhatsAppNumber(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validFileTypes = ["application/pdf", "application/msword"];

    if (selectedFile && validFileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setErrorMessage("");
    } else {
      setFile(null);
      setErrorMessage("Please upload a valid .pdf or .docx file.");
    }
  };

  const handleSubmit = async () => {
    const phoneRegex = /^[0-9]{10,14}$/;

    if (!phoneRegex.test(whatsAppNumber)) {
      setErrorMessage("Please enter a valid WhatsApp number.");
      return;
    }

    if (!file) {
      setErrorMessage("Please upload a resume file.");
      return;
    }

    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("whatsAppNumber", whatsAppNumber);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log(
          "File sent to email and WhatsApp number sent successfully."
        );
      } else {
        setErrorMessage(
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
    }
  };
  const handlewindow = () => {
    const paymentUrl = `https://www.resume-guru.in/`;
    window.location.href = paymentUrl;
  };
  return (
    <div style={{ height: "100%" }}>
      <div className="desktop-4">
        <div className="desktop-4-inner1">
          <div className="group-wrapper" onClick={handlewindow} style={{cursor:'pointer'}}>
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
      </div>
      <div className="desktop-4-item">
        <div className="dflxfont">
          <div className="inbox-your-resume">
            <b>Inbox Your resume &</b>
          </div>
          <div className="inbox-your-resume">
            <b>
              Get customised{" "}
              <span className="resume-review">#Resume-Review</span>
            </b>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5 mx-2">
          <div className="group-child17 py-1 d-flex gap-3">
            <img className="group-child18" alt="" src="/group-1707479428.svg" />
            <b className="verified-by-professional">
              Verified by Professional Resume Makers
            </b>
          </div>
        </div>
        <div className="cardaroundflx">
          <img className="desktop-4-inner" alt="" src="/vector-7839.svg" />
          <div className="group-parent4">
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
          </div>
          <div className="rectangle-group">
            <div className="group-child13">
              <div className="upload-section">
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <div className="d-flex justify-content-center">
                  <label
                    htmlFor="fileUpload"
                    className="text-center pointer"
                    style={{ cursor: "pointer" }}
                  >
                    <img className="frame-icon" alt="" src="/frame.svg" />
                    <div className="click-file-to">
                      Click file to this area to upload
                    </div>
                  </label>
                </div>
              </div>

              {file ? (
                <div className="file-type-text pt-3">
                  <strong>Uploaded File:</strong> {file.name}
                </div>
              ) : (
                <div className="file-type-text pt-3">
                  Formats accepted are .pdf and .docx
                </div>
              )}

              <div className="divider-line" />
              <div className="whatsflx">
                <div className="adflx">
                  <label className="whatsfont">What’s App Number</label>
                  <input
                    className="inputstyle"
                    value={whatsAppNumber}
                    onChange={handleWhatsAppChange}
                  />
                </div>
                <div className="adflx">
                  <label className="whatsfont" style={{ visibility: "hidden" }}>
                    a
                  </label>
                  <button
                    className="background1 text-nowrap py-2 px-4"
                    onClick={handleSubmit}
                  >
                    <b>Update in What’s app</b>
                  </button>
                </div>
              </div>
              {errorMessage && (
                <div style={{ color: "red" }} className="pt-2">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="image-104988-parent">
              <img
                className="image-104988-icon"
                alt=""
                src="/image-104988@2x.png"
              />
              <div className="group-child9" />
              <i className="ats-score">ATS SCORE</i>
            </div>
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
          </div>
        </div>
      </div>
      <div className="bgget">
        <div className="flxfont">
          <div className="getfont">
            <b>
              Get Your <span className="resume-review">Winning Resume</span> in
              24 hrs
            </b>
          </div>
          <p className="tailored">
            Our free ATS Resume are tailored for specific job Roles and
            identifies important keywords <br />
            and skills missing from your resume in just a click.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="vector-parent">
            <img className="group-inner" alt="" src="/vector-7792.svg" />
            <div className="group-parent">
              <div className="group-parent">
                <div className="ellipse-parent">
                  <div className="ellipse-div" />
                  <div className="upload-your-old-container">
                    <span className="inbox-your-resume-container1">
                      <p className="get-resume-score">Upload your old Resume</p>
                    </span>
                  </div>
                </div>
                <div className="ellipse-group">
                  <div className="group-child1" />
                  <p className="get-resume-score">Get Resume Score</p>
                </div>
                <div className="ellipse-container">
                  <div className="group-child2" />
                  <div className="we-work-on-container">
                    <span className="inbox-your-resume-container1">
                      <p className="get-resume-score">We work on your Resume</p>
                    </span>
                  </div>
                </div>
                <div className="group-frame">
                  <div className="ellipse-parent1">
                    <div className="group-child3" />
                    <p className="get-resume-score">Get HR Calls</p>
                  </div>
                </div>
              </div>
              <img className="vector-icon" alt="" src="/vector.svg" />
              <img className="group-icon" alt="" src="/group.svg" />
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <img className="group-icon1" alt="" src="/group1.svg" />
            </div>
          </div>
          <img
            src={cardbgresume}
            alt="cardbgresume"
            className="cardbgresume"
            style={{ width: "95%" }}
          />
        </div>
        <div className="d-flex justify-content-center">
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
            <img
              className="group-child8"
              alt=""
              src="/group-1707479434@2x.png"
            />
          </div>
          <img
            src={logosresume}
            alt="logosresume"
            className="cardbgresume"
            style={{ width: "95%" }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="background px-4 my-5">
            <b className="get-winning-resume">Get Winning Resume✨</b>
          </button>
        </div>
      </div>
      <div className="unlockbg">
        <div className="footerflx">
          <div className="logoguru">
            <img src={logoguru} alt="logoguru" style={{ width: "100%" }} />
          </div>
          <div>
            <ul className="ullist">
              <li>Home</li>
              <li>Resume Templates</li>
              <li>Resume Audit</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <img
              className="image-105006-icon"
              alt=""
              src="/image-105006@2x.png"
            />
          </div>
        </div>
        <img className="desktop-4-child2" alt="" src="/vector-7804.svg" />
        <div className="footerflx mt-3 widthf">
          <div className="dailydesign">
            <span className="resumeguru-txt">
              <span>Daily</span>
              <b className="design">design</b>
            </span>
          </div>
          <div className="make-my-resume">
            Make My Resume is a premium service and product of Daily Design, for
            the betterment of India’s employment development. We strongly
            believe in achieving in listing our brand in the following
            organisations.
          </div>
          <div className="d-flex gap-3">
            <img
              className="image-104942-icon"
              alt=""
              src="/image-104942@2x.png"
            />
            <img
              className="image-104943-icon"
              alt=""
              src="/image-104943@2x.png"
            />
            <img
              className="image-104944-icon"
              alt=""
              src="/image-104944@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="all-rights-reserved">
        ©2024 All Rights Reserved, Makemyresume.in
      </div>
    </div>
  );
};

export default Resume;
