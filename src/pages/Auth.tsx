import React, { useState } from "react";
// import { Response } from 'express';

const initialState = {
  name: "",

  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = (props: { isRegistering: boolean }) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Response = await fetch("http://localhost:4000/api/v1/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });
    let data = await Response.json();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
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
    </div>
  );
};

export default Auth;
