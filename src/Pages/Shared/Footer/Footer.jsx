import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 text-gray-300 flex">
      <div className="footer footer-center md:footer custom_container">
        {/* Logo */}
        <div>
          <Link to="/" className="fill-current">
            <img
              src={logo}
              className="w-2/3 sm:w-full mx-auto"
              alt="Website Logo"
            />
          </Link>
          <p className="md:text-left">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        {/* Service */}
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        {/* Company */}
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        {/* Legal */}
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
