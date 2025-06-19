"use client";

import { useState } from "react";

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempErrors = {};

    if (!form.name.trim()) tempErrors.name = "Full name is required";
    if (!form.email.trim()) tempErrors.email = "Email is required";
    else if (!validateEmail(form.email)) tempErrors.email = "Invalid email";
    if (!form.company.trim()) tempErrors.company = "Company is required";
    if (!form.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert("Form submitted!");
      setForm({ name: "", email: "", company: "", message: "" });
    }
  };

  return (
    <section className="bg-white " id="contact">
      <div className="w-full bg-[#0067B1] md:px-20 md:py-30 py-15 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 space-y-4 text-gray-700 order-2 md:order-1">
            <h1 className="md:text-5xl md:block lg:text-5xl lg:block hidden text-2xl  font-semibold mb-4 text-white pt-4">
              Get in Touch
            </h1>
            <div className="h-[2px] md:block lg:block hidden w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>
            <span className="md:text-2xl text-lg font-semibold text-white py-4 inline-block">
              For general enquiries
            </span>{" "}
            <p className="md:text-lg text-medium text-white ">
              <strong>Address:</strong>
              <br></br>110, 16th Road, Chembur, Mumbai - 400071
            </p>{" "}
            <p className="md:text-lg text-medium text-white py-4">
              <strong>Phone:</strong> <br></br> +91 22 25208822
            </p>
            <p className="md:text-lg text-medium text-white ">
              <strong>Email:</strong>
              <br></br> info@supremegroup.co.in
            </p>{" "}
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h1 className="md:text-5xl md:hidden lg:text-5xl lg:hidden  text-2xl  font-semibold mb-4 text-white pt-4">
              Get in Touch
            </h1>
            <div className="h-[2px] md:hidden lg:hidden w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full border-b-2 border-white text-white py-3  placeholder-white text-medium md:text-lg focus:border-white  focus:outline-none"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full border-b-2 border-white text-white py-3  placeholder-white text-medium md:text-lg focus:border-white  focus:outline-none"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-1 w-full border-b-2 border-white text-white placeholder-white text-medium md:text-lg py-3 focus:border-white  focus:outline-none"
                />
                {errors.company && (
                  <p className="text-sm text-red-600 mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  placeholder="Message"
                  onChange={handleChange}
                  className="mt-1 w-full border-b-2 border-white text-medium md:text-lg text-white py-2 placeholder-white focus:border-white  focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="text-white bg-[#0067B1] w-full md:w-auto px-10 py-3 rounded-full border-1  hover:bg-white hover:text-black transition-all duration-700 ease-in-out cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
