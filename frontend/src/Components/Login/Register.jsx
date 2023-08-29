import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/apiRequest";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import "./login.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      phone: phone,
    };
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Register</h2>
            <div class="input-field">
              <i>
                {" "}
                <FaUser />{" "}
              </i>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="input-field">
              <i>
                <MdEmail />
              </i>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="input-field">
              <i>
                <RiLockPasswordLine />
              </i>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="input-field">
              <i>
                <FaPhone />
              </i>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <input
              onClick={handleRegister}
              type="submit"
              value="Register"
              class="btn solid"
            />
            <p class="social-text">Or Register in with social platforms</p>

            <div class="social-media">
              <div href="#" class="social-icon">
                <i class="icon">
                  {" "}
                  <FaFacebookSquare />
                </i>
              </div>
              <div href="#" class="social-icon">
                <i class="icon">
                  {" "}
                  <FaTwitterSquare />
                </i>
              </div>
              <div href="#" class="social-icon">
                <i class="icon">
                  {" "}
                  <FaGooglePlusSquare />
                </i>
              </div>
              <div href="#" class="social-icon">
                <i class="icon">
                  {" "}
                  <FaLinkedin />
                </i>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>EBook - Store</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              onClick={() => {
                navigate("/login");
              }}
              class="btn transparent"
              id="sign-up-btn"
            >
              Sign in
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
