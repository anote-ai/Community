import React, { useState } from "react";
import "../landing_page_styles/Registrations.css";
function Registration() {
  return (
    <div className="w-screen bg-gray-900">
      <div className="py-4">
        <div className="text-white text-center justify-center">
          <div className="text-4xl sm:text-6xl lg:text-7xl mt-8 mb-4 text-center font-medium lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-turquoise-500 to-blue-400">
            AI Day Summit
          </div>
        </div>
        <div className="registration-container mx-auto md:my-8 py-5 px-3 md:p-10">
          <h2>AI Day Registration</h2>
          <p>Event Day: February 2nd @ 5:00 PM EST</p>
          <p className="md:mx-20px">
            Anote is an artificial intelligence startup in New York City,
            helping make artificial intelligence more accessible. We believe
            there is a massive gap between the tremendous potential of AI
            models, and the everyday tasks that people care about. We are proud
            to sponsor AI day to help more people within our community realize
            the incredible potential of AI.
          </p>
          <form>
            <button
              className="Button6 hover:bg-yellow-300"
              onClick={() => {
                window.open(
                  "https://form.jotform.com/233498501418055",
                  "_blank"
                );
              }}
            >
              Register Here
            </button>
          </form>
          <p className="pt-4">
            Email <a href="mailto:nvidra@anote.ai">nvidra@anote.ai</a> for
            questions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
