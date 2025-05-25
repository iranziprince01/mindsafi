import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mindsafi</h3>
            <p className="text-gray-300 mb-6">
              Building mental resilience and transforming lives across Africa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mindsafi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mind-safi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white">
                  Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-300 hover:text-white">
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="text-gray-300 hover:text-white"
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Kigali, Rwanda</li>
              <li>info.mindsafi@gmail.com</li>
              <li>+250 782 485 566</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg w-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#ffe600]"
              />
              <button className="bg-[#ffe600] text-[#002e6d] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Mindsafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
