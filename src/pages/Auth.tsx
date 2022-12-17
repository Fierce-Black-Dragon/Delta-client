import React, { useState } from "react";
// import { Response } from 'express';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",

  email: "",
  password: "",
};
const Auth = (props: { isRegistering: boolean }) => {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const [isSingUp, setSignUp] = useState(props?.isRegistering || false);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await axios.post(
      `http://localhost:4000/api/v1/${isSingUp ? "signup" : "login"}`,
      form
    );
    console.log(res.data);
    if (res.data) {
      navigate("/profile");
    }
  };
  const toggleAuth = () => {
    setSignUp(!isSingUp);
  };
  return (
    <div>
      <h4>{isSingUp ? "Register" : "Login"}</h4>
      <form onSubmit={handleSubmit}>
        {isSingUp ? (
          <div className="">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
        ) : (
          ""
        )}
        <div className="">
          <label htmlFor="email">email</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="">
          <label htmlFor="password"> password</label>
          <input type="text" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        {isSingUp ? "Already a user" : "new user"}{" "}
        <a href="#" onClick={toggleAuth}>
          {isSingUp ? "login" : "new user"}
        </a>
      </p>
    </div>
  );
};

export default Auth;
