import React from "react";

const Header = ({ onScrollTo }) => {
  return (
    <header className="bg-gray-900 pt-5 shadow-lg">
      <div className="mx-auto px-4 text-center">
        <img
          src="/launch_assets/ArmorNew.png" // Replace with actual logo path
          alt="Armor Institute Logo"
          className="mx-auto mb-4"
        />
        {/* <h1 className="text-4xl font-bold mb-4">Armor Institute</h1> */}
        <p className="text-gray-300 max-w-2xl mx-auto">
          A hub for AI innovation, community engagement, and transformative
          partnerships.
        </p>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="mt-6 flex justify-center gap-4 flex-wrap"> */}
        {/* <button
          onClick={() => onScrollTo("header")}
          className="py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Overview
        </button> */}
        {/* <button
          onClick={() => onScrollTo("localPOCs")}
          className="py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Local POCs
        </button>
        <button
          onClick={() => onScrollTo("events")}
          className="py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Events
        </button> */}
        {/* <button
          onClick={() => onScrollTo("grantsPartnerships")}
          className="py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Partnerships
        </button> */}
        {/* <button
          onClick={() => onScrollTo("talentPortal")}
          className="py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Talent Portal
        </button> */}
        {/* <button
          onClick={() => onScrollTo("metrics")}
          className="py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Metrics
        </button> */}
        {/* <button
          onClick={() => onScrollTo("connect")}
          className="py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Connect
        </button> */}
      {/* </div> */}
    </header>
  );
};

export default Header;