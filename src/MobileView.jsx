import React from "react";
import { useState } from "react";
import logo from "./assets/logo.webp";
import constructionAnim from "./assets/constructins.json";
import constructionOngoing from "./assets/construction_ongoing.json";
import constructionAbout from "./assets/construction_about.json";
import handshake from "./assets/handshake.json";
import "./App.css";
import Lottie from "lottie-react";
import {
  BsArrowRight,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import { HiMenuAlt1 } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import bridge from "./assets/bridge.svg";
import customerCare from "./assets/customer_service.svg";
import saving from "./assets/saving.svg";
import tracking from "./assets/tracking.svg";

import carpernter from "./assets/carpernter.svg";
import electrician from "./assets/electrician.svg";
import marble from "./assets/marble.svg";
import mason from "./assets/mason.svg";
import painter from "./assets/painter.svg";
import plumber from "./assets/plumber.svg";

import data from "./assets/data.svg";
import cost_effective from "./assets/cost_effective.svg";
import information from "./assets/information.svg";

import "./styles/mobile_view.css";

export default function MobileView() {
  const [ShowNav, setShowNav] = useState(false);
  const [Input, setInput] = useState("");
  const [getStartedBtnEnabled, setgetStartedBtnEnabled] = useState(false);
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setgetStartedBtnEnabled(true);
    } else {
      setgetStartedBtnEnabled(false);
    }
  }
  function NavList(params) {
    return (
      <div className="mobile_nav" style={{ top: 60 }}>
        <div
          className="nav_item"
          onClick={() => {
            setShowNav(!ShowNav);
          }}
        >
          {" "}
          <a className="nav_text" href="#home_mobile" target="_self">
            Home
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
          }}
        >
          <a href="#about_mobile" target="_self">
            About
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
          }}
        >
          <a href="#services_mobile" target="_self">
            Services
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
          }}
        >
          <a href="#mission_mobile" target="_self">
            Mission
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
          }}
        >
          <a href="#resources_mobile" target="_self">
            Resources
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav
        style={{
          width: "100%",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: "0.8em",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          position: "fixed",
          backgroundColor: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(5px)",
          zIndex: "3",
        }}
      >
        <div>
          <img
            style={{
              height: "40px",
            }}
            src={logo}
            alt="inna"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
          }}
          onClick={() => {
            setShowNav(!ShowNav);
          }}
        >
          <HiMenuAlt1 size={25} />
        </div>
      </nav>
      <section
        id="home_mobile"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10em 2em 2em 2em ",
            paddingTop: "5em",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "2em",
              textAlign: "start",
              lineHeight: "1.2em",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            We're Help To
            <br />
            Bulid Your Dream
            <br />
            Professionaly
          </div>
          <p
            style={{
              textAlign: "start",
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.7em",
              marginRight: "50px",
              marginTop: "20px",
            }}
          >
            {" "}
            We Always Prioritize The Maximum Possible Result with Modern
            Mathodes And The Latest Tachnology.
          </p>
          <div
            style={{
              margin: "20px 0",
              padding: "5px 5px",
              width: "100%",
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: "30px",
              textAlign: "start",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              placeholder="enter your email"
              style={{
                all: "unset",
                background: "transparent",
                textAlign: "start",
                padding: "5px 10px",
                fontSize: "0.8em",
                width: "50%",
              }}
              onChange={(e) => {
                setInput(e.target.value);
                ValidateEmail(Input);
              }}
            />
            <button
              disabled={!getStartedBtnEnabled}
              style={{
                padding: "10px 15px",
                borderRadius: "20px",
                color: "black",
              }}
            >
              {getStartedBtnEnabled ? (
                <div>
                  <a
                    href={`mailto:admin@innards.in?subject=About Inna Services&body=Hi I am interested in your service.My email:${Input}`}
                  >
                    <p style={{ color: "black" }}> Get Started</p>
                  </a>
                </div>
              ) : (
                <div>Get started</div>
              )}
            </button>
          </div>
          <div
            style={{
              textAlign: "start",
              alignSelf: "flex-start",
              width: "100%",
            }}
          >
            <p
              style={{
                textAlign: "start",
                alignSelf: "flex-start",
              }}
            >
              If You're Hurry, Quick Call For Us.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                // border: "2px solid red",
              }}
            >
              <div
                style={{
                  padding: "15px",
                  // backgroundColor: "",
                }}
              >
                <FiPhoneCall
                  color="white"
                  // size={15}
                  style={{
                    boxShadow: "2px 2px 4px -3px rgba(87,87,87,0.5)",
                    padding: "7px",
                    height: "30px",
                    width: "30px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    textAlign: "start",
                    alignSelf: "flex-start",
                    fontSize: "0.5em",
                    color: "#a5f3fc",
                  }}
                >
                  HOTLINE 24/7
                </p>
                <p
                  style={{
                    textAlign: "start",
                    alignSelf: "flex-start",
                    fontSize: "0.8em",
                  }}
                >
                  +91-7980798828
                </p>
              </div>
            </div>
          </div>
        </div>
        <Lottie
          style={{
            // position: "absolute",
            right: 0,
            width: "100%",
            bottom: 0,
          }}
          animationData={constructionAnim}
          loop={true}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            textAlign: "start",
            padding: "5em 2em 2em 2em",
            paddingTop: "5em",
            gap: "20px",
          }}
        >
          <h2
            style={{
              textAlign: "start",
              fontSize: "1.5em",
            }}
          >
            Are you Looking for Manpower/ Resources ?
          </h2>
          <p
            style={{
              textAlign: "start",
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.7em",
            }}
          >
            Is your business or organization presently seeking to procure the
            necessary human resources and materials for the construction/repair
            work?
          </p>
          <p
            style={{
              textAlign: "start",
            }}
          ></p>
          <button
            style={{
              color: "black",
              width: "max-content",
              borderRadius: "2em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <p>Get Quote Now</p>
            <BsArrowRight color="black" />
          </button>
        </div>
      </section>
      <section
        style={{
          width: "100%",
        }}
        id="about_mobile"
      >
        <Lottie style={{}} animationData={constructionAbout} loop={true} />
        <div style={{ textAlign: "start", padding: "20px" }}>
          <h2>About Us</h2>
          <p>
            INNA is a provider of digital and physical interaction platforms
            that simplify procurement and supplier processes. Our services are
            designed to help our users make informed decisions and streamline
            the procurement and supplier process, regardless of the industry or
            niche they operate in.
          </p>
          <h4>Our Services</h4>
          <div
            style={{
              width: "100%",
              display: "grid",
              //   gridTemplateColumns: "50% 50%",
              gap: "20px",
              padding: "30px",
            }}
          >
            {" "}
            <div style={styles.AboutCard}>
              <img style={{ height: "40px" }} src={data} alt="data" srcset="" />
              <h5>Data-backed knowledge guidance</h5>
              <div
                style={{
                  height: "2px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              ></div>
              <p
                style={{
                  fontSize: "0.7em",
                  textAlign: "center",
                  color: "white",
                }}
              >
                We provide procurement guidance based on data analytics, helping
                our users make informed decisions based on real-time insights.
              </p>
            </div>
            <div style={styles.AboutCard}>
              <img
                style={{ height: "40px" }}
                src={information}
                alt="information"
                srcset=""
              />
              <h5>Live information on Labour & resources</h5>
              <div
                style={{
                  height: "2px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              ></div>
              <p
                style={{
                  fontSize: "0.7em",
                  textAlign: "center",
                  color: "white",
                }}
              >
                We provide real-time information on the availability of skilled
                labour and other resources in the local area.
              </p>
            </div>
            <div style={styles.AboutCard}>
              <img
                style={{ height: "40px" }}
                src={cost_effective}
                alt="cost_effective"
                srcset=""
              />
              <h5>Statistical comparison on Cost & services</h5>

              <div
                style={{
                  height: "2px",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              ></div>
              <p
                style={{
                  fontSize: "0.7em",
                  textAlign: "center",
                  color: "white",
                }}
              >
                We offer statistical comparisons of cost, quality, and service
                delivery from various suppliers, enabling our users to make
                informed decisions that suit their specific needs.
              </p>
            </div>
          </div>

          <h4>Our Mission</h4>
          <p>
            Our mission is to simplify the procurement and supplier process for
            businesses and individuals, enabling them to make informed decisions
            that lead to better outcomes. We are committed to providing
            user-friendly, reliable, and innovative solutions that help our
            clients meet their goals and objectives with minimum hassle.
          </p>
        </div>
      </section>
      <div
        id="mission_mobile"
        style={{
          padding: "5rem",
          marginTop: "100px",
          backgroundColor: "rgba(0,0,0,0.1)",
          width: "100%",
        }}
      >
        <h2 style={{ fontSize: "2rem" }}>Our Mission & Goals</h2>
      </div>
      <section
        style={{
          width: "100%",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          placeItems: "center",
          gap: "10px",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "max-content",
            padding: "10px",
            border: "0.5px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "3em",
          }}
        >
          <img style={{ height: "40px" }} src={bridge} alt="bridge" srcset="" />
          <div
            style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
          ></div>
          <p style={{ fontSize: "0.7em", textAlign: "center" }}>
            Bridging the gap between manpower and coustomer
          </p>
        </div>
        <div
          style={{
            width: "100%",
            height: "max-content",
            padding: "10px",
            border: "0.5px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "3em",
          }}
        >
          <img style={{ height: "40px" }} src={saving} alt="saving" srcset="" />
          <div
            style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
          ></div>
          <p style={{ fontSize: "0.7em", textAlign: "center" }}>
            {" "}
            Save your cost and get hassle free manpower
          </p>
        </div>
        <div
          style={{
            width: "100%",
            height: "max-content",
            padding: "10px",
            border: "0.5px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <img
            style={{ height: "40px" }}
            src={customerCare}
            alt="customer_care"
            srcset=""
          />
          <div
            style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
          ></div>
          <p style={{ fontSize: "0.7em", textAlign: "center" }}>
            Get 24×7 coustomer support
          </p>
        </div>
        <div
          style={{
            width: "100%",
            height: "max-content",
            padding: "10px",
            border: "0.5px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <img
            style={{ height: "40px" }}
            src={tracking}
            alt="tracking"
            srcset=""
          />
          <div
            style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
          ></div>
          <p style={{ fontSize: "0.7em", textAlign: "center" }}>
            Live tracking, Quality assurance
          </p>
        </div>
      </section>
      <section
        id="resources_mobile"
        style={{
          // border: "2px solid red",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // placeItems: "center",
          gap: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Lottie
            style={{
              // position: "absolute",
              // right: 0,
              width: "80%",
              // bottom: 0,
            }}
            animationData={constructionOngoing}
            loop={true}
          />
        </div>
        <div
          style={{
            width: "100%",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: "1.5em",
              textAlign: "start",
            }}
          >
            Finding the right consultants,construction materials,contractor and
            engineers is no longer a headche
          </h2>
          <p
            style={{
              margin: "20px 0px",
              fontSize: "0.7em",
              textAlign: "start",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            A project is an activity to meet the creation of a unique product or
            service and thus i that are undertaken to accompish One of the most
            common competency based role requiring some project.
          </p>
          <button
            style={{
              width: "max-content",
              borderRadius: "2em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              color: "black",
            }}
          >
            <p>Explore Now</p>
            <BsArrowRight color="black" />
          </button>
        </div>
      </section>
      <section
        id="services_mobile"
        style={{
          // border: "2px solid red",
          width: "100%",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            width: "100%",
            paddingTop: "80px",
            fontSize: "2.5em",
          }}
        >
          Our Services
        </h2>
        <div
          style={{
            width: "100%",
            padding: "30px",
            paddingBottom: "100px",
            display: "grid",
            gridTemplateColumns: "45% 45%",
            gap: "10%",
          }}
        >
          <div
            style={{
              padding: "20px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "grid",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src={carpernter}
              alt="carpernter"
              srcset=""
            />
            <p
              style={{ fontSize: "0.6em", textAlign: "center", color: "white" }}
            >
              Carpentry work
            </p>
          </div>
          <div
            style={{
              padding: "20px 20px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "grid",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src={electrician}
              alt="electrician"
              srcset=""
            />
            <p
              style={{ fontSize: "0.6em", textAlign: "center", color: "white" }}
            >
              Professional Electrician
            </p>
          </div>
          <div
            style={{
              padding: "20px 20px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "grid",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <img style={{ height: "40px" }} src={mason} alt="mason" srcset="" />
            <p
              style={{ fontSize: "0.6em", textAlign: "center", color: "white" }}
            >
              Civil Mason
            </p>
          </div>
          <div
            style={{
              padding: "20px 20px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "grid",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src={painter}
              alt="painter"
              srcset=""
            />
            <p
              style={{ fontSize: "0.6em", textAlign: "center", color: "white" }}
            >
              Painter
            </p>
          </div>
          <div
            style={{
              padding: "20px 20px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "grid",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src={plumber}
              alt="plumber"
              srcset=""
            />
            <p
              style={{ fontSize: "0.6em", textAlign: "center", color: "white" }}
            >
              Plumbing Experts
            </p>
          </div>
          <div
            style={{
              padding: "20px 20px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "grid",
              gap: "10px",
              placeItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src={marble}
              alt="marble mason"
              srcset=""
            />

            <p
              style={{ fontSize: "0.6em", textAlign: "center", color: "white" }}
            >
              Marble Mason
            </p>
          </div>
        </div>
      </section>
      <section
        style={{
          // border: "2px solid red",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // placeItems: "center",
          gap: "3%",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: "1.5em",
              textAlign: "start",
            }}
          >
            Get instant quotes Now
          </h2>
          <p
            style={{
              margin: "20px 0px",
              fontSize: "0.7em",
              textAlign: "start",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            for all your construction needs from multiple technical experts and
            contractors serving in your locality
          </p>
          <button
            style={{
              width: "max-content",
              borderRadius: "2em",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              color: "black",
            }}
          >
            <p>Get Quote Now</p>
            <BsArrowRight color="black" />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Lottie
            style={{
              // position: "absolute",
              // right: 0,
              width: "80%",
              // bottom: 0,
            }}
            animationData={handshake}
            loop={true}
          />
        </div>
      </section>
      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // placeItems: "center",
          gap: "3%",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: "1.5em",
              textAlign: "start",
            }}
          >
            SO, WHAT YOU WAITING FOR? <br />
            LET'S TALK YOUR PROJECT!
          </h2>
        </div>
        <div
          style={{
            width: "100%",
            padding: "50px 50px",
          }}
        >
          <div
            style={{
              margin: "20px 0",
              padding: "5px 20px",
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: "30px",
              textAlign: "start",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              placeholder="enter your email"
              style={{
                all: "unset",
                background: "transparent",
                textAlign: "start",
                padding: "5px 10px",
                fontSize: "0.8em",
                width: "50%",
              }}
              onChange={(e) => {
                setInput(e.target.value);
                ValidateEmail(Input);
              }}
            />
            <BsArrowRight color="black" />
          </div>
          <button
            disabled={!getStartedBtnEnabled}
            style={{
              width: "100%",
              borderRadius: "20px",
              color: "black",
            }}
          >
            {getStartedBtnEnabled ? (
              <div>
                <a
                  href={`mailto:admin@innards.in?subject=About Inna Services&body=Hi I am interested in your service.My email:${Input}`}
                >
                  <p style={{ color: "black" }}> Get Started</p>
                </a>
              </div>
            ) : (
              <div>Get started</div>
            )}
          </button>
        </div>
      </section>
      <div
        style={{
          borderBottom: "0.5px solid rgba(255,255,255,0.1)",
        }}
      ></div>
      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // placeItems: "center",
          gap: "30px",
          paddingBottom: "50px",

          background: "rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <img
            style={{
              // height: "40px",
              width: "140px",
            }}
            src={logo}
            alt="inna"
          />
          <p
            style={{
              fontSize: "0.8em",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            LIG IIG 5/10 1050/2,
            <br /> SURVEY PARK, SANSHAPTAK,
            <br /> KOLKATA 700075
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>Navigation</h4>
          <div className="footer_services">
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>Missions & Goals</p>
            <p>Resources</p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>Services</h4>
          <div className="footer_services">
            <p>Civil Mason</p>
            <p>Professional Electrician </p>
            <p>Plumbing experts</p>
            <p>Painter</p>
            <p> Carpentry work</p>
            <p>Marble Mason</p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <h4>Get In Touch</h4>
          <p
            style={{
              textAlign: "start",
              fontSize: "0.6em",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Phone No: +91-7980798828
            <br /> Email: admin@innards.in
          </p>
          <div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <a href="https://www.facebook.com/innards.in?mibextid=ZbWKwL">
                <BsFacebook />
              </a>

              <a href="https://instagram.com/innards.in?igshid=ZDdkNTZiNTM=">
                <BsInstagram />
              </a>
              <a href="https://www.linkedin.com/company/innainfra/">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      {ShowNav ? <NavList /> : null}
    </div>
  );
}
const styles = {
  card: {
    width: "25%",
    height: "35vh",
    padding: "50px",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
    boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cardText: {
    fontSize: "0.8em",
  },
  ServiceCard: {
    width: "100%",
    height: "35vh",
    padding: "50px",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
    boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  AboutCard: {
    padding: "10px",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
    boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};
