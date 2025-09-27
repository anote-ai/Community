// import React, { useState } from "react";
// import "../landing_page_styles/Registrations.css";

// function FeatureVenue() {
//   const [formData, setFormData] = useState({
//     venue_name: "",
//     website: "",
//     neighborhood_address: "",
//     description: "",
//     max_capacity: "",
//     poc_name: "",
//     poc_linkedin: "",
//   });
//   const [submissionStatus, setSubmissionStatus] = useState("");

//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbzkUdTtNDsmmBmoW58lv7vnZbCHNX9S6xnYZVdQziww4FL8LQ6-M4mSnAZZ1IBTrsDwag/exec"; // Replace with your actual Web App URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       setSubmissionStatus("Success! Your venue has been submitted.");
//       setFormData({
//         venue_name: "",
//         website: "",
//         neighborhood_address: "",
//         description: "",
//         max_capacity: "",
//         poc_name: "",
//         poc_linkedin: "",
//       });
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       setSubmissionStatus(
//         "Failed to submit. Please check your connection or email nvidra@anote.ai."
//       );
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center">
//       <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 mb-4">
//         <h2 className="text-3xl font-bold mb-4 text-center">Feature Your Venue</h2>
//         <p className="text-sm text-gray-400 mb-6 text-center">
//           Submit your venue to be listed as a top AI event space in NYC.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Venue Name */}
//           <div>
//             <label className="block text-sm mb-1">Venue Name</label>
//             <input
//               type="text"
//               name="venue_name"
//               value={formData.venue_name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Website */}
//           <div>
//             <label className="block text-sm mb-1">Website</label>
//             <input
//               type="url"
//               name="website"
//               value={formData.website}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Neighborhood/Address */}
//           <div>
//             <label className="block text-sm mb-1">Neighborhood/Address</label>
//             <input
//               type="text"
//               name="neighborhood_address"
//               value={formData.neighborhood_address}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Max Capacity */}
//           <div>
//             <label className="block text-sm mb-1">Max Capacity</label>
//             <input
//               type="number"
//               name="max_capacity"
//               value={formData.max_capacity}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* POC Name */}
//           <div>
//             <label className="block text-sm mb-1">POC Name</label>
//             <input
//               type="text"
//               name="poc_name"
//               value={formData.poc_name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* POC LinkedIn */}
//           <div>
//             <label className="block text-sm mb-1">POC LinkedIn URL</label>
//             <input
//               type="url"
//               name="poc_linkedin"
//               value={formData.poc_linkedin}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//                     {/* Description */}
//                     <div>
//             <label className="block text-sm mb-1">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="3"
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-[#28b8fb] text-white font-bold py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300"
//           >
//             Submit Venue
//           </button>
//         </form>

//         {/* Submission Status */}
//         {submissionStatus && (
//           <p className="mt-4 text-center text-sm text-gray-300">{submissionStatus}</p>
//         )}

//         <p className="text-center mt-4 text-sm">
//           Email{" "}
//           <a href="mailto:nvidra@anote.ai" className="text-blue-400 underline">
//             nvidra@anote.ai
//           </a>{" "}
//           for questions.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default FeatureVenue;

import React, { useState } from "react";
import "../landing_page_styles/Registrations.css";

function FeatureVenue() {
  const [formData, setFormData] = useState({
    venue_name: "",
    website: "",
    neighborhood_address: "",
    description: "",
    max_capacity: "",
    poc_name: "",
    poc_linkedin: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzkUdTtNDsmmBmoW58lv7vnZbCHNX9S6xnYZVdQziww4FL8LQ6-M4mSnAZZ1IBTrsDwag/exec"; // Ensure this is linked to your Google Sheet

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSubmissionStatus("Success! Your venue has been submitted.");
      setFormData({
        venue_name: "",
        website: "",
        neighborhood_address: "",
        description: "",
        max_capacity: "",
        poc_name: "",
        poc_linkedin: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus(
        "Failed to submit. Please check your connection or email nvidra@anote.ai."
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 mb-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Feature Your Venue</h2>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Submit your venue to be listed as a top AI event space in NYC.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Venue Name */}
          <div>
            <label className="block text-sm mb-1">Venue Name</label>
            <input
              type="text"
              name="venue_name"
              value={formData.venue_name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm mb-1">Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Neighborhood/Address */}
          <div>
            <label className="block text-sm mb-1">Neighborhood/Address</label>
            <input
              type="text"
              name="neighborhood_address"
              value={formData.neighborhood_address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Max Capacity */}
          <div>
            <label className="block text-sm mb-1">Max Capacity</label>
            <input
              type="number"
              name="max_capacity"
              value={formData.max_capacity}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* POC Name */}
          <div>
            <label className="block text-sm mb-1">POC Name</label>
            <input
              type="text"
              name="poc_name"
              value={formData.poc_name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* POC LinkedIn */}
          <div>
            <label className="block text-sm mb-1">POC LinkedIn URL</label>
            <input
              type="url"
              name="poc_linkedin"
              value={formData.poc_linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              className="w-full h-32 resize-none px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-[#28b8fb] text-white font-bold py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300"
          >
            Submit Venue
          </button>
        </form>

        {/* Submission Status */}
        {submissionStatus && (
          <p className="mt-4 text-center text-sm text-gray-300">{submissionStatus}</p>
        )}

        <p className="text-center mt-4 text-sm">
          Email{" "}
          <a href="mailto:nvidra@anote.ai" className="text-blue-400 underline">
            nvidra@anote.ai
          </a>{" "}
          for questions.
        </p>
      </div>
    </div>
  );
}

export default FeatureVenue;
