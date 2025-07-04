import React, { useState } from "react";
import {assets} from "../assets/assets";


const Contact = () =>{
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ email: '', message: '' });

    const handleClick = () => {
        setIsVisible(true);

        setTimeout(() => {
        setIsVisible(false);
        }, 3000);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setFormData({ email: '', message: '' });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
    };


    return(
        <div className="w-full px-4 py-12 flex justify-center items-center bg-gray-50">
  {/* Success Toast Message */}
  {isVisible && (
    <div className="fixed top-6 right-6 bg-green-100 text-green-800 border border-green-300 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
      ✅ Message Sent Successfully!
    </div>
  )}

  <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
    {/* Left Image and Text */}
    <div className="bg-primary text-white flex flex-col justify-center items-start p-8 space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold">Let’s Talk!</h2>
      <p className="text-base leading-relaxed">
        We’re so glad you’re thinking of connecting with us! Whether it’s a small query or a big idea, 
        we’d love to hear from you. We care about your well-being, and every message helps us improve.
      </p>
      <img
        src={assets.contact_image}
        alt="Doctor and Patient"
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Right Contact Form */}
    <div className="p-8 flex flex-col justify-center">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
        <div className="w-20 h-1 bg-primary mt-2 mb-4"></div>
        <p className="text-gray-600 text-sm">
          Let us know your experience with <b>medix</b> or just say hi. We’ll get back to you soon!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="e-address" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="e-address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="msg" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="msg"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            onClick={handleClick}
            className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>


    )
}

export default Contact;