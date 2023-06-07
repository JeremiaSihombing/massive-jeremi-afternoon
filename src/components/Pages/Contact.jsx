import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan sesuatu dengan data form yang disubmit
    console.log({
      firstName,
      lastName,
      email,
      phone,
      message,
      accepted,
    });

    // Reset nilai input setelah submit
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setAccepted(false);
  };

  return (
    <div className="bg-gray-900 pb-6">
      <div className="pt-20 text-white  " id="contact">
        <h1 className="text-center font-bold text-[40px]">Contact Me</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-4  ">
        <div className="mb-4 mt-3">
          <label htmlFor="firstName" className="block mb-2 font-light text-white">
            First Name
          </label>
          <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 font-light text-white">
            Last Name
          </label>
          <input type="text" id="lastName" placeholder=" Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-light text-white">
            Email
          </label>
          <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-light text-white">
            Phone Number
          </label>
          <input type="tel" id="phone" placeholder=" Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-light text-white">
            Message
          </label>
          <textarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="accept" className="flex items-center font-light text-white">
            <input type="checkbox" id="accept" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mr-2" />
            You agree to our friendly privacy policy.
          </label>
        </div>
        <button type="submit" className="bg-[#7562E0] hover:bg-gray-600 text-white font-medium py-2 px-4 rounded cursor-pointer block mx-auto">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
