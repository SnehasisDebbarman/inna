import React from "react";
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

import { HiMenuAlt1 } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

export default function MobileView() {
  const [ShowNav, setShowNav] = useState(false);
  function NavList(params) {
    return (
      <div
        style={{
          top: 60,
          position: "fixed",
          zIndex: "10",
          width: "100%",
          padding: "20px",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          onClick={() => {
            setShowNav(!ShowNav);
            window.location.href = "#resources";
          }}
        >
          {" "}
          <a href="#about" target="_self">
            About
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
            window.location.href = "#resources";
          }}
        >
          <a href="#about" target="_self">
            Project
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
            window.location.href = "#resources";
          }}
        >
          <a href="#services" target="_self">
            Services
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
            window.location.href = "#resources";
          }}
        >
          <a href="#services" target="_self">
            Features
          </a>
        </div>
        <div
          onClick={() => {
            setShowNav(!ShowNav);
            window.location.href = "#resources";
          }}
        >
          <a href="#resources" target="_self">
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
        style={{
          width: "90%",
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
            />
            <button
              style={{
                padding: "10px 15px",
                borderRadius: "20px",
              }}
            >
              Get started
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
            performance and your cross-functional collaboration with easy-to-use
            dashboards, data visualizations, and automated insights in one click
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
            <BsArrowRight />
          </button>
        </div>
      </section>
      <section
        id="about"
        style={{
          // border: "2px solid red",
          width: "100%",

          padding: "150px 50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // placeItems: "center",
          gap: "5%",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "max-content",
            padding: "50px",
            border: "0.5px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "3em",
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
            width: "100%",
            height: "max-content",
            padding: "50px",
            border: "0.5px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            boxShadow: "0px -6px 30px 5px rgba(20,20,20,1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "3em",
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
            width: "100%",
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
            }}
          >
            <p>Explore Now</p>
            <BsArrowRight />
          </button>
        </div>
      </section>
      <section
        id="services"
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
            }}
          >
            <p>Get Quote Now</p>
            <BsArrowRight />
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
            />
            <BsArrowRight />
          </div>
          <button
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          >
            Get started
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
          }}
        >
          {" "}
          <img
            style={{
              // height: "40px",
              width: "100px",
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
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </section>

      {ShowNav ? <NavList /> : null}
    </div>
  );
}
