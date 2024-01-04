import "./style.scss";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-start align-items-start">
            <h1>CREATED BY NERMON</h1>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />

          </div>
          <div className="col-lg-4 d-flex justify-content-end align-items-end">
            <h1>+994 (70) 777-77-77</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
