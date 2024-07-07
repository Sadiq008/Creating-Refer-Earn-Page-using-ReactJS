import React, { useState, useEffect } from "react";
import axios from "axios";

function Modal({ closeModal, initialValues }) {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [courseName, setCourseName] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track if form has been submitted
  const [referralData, setReferralData] = useState(null); // State to hold fetched referral data

  // useEffect to set initial values if provided
  useEffect(() => {
    if (initialValues) {
      setReferrerName(initialValues.referrerName || "");
      setReferrerEmail(initialValues.referrerEmail || "");
      setRefereeName(initialValues.refereeName || "");
      setRefereeEmail(initialValues.refereeEmail || "");
      setCourseName(initialValues.courseName || "");
    }
  }, [initialValues]);

  // Function to fetch referral data
  const fetchReferralData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/referrals");
      setReferralData(response.data); // Assuming response.data is an array of referral objects
    } catch (error) {
      console.error("Error fetching referral data:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/api/referrals", {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        courseName,
      });

      console.log("Referral data saved:", response.data);
      setSubmitted(true); // Set submitted state to true after successful submission
      fetchReferralData(); // Fetch referral data after submission
      closeModal();
    } catch (error) {
      console.error("Error saving referral:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Refer a Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Friend's Name</label>
            <input
              type="text"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Friend's Email</label>
            <input
              type="email"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && referralData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Referral Data</h3>
            <ul>
              {referralData.map((referral, index) => (
                <li key={index}>
                  <strong>Referrer Name:</strong> {referral.referrerName}
                  <br />
                  <strong>Referee Name:</strong> {referral.refereeName}
                  <br />
                  <strong>Course Name:</strong> {referral.courseName}
                  <br />
                  {/* Add more fields as needed */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
