"use client";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";
import { toast } from "react-toastify";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  message: "",
};

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


const SContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      return toast.warning("Please enter your name to continue.");
    }
    if (!formData.email.trim()) {
      return toast.warning("Please enter your email to continue.");
    }
    if (!formData.message.trim()) {
      return toast.warning("Please enter your message to continue.");
    }
    if (!isValidEmail(formData.email.trim())) {
      return toast.warning("Please enter valid email to continue.");
    }
    try {
      const payload = {
        name:formData.name.trim(),
        email:formData.email.trim(),
        message:formData.message.trim()
      }
      setIsLoading(true);
      await fetch(
        `https://portfolio-backend-seven-roan.vercel.app/api/v1/send-email`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      toast.success("Submission successful! We’ll be in touch shortly.");
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      toast.error(error.message);
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <section
      className="bg-white py-6 rounded-xl px-6"
      id="contact"
      style={{ scrollMarginTop: "100px" }}
    >
      <p className="text-center">Contact</p>
      <h3 className="text-center text-2xl font-bold py-2">
        Get in Touch With Me!
      </h3>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="border border-offWhite rounded-xl p-6 grid gap-10">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <FaHome /> Address
            </h3>
            <p className="text-sm">
              N-55 Gurudwara Road, Mohan Garden, New Delhi - 110059
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <FaPhoneAlt /> Mobile Number
            </h3>
            <p className="text-sm">8373975627</p>
          </div>
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <FaEnvelope /> Email
            </h3>
            <p className="text-sm">webdev.sandeepkumar@gmail.com</p>
          </div>
        </div>
        <form
          className="border border-offWhite rounded-xl p-6 grid gap-6 grid-cols-1 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1">
            <label htmlFor="full-name" className="font-semibold mb-2 block">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="Your Name Here..."
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="border border-offWhite bg-offWhite py-2 w-full px-2 text-sm rounded-md focus:outline-none block"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="email" className="font-semibold mb-2 block">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email Here..."
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="border border-offWhite bg-offWhite py-2 w-full px-2 text-sm rounded-md focus:outline-none block"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="message" className="font-semibold mb-2 block">
              Your Message
            </label>
            <textarea
              id="message"
              type="text"
              placeholder="Your Message Here..."
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              className="border border-offWhite bg-offWhite py-2 w-full px-2 text-sm rounded-md focus:outline-none block"
            />
          </div>
          <button
            className={`border border-primary bg-primary text-white rounded-md py-2 hover:bg-white hover:text-primary disabled:bg-gray-300 disabled:border-gray-400 disabled:hover:text-white`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SContactUs;
