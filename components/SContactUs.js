"use client";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";

const SContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
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
              className="border border-offWhite bg-offWhite py-2 w-full px-2 text-sm rounded-md focus:outline-none block"
            />
          </div>
          <button className="border border-primary bg-primary text-white rounded-md py-2 hover:bg-white hover:text-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SContactUs;
