import React, { useState } from "react";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    portfolio: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="career-container">
      <h1>Careers at Social Viral</h1>
      <p>
        Join our growing digital team and help build the future of social media
        growth solutions. Fill out the form below to apply for a position.
      </p>

      <form onSubmit={handleSubmit} className="career-form">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          onChange={handleChange}
          required
        />

        <label>Applying For</label>
        <select name="role" onChange={handleChange} required>
          <option value="">Select role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
          <option value="Customer Support">Customer Support</option>
        </select>

        <label>Experience Level</label>
        <select name="experience" onChange={handleChange} required>
          <option value="">Select experience</option>
          <option value="Fresher">Fresher</option>
          <option value="1-2 Years">1-2 Years</option>
          <option value="3-5 Years">3-5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>

        <label>Portfolio / LinkedIn Profile</label>
        <input
          type="url"
          name="portfolio"
          placeholder="Share your portfolio or LinkedIn"
          onChange={handleChange}
        />

        <label>Upload Resume</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
        />

        <label>Why Should We Hire You?</label>
        <textarea
          name="message"
          placeholder="Tell us about yourself"
          rows="5"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="career-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Career;
