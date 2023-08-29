import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_footer">
        <div className="row_footer">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <a href="#">Book</a>
              </li>
              <li>
                <a href="#">User</a>
              </li>
              <li>
                <a href="#">Book New</a>
              </li>
              <li>
                <a href="#">Book Adress </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="aaaaa">
                <FaFacebookSquare size={26} /></i>
              </a>
              <a href="#">
                <i className="aaaaa">
                <FaTwitterSquare size={26} /></i>
              </a>
              <a href="#">
                <i className="aaaaa">
                <FaGooglePlusSquare size={26} /></i>
              </a>
              <a href="#">
                <i className="aaaaa">
                <FaLinkedin size={26}  /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
