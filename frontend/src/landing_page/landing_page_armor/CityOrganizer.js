import React, { useState } from "react";

const CityOrganizer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    experience: "",
    reason: "",
    linkedin: "",
    agreeToGuidelines: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreeToGuidelines: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus("Your application has been submitted. Thank you!");
    setFormData({
      name: "",
      email: "",
      city: "",
      experience: "",
      reason: "",
      linkedin: "",
      agreeToGuidelines: false,
    });

    setTimeout(() => setSubmissionStatus(""), 3000);
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">City Organizer Application</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">Relevant Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">Why Do You Want to Be an Organizer?</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm mb-1">LinkedIn Profile URL</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="sm:col-span-2 flex items-center">
          <input
            type="checkbox"
            name="agreeToGuidelines"
            checked={formData.agreeToGuidelines}
            onChange={handleCheckboxChange}
            className="mr-2 focus:ring-2 focus:ring-blue-400"
            required
          />
          <label className="text-sm">I agree to follow the Armor Institute’s guidelines.</label>
        </div>
        <div className="sm:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-md focus:ring-4 focus:ring-blue-300 w-full"
          >
            Submit Application
          </button>
        </div>
      </form>
      {submissionStatus && (
        <p className="mt-4 text-center text-green-400">{submissionStatus}</p>
      )}
    </div>
  );
};

export default CityOrganizer;
