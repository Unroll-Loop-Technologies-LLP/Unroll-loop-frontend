import { useState } from "react";
import axios from "axios";
import contactImage from "../assets/contactus.jpeg";
import LoadingVideo from "../assets/loading.mp4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactHandler = async () => {
    try {
      setLoading(true);

      // Validate email format
      if (!isValidEmail(email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      const response = await axios.post(
        "https://unroll-loop-backend.onrender.com/send-email",
        {
          to: "unrollloop@gmail.com", // Replace with the recipient's email
          subject: "Contact Form Submission",
          text: `Email: ${email}\n\nMessage: ${message}`,
        }
      );

      console.log(response.data);

      // Display success toast
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);

      // Display error toast
      toast.error("Error sending email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    // Email validation regex (basic format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <img
          src={contactImage}
          alt="image"
          className="h-full md:h-64 lg:h-full object-cover w-full"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex relative">
        <ToastContainer />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-20">
            <video
              src={LoadingVideo}
              autoPlay
              loop
              className="w-32 h-32"
              alt="Loading"
            />
          </div>
        )}
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Please Provide your Query
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            onClick={contactHandler}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          <div className="text-black font-medium mt-4">Address:</div>
          <div className="text-gray-800">Unroll Loop Technologies LLP</div>
          <div className="text-gray-800">Sagara, Karnataka, India - 577401</div>
          <a
            className="text-gray-800 no-underline font-semibold"
            href="mailto:contact@unrollloop.com"
          >
            contact@unrollloop.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
