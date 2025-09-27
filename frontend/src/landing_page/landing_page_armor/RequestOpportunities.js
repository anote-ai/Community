// import React, { useState } from "react";

// const RequestOpportunities = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     organization: "",
//     requestType: "speaking", // Default to speaking engagement
//     details: "",
//     agreeToContact: false,
//   });

//   const [submissionStatus, setSubmissionStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData({ ...formData, agreeToContact: e.target.checked });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmissionStatus("Your request has been submitted successfully. Thank you!");
//     setFormData({
//       name: "",
//       email: "",
//       organization: "",
//       requestType: "speaking",
//       details: "",
//       agreeToContact: false,
//     });

//     setTimeout(() => setSubmissionStatus(""), 3000);
//   };

//   return (
//     <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center px-4">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-6">
//         <h2 className="text-3xl font-bold text-center mb-6">Request Opportunities</h2>
//         <p className="text-sm text-gray-400 text-center mb-6">
//           Submit your request for a speaking engagement, partnership, or sponsorship opportunity.
//         </p>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm mb-1">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           {/* Email */}
//           <div>
//             <label className="block text-sm mb-1">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           {/* Organization */}
//           <div className="sm:col-span-2">
//             <label className="block text-sm mb-1">Organization Name</label>
//             <input
//               type="text"
//               name="organization"
//               value={formData.organization}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           {/* Request Type */}
//           <div className="sm:col-span-2">
//             <label className="block text-sm mb-1">Request Type</label>
//             <select
//               name="requestType"
//               value={formData.requestType}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="speaking">Speaking Engagement</option>
//               <option value="partnership">Partnership Opportunity</option>
//               <option value="sponsorship">Sponsorship Opportunity</option>
//             </select>
//           </div>
//           {/* Details */}
//           <div className="sm:col-span-2">
//             <label className="block text-sm mb-1">Details</label>
//             <textarea
//               name="details"
//               value={formData.details}
//               onChange={handleChange}
//               rows={5}
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//               placeholder="Provide additional details about your request."
//               required
//             />
//           </div>
//           {/* Agreement to Contact */}
//           <div className="sm:col-span-2 flex items-center">
//             <input
//               type="checkbox"
//               name="agreeToContact"
//               checked={formData.agreeToContact}
//               onChange={handleCheckboxChange}
//               className="mr-2 focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <label className="text-sm">
//               I agree to be contacted by the Armor Institute regarding my request.
//             </label>
//           </div>
//           {/* Submit Button */}
//           <div className="sm:col-span-2 text-center">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-md focus:ring-4 focus:ring-blue-300 w-full"
//             >
//               Submit Request
//             </button>
//           </div>
//         </form>
//         {submissionStatus && (
//           <p className="mt-4 text-center text-green-400">{submissionStatus}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestOpportunities;

import React, { useState } from "react";

const RequestOpportunities = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    linkedin: "", // Added LinkedIn field
    requestType: "speaking", // Default to speaking engagement
    details: "",
    agreeToContact: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreeToContact: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus("Your request has been submitted successfully. Thank you!");
    setFormData({
      name: "",
      email: "",
      organization: "",
      linkedin: "", // Reset LinkedIn field
      requestType: "speaking",
      details: "",
      agreeToContact: false,
    });

    setTimeout(() => setSubmissionStatus(""), 3000);
  };

  return (
    <div className="w-screen bg-gray-900 text-white min-h-screen py-10 flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold text-center mb-6">Request Opportunities</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Submit your request for a speaking engagement, partnership, or sponsorship opportunity.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Organization */}
          <div>
            <label className="block text-sm mb-1">Organization Name</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* LinkedIn */}
          <div>
            <label className="block text-sm mb-1">LinkedIn Profile URL</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              placeholder="https://www.linkedin.com/in/your-profile"
            />
          </div>
          {/* Request Type */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">Request Type</label>
            <select
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            >
              <option value="speaking">Speaking Engagement</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="sponsorship">Sponsorship Opportunity</option>
            </select>
          </div>
          {/* Details */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              placeholder="Provide additional details about your request."
              required
            />
          </div>
          {/* Agreement to Contact */}
          <div className="sm:col-span-2 flex items-center">
            <input
              type="checkbox"
              name="agreeToContact"
              checked={formData.agreeToContact}
              onChange={handleCheckboxChange}
              className="mr-2 focus:ring-2 focus:ring-blue-400"
              required
            />
            <label className="text-sm">
              I agree to be contacted by the Armor Institute regarding my request.
            </label>
          </div>
          {/* Submit Button */}
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-md focus:ring-4 focus:ring-blue-300 w-full"
            >
              Submit Request
            </button>
          </div>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-center text-green-400">{submissionStatus}</p>
        )}
      </div>
    </div>
  );
};

export default RequestOpportunities;
