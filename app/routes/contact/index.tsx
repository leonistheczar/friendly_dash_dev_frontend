import type { Route } from "./+types/index";
import { useEffect, useState, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | Freindly Dash Developer" },
    {
      name: "description",
      content:
        "Custom React Router-based website, focuses on Portfolio and Blogs!!",
    },
  ];
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  // Animation state for form submission
  const [showMessage, setShowMessage] = useState(false); 
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="bg-gray-900 max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl sm:text-3xl font-bold my-2 text-white">
        Contact Me 📬
      </h2>
      <form action={"https://formspree.io/f/xrelnokg"} ref={formRef} method="post" className="flex flex-col gap-4 text-white p-4">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm sm:text-base" htmlFor="name">
            Full Name
          </label>
          <input
            className="placeholder:text-sm w-full bg-gray-800 p-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-blue-600 focus:bg-gray-900"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm sm:text-base" htmlFor="email">
            Email
          </label>
          <input
            className="placeholder:text-sm w-full bg-gray-800 p-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-blue-600 focus:bg-gray-900"
            type="email" 
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm sm:text-base" htmlFor="subject">
            Subject
          </label>
          <input
            className="placeholder:text-sm w-full bg-gray-800 p-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-blue-600 focus:bg-gray-900"
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter the subject"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm sm:text-base" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here..."
            className="bg-gray-800 rounded-lg p-2 transition-all outline-none focus:ring-2 focus:ring-blue-600 focus:bg-gray-900 placeholder:text-sm"
            cols={10}
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={() => { 
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;