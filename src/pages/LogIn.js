import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Eye from "../assets/Eye.png";

const Login = ({ login, signup }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const LoginPasswordInputRef = useRef(null);
  const CreatePasswordInputRef = useRef(null);
  const ConfirmPasswordInputRef = useRef(null);

  useEffect(() => {
    LoginPasswordInputRef.current = document.getElementsByName("password")[0];
  }, []);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    console.log("user info: ", userInfo);
    signup(userInfo);
    navigate("/");
    e.target.reset();
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
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
    if (LoginPasswordInputRef.current) {
      LoginPasswordInputRef.current.type = showPassword ? "password" : "text";
    }
  };

  const toggleCreatePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (CreatePasswordInputRef.current) {
      CreatePasswordInputRef.current.type = showPassword ? "password" : "text";
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (ConfirmPasswordInputRef.current) {
      ConfirmPasswordInputRef.current.type = showPassword ? "password" : "text";
    }
  };

  return (
    <div className="login-page-container">
      <div className="sign-in-container">
        <h1 className="header">Login</h1>
        <form
          ref={formRef}
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
      <div className="sign-up-container">
        <h1 className="header">No Login? Sign up today!</h1>
        <form
          ref={formRef}
          onSubmit={handleSignUpSubmit}
          className="input-container"
        >
          Email: <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="login-input-box"
          />
          <br />
          Password: <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="login-input-box"
          />
          <button type="button" onClick={toggleCreatePasswordVisibility}>
            {showPassword ? (
              <img src={Eye} alt="Hide Password" className="eye-icon" />
            ) : (
              <img src={Eye} alt="Show Password" className="eye-icon" />
            )}
          </button>{" "}
          <br />
          Confirm Password: <br />
          <input
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
            required
            className="login-input-box"
          />
          <button type="button" onClick={toggleConfirmPasswordVisibility}>
            {showPassword ? (
              <img src={Eye} alt="Hide Password" className="eye-icon" />
            ) : (
              <img src={Eye} alt="Show Password" className="eye-icon" />
            )}
          </button>
          <br />
          <button type="submit" className="login-submit">
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};
export default Login;