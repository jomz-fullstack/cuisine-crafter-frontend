import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Eye from "../assets/Eye.png";

const SignUp = ({ signup }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

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
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (passwordRef.current) {
      passwordRef.current.type = showPassword ? "password" : "text";
    }
    if (confirmPasswordRef.current) {
      confirmPasswordRef.current.type = showPassword ? "password" : "text";
    }
  };

  return (
    <div className="sign-up-container">
      <h1 className="header">No Login? Sign up today!</h1>
      <form ref={formRef} className="input-container" onSubmit={handleSignUpSubmit}>
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
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
          required
          className="login-input-box"
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? (
            <img src={Eye} alt="Hide Password" className="eye-icon" />
          ) : (
            <img src={Eye} alt="Show Password" className="eye-icon" />
          )}
        </button>{" "}
        <br />
        Confirm Password: <br />
        <input
          ref={confirmPasswordRef}
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
          required
          className="login-input-box"
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? (
            <img src={Eye} alt="Hide Password" className="eye-icon" />
          ) : (
            <img src={Eye} alt="Show Password" className="eye-icon" />
          )}
        </button>
        <br />
        <button type="submit"  className="login-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;