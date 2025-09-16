import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "pranshu.pandey@example.com",
      action: "mailto:pranshu.pandey@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+91 98765 43210",
      action: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Kanpur, Uttar Pradesh",
      action: null,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tittle: "",
    message: "",
  });

  // FIX 1: Corrected form data handler
  const handleFormData = (e) => {
    const { name, value } = e.target;
    // console.log("🚀 ~ handleFormData ~ e:", e)
    // console.log("🚀 ~ handleFormData ~ e.target:", e.target);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // FIX 2: Added form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = `${import.meta.env.VITE_Email_Service_ID}`;
    const templateId = `${import.meta.env.VITE_Email_Template_ID}`;
    const publicKey = `${import.meta.env.VITE_Email_Public_Key}`;

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        // Optional: Form reset
        setFormData({
          name: "",
          email: "",
          tittle: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center gap-8 sm:px-10 w-full">
      <div className="flex flex-col items-center justify-center gap-4 mt-10 text-center text-gray-400">
        <div className="px-4 py-1 border rounded-2xl text-sm bg-gray-950 font-bold">
          <span className="text-gray-200">Get in Touch</span>
        </div>
        <h2 className="text-3xl text-gray-200">Let's Work Together</h2>
        <p>
          I'm always open to discussing new opportunities, interesting projects,
          and creative ideas. Feel free to reach out if you'd like to connect!
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-12 mt-10 flex-1 basis-1">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="flex flex-col gap-10 mt-14 lg:m-0 text-sm text-gray-400 w-full">
            <h2 className="font-bold text-2xl text-gray-200">
              Contact Information
            </h2>
            <div className="flex flex-col flex-wrap gap-2 text-gray-200 font-medium">
              {contactInfo.map((val, idx) => (
                <div key={idx} className="flex flex-wrap gap-4">
                  <div className="items-center bg-gray-700 p-2 rounded-xl">
                    <val.icon size={32} className="w-full h-full" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-lg">{val.title}</h2>
                    <h2 className="text-sm text-gray-400">{val.description}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white bg-gray-900 rounded-2xl p-5 w-full space-y-6">
            <h2 className="font-bold text-lg">Why work with me</h2>
            <ul className="space-y-4 text-gray-400 list-disc pl-4">
              <li>5+ years of professional experience</li>
              <li>Strong focus on clean, maintainable code</li>
              <li>Excellent communication and collaboration</li>
              <li>Commitment to meeting deadlines</li>
              <li>Passion for learning new technologies</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-gray-200 border border-gray-700 rounded-lg p-4 w-full mb-4">
          <div className="space-y-2">
            <h2 className="font-medium text-lg">Send me a Message</h2>
            <p className="text-sm text-gray-400">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>
          </div>
          {/* FIX 3: Added onSubmit handler */}
          <form onSubmit={handleSubmit} autoComplete="on" className="space-y-4">
            <fieldset className="w-full border border-gray-700 rounded-lg p-3">
              <legend className="px-2 text-sm">Name</legend>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                className="w-full bg-transparent outline-none"
                value={formData.name} // FIX 4: Controlled component
                onChange={handleFormData} // FIX 5: Added onChange handler
              />
            </fieldset>

            <fieldset className="w-full border border-gray-700 rounded-lg p-3">
              <legend className="px-2 text-sm">Email</legend>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className="w-full bg-transparent outline-none"
                value={formData.email}
                onChange={handleFormData}
              />
            </fieldset>

            <fieldset className="w-full border border-gray-700 rounded-lg p-3">
              <legend className="px-2 text-sm">Subject</legend>
              <input
                type="text"
                placeholder="Enter subject"
                name="tittle"
                required
                className="w-full bg-transparent outline-none"
                value={formData.tittle}
                onChange={handleFormData}
              />
            </fieldset>

            <fieldset className="w-full border border-gray-700 rounded-lg p-3">
              <legend className="px-2 text-sm">Message</legend>
              <textarea
                placeholder="Enter your message"
                name="message"
                required
                rows="4"
                className="w-full bg-transparent outline-none resize-none"
                value={formData.message}
                onChange={handleFormData}
              ></textarea>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
