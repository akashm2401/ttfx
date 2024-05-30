import React, { useState } from "react";
import "../css/contactUsForm.css";
// import "../css/util.css";
import Image from "../images/img-01.png";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const validateEmail = (email) => {
    const emailRegex =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: form.name.trim() === "",
      email: !validateEmail(form.email),
      subject: form.subject.trim() === "",
      message: form.message.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // Submit form if no errors
      console.log("Form submitted:", form);
    }
  };

  return (
    <div className="contact1">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt>
          <img src={Image} alt="IMG" />
        </div>

        <form className="contact1-form validate-form" onSubmit={handleSubmit}>
          <span className="contact1-form-title">Get in touch</span>

          <div
            className={`wrap-input1 validate-input ${
              errors.name ? "alert-validate" : ""
            }`}
            data-validate="Name is required"
          >
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className={`wrap-input1 validate-input ${
              errors.email ? "alert-validate" : ""
            }`}
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input1"
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className={`wrap-input1 validate-input ${
              errors.subject ? "alert-validate" : ""
            }`}
            data-validate="Subject is required"
          >
            <input
              className="input1"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className={`wrap-input1 validate-input ${
              errors.message ? "alert-validate" : ""
            }`}
            data-validate="Message is required"
          >
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn">
              <span>
                Send Email
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
