import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 font-mono ">
      <div className="container  mx-auto px-6 border-t border-gray-800 place-items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-8 p-5">
          {/* About Section */}
          <div className="w-40">
            <h3 className="text-green-400 text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We connect talented individuals with amazing job opportunities.
              Our mission is to make the job search process seamless and
              efficient.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-36">
            <h3 className="text-green-400 text-lg font-bold mb-4">
              Quick Links
            </h3>
            <ul className="text-gray-300">
              <li className="mb-2">
                <a href="/jobs" className="hover:text-green-400">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-green-400">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-60">
            <h3 className="text-green-400 text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: info@jobfinder.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-300 mb-2">
              Address: 123 Job Street, City, Country
            </p>
          </div>

          {/* Social Media Section */}
          <div className="w-60">
            <h3 className="text-green-400 text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
