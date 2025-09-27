import { useNavigate } from "react-router-dom";
import "../landing_page_styles/LandingPageNavbar.css";
import "../landing_page_styles/LandingPageButtons.css";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();

  const urlObject = new URL(window.location.origin);

  function handleTutorialButtonClick() {
    navigate("/tutorials");
  }
  var hostname = urlObject.hostname;
  if (hostname.startsWith("www.")) {
    hostname = hostname.substring(4);
  }
  urlObject.hostname = `dashboard.${hostname}`;

  var startPath = urlObject.toString();
  return (
    <nav className="sticky top-0 h-[4.5rem] md:h-20 md:h-18 w-full bg-gray-900 text-white z-30">
      <div className="flex items-center font-medium justify-around">
        <div className="flex items-start">
          <div className="p-5 lg:w-auto w-full flex z-40">
            <div className="flex flex-row left-2 absolute lg:static">
              <div
                className={`rocket-container ${hovered ? "rocket-fly" : ""}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img
                  src="/logo.png"
                  alt="logo"
                  className="lg:cursor-pointer h-9"
                  onAnimationEnd={() => setHovered(false)}
                />
                <Link
                  to="/#top"
                  className="font-bold text-3xl lg:cursor-pointer font-['Arial']"
                >
                  Anote
                </Link>
              </div>
            </div>
            <div
              className="text-3xl lg:hidden right-3 absolute"
              onClick={() => props.setOpen(!props.open)}
            >
              <FontAwesomeIcon icon={props.open ? faXmark : faBars} />
            </div>
          </div>
        </div>
        <ul className="lg:flex hidden items-center gap-8 ">
          <NavLinks open={props.open} setOpen={props.setOpen} />
        </ul>
        <div className="lg:block hidden items-start">
          <button
            // onClick={handleTutorialButtonClick}
            className="btn-black"
            onClick={() => {
              window.open("https://docs.anote.ai", "_blank");
            }}
          >
            Documentation
          </button>
          {/* <button
            onClick={() => {
              window.location.assign(startPath);
            }}
            class="btn-yellow ml-4"
          >
            Get Started
          </button> */}
          <button
            onClick={() => {
              window.location.assign("https://calendly.com/natanvidra/anote");
            }}
            class="btn-yellow ml-4"
          >
            Book a Demo
          </button>
          {/* <button
            onClick={() => {
              window.location.assign("https://github.com/nv78/OpenAnote");
            }}
            class="btn-yellow ml-4"
          >
            Visit Github
          </button> */}
        </div>
        {/* Mobile nav */}

        <ul
          className={`lg:hidden bg-gray-900 fixed w-full h-full top-0 py-24 pl-4 z-20 duration-500 ${
            props.open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <NavLinks open={props.open} setOpen={props.setOpen} />
            <div className="py-5">
              <button
                onClick={handleTutorialButtonClick}
                className="btn-black mb-5 w-max"
              >
                View Tutorials
              </button>
              {/* <button
                onClick={() => {
                  window.location.assign(startPath);
                }}
                class="btn-yellow w-max ml-4"
              >
                Get Started
              </button> */}
              <button
                onClick={() => {
                  window.location.assign("https://calendly.com/natanvidra/anote");
                }}
                class="btn-yellow w-max ml-4"
              >
                Book a Demo
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
