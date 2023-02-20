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
import { FiPhoneCall } from "react-icons/fi";
import MobileView from "./MobileView";
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
import electrician_lottie from "./assets/electrician_lottie.json";
import art from "./assets/workers.svg";

function App() {
  const [Input, setInput] = useState("");
  const [getStartedBtnEnabled, setgetStartedBtnEnabled] = useState(false);
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setgetStartedBtnEnabled(true);
    } else {
      setgetStartedBtnEnabled(false);
    }
  }

  return (
    <>
      <div
        className="desktop_view"
        style={{
          width: "100vw",
          display: "grid",
        }}
      >
        <nav
          style={{
            width: "100%",
            padding: "0.5rem 4rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "black",
            fontSize: "0.8em",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            position: "fixed",
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(5px)",
            zIndex: "3",
          }}
        >
          <div
            style={{
              width: "34%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              gap: "30px",
            }}
          >
            <div>
              {" "}
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#services">Services</a>
            </div>
          </div>
          <div style={{ width: "33%", display: "grid", placeItems: "center" }}>
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
              width: "33%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "20px",
            }}
          >
            <div>
              <a href="#mission">Mission</a>
            </div>
            <div>
              <a href="#resources">Resources</a>
            </div>
          </div>
        </nav>
        <section
          id="home"
          style={{
            // border: "2px solid red",
            width: "90%",
            height: "100vh",
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            // placeItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10em",
              paddingLeft: "3.5em",
              // width: "50%",
            }}
          >
            <div
              style={{
                fontSize: "3em",
                textAlign: "start",
                lineHeight: "1.2em",
                fontFamily: "'Playfair Display', serif",
                // border: "1px solid red",
              }}
            >
              Are you Looking for <br />
              Manpower/ Resources ?
            </div>
            <p
              style={{
                textAlign: "start",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.9em",
                marginRight: "50px",
                marginTop: "20px",
              }}
            >
              Are you facing problem finding manpower for your project? We are
              happy to help!
            </p>
            <div
              style={{
                width: "80%",
                margin: "20px 0",
                padding: "5px 5px",
                border: "1px solid rgba(255,255,255,0.5)",
                borderRadius: "30px",
                textAlign: "start",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                placeholder="Enter your email"
                style={{
                  all: "unset",
                  background: "transparent",
                  textAlign: "start",
                  padding: "5px 10px",
                  fontSize: "0.8em",
                  width: "65%",
                  borderRadius: "20px",
                }}
                onChange={(e) => {
                  setInput(e.target.value);
                  ValidateEmail(Input);
                }}
              />

              <button
                disabled={!getStartedBtnEnabled}
                onClick={() => {}}
                style={{
                  padding: "5px 10px",
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
            {/* <button
              style={{
                margin: "20px 0",
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
            </button> */}
            {/* <div
              style={{
                textAlign: "start",
                alignSelf: "flex-start",
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
                  <a href="tel:+917980798828">
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
                  </a>
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
                    <a className="telephone_link" href="tel:+917980798828">
                      +91-7980798828
                    </a>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
              width: "50%",
              textAlign: "start",
              paddingTop: "6em",
              gap: "20px",
              height: "100%",
            }}
          >
            <Lottie
              style={{
                // position: "absolute",
                width: "100%",
              }}
              animationData={constructionAnim}
              loop={true}
            />
            {/* <h2
              style={{
                textAlign: "start",
                fontSize: "1.4em",
              }}
            >
              Are you Looking for Manpower/ Resources ?
            </h2>
            <p
              style={{
                textAlign: "start",
                color: "rgba(255,255,255,0.4)",
                fontSize: "1em",
              }}
            >
              Are you facing problem finding manpower for your project? We are
              happy to help!
            </p>
            <p
              style={{
                textAlign: "start",
              }}
            ></p> */}
          </div>
        </section>

        <section
          id="services"
          style={{
            // border: "2px solid red",
            width: "100%",
            height: "max-content",
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
              padding: "100px",
              display: "grid",
              flexDirection: "column",
              placeItems: "center",
              gridTemplateColumns: "30% 30% 30%",
              gap: "5%",
            }}
          >
            <div style={styles.ServiceCard}>
              <img
                style={{ height: "70px" }}
                src={painter}
                alt="painter"
                srcset=""
              />
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
                Painter
              </p>
            </div>
            <div style={styles.ServiceCard}>
              <img
                style={{ height: "70px" }}
                src={plumber}
                alt="plumber"
                srcset=""
              />
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
                Plumbing experts
              </p>
            </div>
            <div style={styles.ServiceCard}>
              <img
                style={{ height: "70px" }}
                src={electrician}
                alt="electrician"
                srcset=""
              />
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
                Professional Electrician
              </p>
            </div>
            <div style={styles.ServiceCard}>
              <img
                style={{ height: "70px" }}
                src={mason}
                alt="mason"
                srcset=""
              />
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
                Civil Mason
              </p>
            </div>
            <div style={styles.ServiceCard}>
              <img
                style={{ height: "70px" }}
                src={carpernter}
                alt="carpernter"
                srcset=""
              />
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
                Carpentry work
              </p>
            </div>

            <div style={styles.ServiceCard}>
              <img
                style={{ height: "70px" }}
                src={marble}
                alt="marble"
                srcset=""
              />
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
                Professonal Consultant
              </p>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section
          style={{
            // border: "2px solid red",
            alignSelf: "center",
            width: "90%",
            padding: "20px 0",
            display: "grid",
            gridTemplateColumns: "50% 50%",
            // placeItems: "center",
          }}
          id="about"
        >
          {/* <Lottie
            style={{
              margin: "20px",
            }}
            animationData={electrician_lottie}
            loop={true}
          /> */}
          <img
            style={{
              width: "70%",
              margin: "50px",
              paddingTop: "50px",
            }}
            src={art}
            alt=""
            srcset=""
          />
          <div style={{ textAlign: "start" }}>
            <h2 style={{ padding: "30px 0", fontSize: "2rem" }}>About Us</h2>
            <p>
              INNA is a provider of digital and physical interaction platforms
              that simplify procurement and supplier processes. Our services are
              designed to help our users make informed decisions and streamline
              the procurement and supplier process, regardless of the industry
              or niche they operate in.
            </p>
            <h4 style={{ padding: "20px 0" }}>Our Speciality</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "33% 33% 33%",
                gap: "20px",
                padding: "20px",
              }}
            >
              {" "}
              <div style={styles.AboutCard}>
                <img
                  style={{ height: "40px" }}
                  src={data}
                  alt="data"
                  srcset=""
                />
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
                  }}
                >
                  We provide procurement guidance based on data analytics,
                  helping our users make informed decisions based on real-time
                  insights.
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
                  }}
                >
                  We provide real-time information on the availability of
                  skilled labour and other resources in the local area.
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
                  }}
                >
                  We offer statistical comparisons of cost, quality, and service
                  delivery from various suppliers, enabling our users to make
                  informed decisions that suit their specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          id="mission"
          style={{
            padding: "5rem",
            marginTop: "100px",
            backgroundColor: "rgba(0,0,0,0.1)",
            width: "100%",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>Our Mission & Goals</h2>
          <p style={{ padding: "20px" }}>
            Our mission is to simplify the procurement and supplier process for
            businesses and individuals, enabling them to make informed decisions
            that lead to better outcomes. We are committed to providing
            user-friendly, reliable, and innovative solutions that help our
            clients meet their goals and objectives with minimum hassle.
          </p>
        </div>
        <section
          style={{
            // border: "2px solid red",
            width: "100%",

            padding: "50px",
            display: "flex",
            justifyContent: "space-between",
            // placeItems: "center",
            gap: "3%",
            background: "rgba(0,0,0,0.1)",
          }}
        >
          <div style={styles.card}>
            {/* <h2> 100% </h2> */}
            <img
              style={{ height: "40px" }}
              src={bridge}
              alt="bridge"
              srcset=""
            />
            <div
              style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
            />
            <p
              style={{ fontSize: "0.7em", textAlign: "center", color: "white" }}
            >
              Bridging the gap between manpower and coustomer
            </p>
          </div>
          <div style={styles.card}>
            <img
              style={{ height: "40px" }}
              src={saving}
              alt="saving"
              srcset=""
            />
            <div
              style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
            />
            <p
              style={{ fontSize: "0.7em", textAlign: "center", color: "white" }}
            >
              {" "}
              Save your cost and get hassle free manpower
            </p>
          </div>
          <div style={styles.card}>
            <img
              style={{ height: "40px" }}
              src={customerCare}
              alt="customer_care"
              srcset=""
            />
            <div
              style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
            ></div>
            <p
              style={{ fontSize: "0.7em", textAlign: "center", color: "white" }}
            >
              Get 24×7 coustomer support
            </p>
          </div>
          <div style={styles.card}>
            <img
              style={{ height: "40px" }}
              src={tracking}
              alt="tracking"
              srcset=""
            />
            <div
              style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
            ></div>
            <p
              style={{ fontSize: "0.7em", textAlign: "center", color: "white" }}
            >
              Get 24×7 coustomer support
            </p>
          </div>
        </section>
        <section
          id="resources"
          style={{
            // border: "2px solid red",
            width: "100%",
            height: "70vh",
            padding: "100px 50px",
            display: "flex",
            justifyContent: "space-between",
            // placeItems: "center",
            gap: "3%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "50%",
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
              width: "50%",
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
              Finding the right consultant, Manpower and resources for your
              needs is no longer a headache.
            </h2>
            <p
              style={{
                margin: "20px 0px",
                fontSize: "0.7em",
                textAlign: "start",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              A project is an activity to meet the creation of a unique product
              or service and thus i that are undertaken to accompish One of the
              most common competency based role requiring some project.
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
              }}
            >
              <p>Explore Now</p>
              <BsArrowRight color="black" />
            </button>
          </div>
        </section>

        <section
          id="services"
          style={{
            // border: "2px solid red",
            width: "100%",
            height: "70vh",
            padding: "50px 50px",
            display: "flex",
            justifyContent: "space-between",
            // placeItems: "center",
            gap: "3%",
            background: "rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              width: "50%",
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
              for all your construction needs from multiple technical experts
              and contractors serving in your locality
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
              width: "50%",
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
            // height: "70vh",
            padding: "50px 50px",
            display: "flex",
            justifyContent: "space-between",
            // placeItems: "center",
            gap: "3%",
          }}
        >
          <div
            style={{
              width: "50%",
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
              width: "50%",
              padding: "50px 120px",
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
              <BsArrowRight color="white" />
            </div>
            <button
              disabled={!getStartedBtnEnabled}
              style={{
                width: "100%",
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
        </section>

        <div
          style={{
            borderBottom: "0.5px solid rgba(255,255,255,0.1)",
          }}
        ></div>

        <section
          style={{
            width: "100%",
            // height: "70vh"
            padding: "50px 50px",
            display: "flex",
            justifyContent: "space-between",
            // placeItems: "center",
            gap: "3%",
            background: "rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              width: "55%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {" "}
            <img
              style={{
                // height: "40px",
                width: "100px",
                alignSelf: "flex-start",
              }}
              src={logo}
              alt="inna"
            />
            <p
              style={{
                textAlign: "start",
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
              width: "15%",
            }}
          >
            <h4>Navigation</h4>
            <div>
              <p>Home</p>
              <p>About us</p>
              <p>Services</p>
              <p>Missions & Goals</p>
              <p>Resources</p>
            </div>
          </div>

          <div
            style={{
              width: "15%",
              display: "flex",
              flexDirection: "column",
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
              Phone No:
              <a className="telephone_link" href="tel:+917980798828">
                +91-7980798828
              </a>
              <br /> Email:
              <a href="mailto:admin@innards.in?subject=About Inna Services&body=Hi I am interested in your service">
                admin@innards.in
              </a>
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
      </div>
      <div className="mobile_view">
        <MobileView />
      </div>
    </>
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
    width: "100%",
    padding: "10px",
    border: "0.5px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
    boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};

export default App;
