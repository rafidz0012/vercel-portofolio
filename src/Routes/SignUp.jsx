import SignUpImg from "../asset/2.svg";
import { Link } from "react-router-dom";
import "../style/Login.css";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("check your email");
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
          <img src={SignUpImg} alt="" className="login-img" />
        </div>
        <div className="form-container">
          <div className="form-text">Sign Up</div>
          <form onSubmit={handleSubmit} className="form-box">
            <label>
              Email{" "}
              <input
                type="email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                name="email"
                required
              />
            </label>
            <label>
              Password{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                name="password"
                required
              />
            </label>
            <div>
              Klik untuk membuat akun baru
              <Link to="/" className="link link-signup">
                Sign In
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

export default SignUp;
