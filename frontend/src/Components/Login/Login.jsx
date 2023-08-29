import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaUser
} from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"><FaUser/></i>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"><RiLockPasswordLine/></i>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
              />
            </div>
            <input
              onClick={handleLogin}
              type="submit"
              value="Login"
              class="btn solid"
            />
            <p class="social-text">Or Sign in with social platforms</p>
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
                navigate("/register");
              }}
              class="btn transparent"
              id="sign-up-btn"
            >
              Sign Up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
