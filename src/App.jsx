import { useState } from "react";
import logo from "./assets/logo.webp";
import constructionAnim from "./assets/constructins.json";
import constructionOngoing from "./assets/construction_ongoing.json";
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
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#about">Project</a>
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
              <a href="#services">Features</a>
            </div>
            <div>
              <a href="#resources">Resources</a>
            </div>
          </div>
        </nav>
        <section
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
              width: "50%",
            }}
          >
            <div
              style={{
                fontSize: "3em",
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
            <div
              style={{
                fontSize: "3em",
                textAlign: "start",
                // textDecoration: "green wavy underline",
              }}
            ></div>
            <p
              style={{
                textAlign: "start",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.9em",
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
            <div
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
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              textAlign: "start",
              paddingTop: "12em",
              gap: "20px",
            }}
          >
            <h2
              style={{
                textAlign: "start",
                fontSize: "1.5em",
              }}
            >
              ABOUT US
            </h2>
            <p
              style={{
                textAlign: "start",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.7em",
              }}
            >
              Your most trusted CONSTRUCTION Development Partner. Drive
              performance and your cross-functional collaboration with
              easy-to-use dashboards, data visualizations, and automated
              insights in one click
            </p>
            <p
              style={{
                textAlign: "start",
              }}
            ></p>
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
              <p>Explore Benefits</p>
              <BsArrowRight color="black" />
            </button>
          </div>
        </section>
        <Lottie
          style={{
            position: "absolute",
            right: 0,
            width: "30%",
            bottom: 0,
          }}
          animationData={constructionAnim}
          loop={true}
        />
        <div
          id="about"
          style={{
            padding: "5rem",
            marginTop: "100px",
            backgroundColor: "rgba(0,0,0,0.1)",
            width: "100%",
          }}
        >
          <h2 style={{ fontSize: "2rem" }}>Our Works & Services</h2>
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
          <div
            style={{
              width: "30%",
              height: "max-content",
              padding: "50px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2> 100% </h2>
            <div
              style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
            ></div>
            <p style={{ fontSize: "0.7em", textAlign: "center" }}>
              Satisfied Clients
            </p>
          </div>
          <div
            style={{
              width: "30%",
              height: "max-content",
              padding: "50px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2>245 +</h2>
            <div
              style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
            ></div>
            <p style={{ fontSize: "0.7em", textAlign: "center" }}>
              {" "}
              Employees on worldwide
            </p>
          </div>
          <div
            style={{
              width: "30%",
              height: "max-content",
              padding: "50px",
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
              boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2>356</h2>
            <div
              style={{ height: "2px", background: "rgba(255, 255, 255, 0.1)" }}
            ></div>
            <p style={{ fontSize: "0.7em", textAlign: "center" }}>
              Proiects completed on 45 countries
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
              Finding the right consultants,construction materials,contractor
              and engineers is no longer a headche
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
            <h4>About</h4>
            <div>
              <p>thegs</p>
              <p>thegs</p>
              <p>thegs</p>
              <p>thegs</p>
              <p>thegs</p>
            </div>
          </div>
          <div
            style={{
              width: "15%",
            }}
          >
            <h4>Services</h4>
            <div>
              <p>thegs</p>
              <p>thegs</p>
              <p>thegs</p>
              <p>thegs</p>
              <p>thegs</p>
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
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
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

export default App;
