import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 md:gap-28  text-center mb-5 ">
        {/* Left Section */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start">
          <img
            src={assets.logo}
            alt="Company Logo"
            className="pb-4 h-12 justify-self-center"
          />
          <p className="text-sm text-center md:text-left">
            Effortlessly schedule appointments online with our user-friendly system, view available time slots, select your preferred service, and instantly book your session with just a few clicks - all from the convenience of your device
          </p>
        </div>

        {/* Company Links */}
        <div className="md:col-span-1  flex flex-col items-center md:items-start lg:m-0 mt-5">
          <h4 className="pb-5 font-bold text-lg">COMPANY</h4>
          <ul className="space-y-2 ">
            <li>
              <Link to="/" className="text-sm ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm ">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-sm ">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm ">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch Links */}
        <div className="md:col-span-1 flex flex-col items-center lg:m-0 mt-5">
          <h4 className="pb-5 font-bold text-lg">GET IN TOUCH</h4>
          <ul className="space-y-2 ">
            <li>
              <a href="tel:+91 1234567890" className="text-sm">
                +91 1234567890
              </a>
            </li>
            <li>
              <a href="nsut@gmail.com" className="text-sm">
                nsut@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Copy right statment */}
      <hr className="my-4 border-gray-300" />

      <div className="grid-cols-4 text-center mb-3">
        <span>Copyright © 2024 JC - All Right Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
