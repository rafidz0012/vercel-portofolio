import LoginImg from "../asset/1.svg";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        history("/home");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="my-text">Masak Yuk</div>
      <div className="box-container">
        <div className="img-container">
          <img src={LoginImg} alt="" className="login-img" />
        </div>
        <div className="form-container">
          <div className="form-text">Sign In</div>
          <form onSubmit={handleSubmit} className="form-box">
            <label>
              Email{" "}
              <input
                type="email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label="Email"
                required
              />
            </label>
            <label>
              Password{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                required
              />
            </label>
            <div>
              Klik untuk membuat akun baru
              <Link to="/signup" className="link link-signup">
                Sign Up
              </Link>
            </div>
            <button type="submit" className="login-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
