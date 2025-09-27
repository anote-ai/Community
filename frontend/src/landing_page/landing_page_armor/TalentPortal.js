import React, { useState } from "react";

const TalentPortal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    linkedin: "",
    idealRole: "",
    resume: null, // File upload
    interests: "",
    shareInfo: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, shareInfo: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    setSubmissionStatus("Thank you for joining the talent pool!");
    setFormData({
      name: "",
      email: "",
      skills: "",
      linkedin: "",
      idealRole: "",
      resume: null,
      interests: "",
      shareInfo: false,
    });

    setTimeout(() => {
      setSubmissionStatus("");
      window.location.href = "https://join.slack.com/t/anote-ai/shared_invite/zt-2vdh1p5xt-KWvtBZEprhrCzU6wrRPwNA";
    }, 2000);
  };

  return (
    <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold text-center mb-4">Talent Portal</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Join the talent pool and connect with like-minded professionals!
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
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
          {/* Email Address */}
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
          {/* Skills */}
          <div>
            <label className="block text-sm mb-1">Skills (comma-separated)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* LinkedIn Profile */}
          <div>
            <label className="block text-sm mb-1">LinkedIn Profile URL</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Ideal Role */}
          <div>
            <label className="block text-sm mb-1">Ideal Role</label>
            <input
              type="text"
              name="idealRole"
              value={formData.idealRole}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Resume Upload */}
          <div>
            <label className="block text-sm mb-1">Upload Resume (PDF only)</label>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="resume-upload"
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-400 focus:ring-4 focus:ring-blue-300"
              >
                Choose File
              </label>
              <input
                type="file"
                id="resume-upload"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-gray-400">
                {formData.resume ? formData.resume.name : "No file chosen"}
              </span>
            </div>
          </div>
          {/* Interests */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1">What are you interested in?</label>
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Share Information */}
          <div className="sm:col-span-2 flex items-center text-center">
            <input
              type="checkbox"
              name="shareInfo"
              checked={formData.shareInfo}
              onChange={handleCheckboxChange}
              className="mr-2 focus:ring-2 focus:ring-blue-400"
            />
            <label className="text-sm">I agree to share my information with potential teammates.</label>
          </div>
          {/* Submit Button */}
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 rounded-md focus:ring-4 focus:ring-blue-300 w-full"
            >
              Submit
            </button>
          </div>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-center text-sm text-green-400">{submissionStatus}</p>
        )}
        <p className="text-center mt-4 text-sm">
          Email{" "}
          <a
            href="mailto:nvidra@anote.ai"
            className="text-blue-400 underline"
          >
            nvidra@anote.ai
          </a>{" "}
          for questions.
        </p>
      </div>
    </div>
  );
};

export default TalentPortal;
