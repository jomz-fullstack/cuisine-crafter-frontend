import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ signup }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    console.log("user info: ", userInfo)
    signup(userInfo);
    navigate("/");
    e.target.reset();
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password: <input type="password" name="password" placeholder="password" />
        <br />
        Confirm Password:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
        />
        <button type="submit">Submit</button>
        <br />
      </form>
      <br />
      <div>
        Already registered? <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Signup;
