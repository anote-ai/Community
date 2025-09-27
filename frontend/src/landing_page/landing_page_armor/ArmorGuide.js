import React from "react";

const ArmorGuide = () => (
  <div className="bg-gray-900 rounded-lg p-8 text-gray-300 pt-8 shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-white text-center">
      Armor Institute - City Organizer QuickStart Guide
    </h2>
    <p className="mb-6 text-center text-lg">
      👋 Welcome, Future AI Community Leader!
    </p>
    <p className="mb-6 text-left pl-4">
      Are you an active builder in AI? Eager to connect with other builders in your community and worldwide? Become an Armor Institute city organizer and lead your local AI revolution!
    </p>
    <h3 className="text-2xl font-bold mb-4 text-white pl-4">🚀 5-Step Launch Plan</h3>
    <ol className="list-decimal pl-8 space-y-3 text-left">
      <li>Apply: Fill out our quick application to become a city organizer.</li>
      <li>Plan: Secure a sponsor/venue and set your first event date.</li>
      <li>Create: Build your event page using our platform tools.</li>
      <li>Promote: Leverage your network and social media to spread the word.</li>
      <li>Host: Deliver a high-quality meetup with demos and collaboration.</li>
    </ol>
    <h3 className="text-2xl font-bold mt-8 mb-4 text-white pl-4">💡 How Do We Successfully Expand?</h3>
    <ul className="list-disc pl-8 space-y-3 text-left">
      <li>Find a great venue and sponsors for events.</li>
      <li>Identify a local point of contact to manage logistics.</li>
      <li>Build a roster of engaging speakers.</li>
      <li>Promote through forums, partnerships, and social media.</li>
      <li>Ensure great attendee experiences and foster networking.</li>
      <li>Share event highlights via LinkedIn, YouTube, and Slack.</li>
      <li>Streamline processes with automation to scale efficiently.</li>
    </ul>
    <h3 className="text-2xl font-bold mt-8 mb-4 text-white pl-4">📊 How Do We Measure Success?</h3>
    <ul className="list-disc pl-8 space-y-3 text-left">
      <li>Number of cities expanded to and events hosted.</li>
      <li>Sign-ups, attendees, and repeat participation.</li>
      <li>Engagement on social platforms (followers, views).</li>
      <li>Quality of venues, speakers, and event content.</li>
      <li>ROI related to sales and partnerships.</li>
    </ul>
    <div className="text-left mt-8 pl-4 space-y-4">
  {/* <a
    href="/armor/cityOrganizer"
    className="block btn-yellow px-6 py-2 rounded-md shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-auto mx-auto"
  >
    Apply to Be a City Organizer
  </a> */}
  {/* <a
    href="/armor/cityOrganizer"
    className="block btn-yellow px-6 py-2 rounded-md shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-auto mx-auto"
  >
    Join our slack channel
  </a> */}
  <a
  href="https://join.slack.com/t/anote-ai/shared_invite/zt-2vdh1p5xt-KWvtBZEprhrCzU6wrRPwNA"
  target="_blank"
  rel="noopener noreferrer"
  className="block btn-yellow px-6 py-2 rounded-md shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-auto mx-auto"
>
  Join our Slack channel
</a>

</div>

  </div>
);

export default ArmorGuide;
