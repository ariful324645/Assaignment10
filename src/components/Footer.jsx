import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" mt-4">
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">Email: support@gmail.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <p className="text-sm">Address: 123 Main Street, City, Country</p>
          </div>

      
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

  
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
