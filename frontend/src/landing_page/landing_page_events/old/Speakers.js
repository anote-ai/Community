import React from 'react';
import "../landing_page_styles/LandingPageContact.css";
import tommy from "../landing_page_assets/tommywhite.png";
import natan from "../landing_page_assets/natanwhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactCard(props) {
  return (
    <div className="mx-auto my-6 md:my-0 md:mx-10">
      <img className="w-48 h-48 rounded-lg" src={props.propic} alt={props.name} loading="lazy" />
      <div className="text-left">
        <h4 className="font-bold text-xl">{props.name}</h4>
        <h5>{props.positionTitle}</h5>
        <div className="flex flex-row justify-start">
          <a href={props.linkedinUrl}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="ml-4" href={"mailto:" + props.email}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}
function Speakers() {
  return (
    <div className="w-screen h-80vh bg-gray-900">
      <div className="pt-10 md:pt-16">
        <div className="text-white text-center justify-center">
          <div className="text-2xl sm:text-3xl lg:text-4xl mb-5 md:mb-20 text-center font-medium lg:font-bold">
            Speakers
          </div>
          <div className="flex flex-col w-full md:flex-row justify-center mb-20 mx-20">
            <ContactCard
              name="Natan Vidra"
              propic={natan}
              positionTitle="Co-Founder / CEO"
              linkedinUrl="https://www.linkedin.com/in/natanvidra/"
              email="nvidra@anote.ai"
            />
          </div>
        </div>
      </div>
     </div>
  );
}


export default Speakers;

