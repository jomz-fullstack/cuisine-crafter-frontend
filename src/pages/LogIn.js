import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Eye from "../assets/Eye.png";
import SignUp from "./SignUp";

const Login = ({ login, signup }) => {
  const loginFormRef = useRef();
  const signupFormRef = useRef();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    passwordInputRef.current = document.getElementsByName("password")[0];
  }, []);

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(loginFormRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    navigate("/");
    e.target.reset();
  };

  const toggleLoginPasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (passwordInputRef.current) {
      passwordInputRef.current.type = showPassword ? "password" : "text";
    }
  };

  return (
    <div className="login-page-container">
      <div className="sign-in-container">
        <h1 className="header">Login</h1>
        <form
          ref={loginFormRef}
          onSubmit={handleSignInSubmit}
          className="input-container"
          required
        >
          Email: <br />{" "}
          <input
            type="email"
            name="email"
            placeholder="email"
            className="login-input-box"
          />
          <br />
          Password: <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="login-input-box"
            required
          />
          <button type="button" onClick={toggleLoginPasswordVisibility}>
            {showPassword ? (
              <img src={Eye} alt="Hide Password" className="eye-icon" />
            ) : (
              <img src={Eye} alt="Show Password" className="eye-icon" />
            )}
          </button>
          <br />
          <button type="submit" className="login-submit">
            Login
          </button>
          </form>
      </div>
      <SignUp signup={signup} />
    </div>
  );
};

export default Login;