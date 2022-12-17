import React, { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const fetchUser = async () => {
    const data = await axios.get("http://localhost:4000/api/v1/profile", {
      withCredentials: true,
      origin: true,
    });
    console.log(data);
    // fetch(loginUrl, {
    //   credentials: "same-origin",
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(this.state),
    // });
  };

  return (
    <div>
      <p>fetch data</p> <button onClick={fetchUser}> fetch</button>
    </div>
  );
};

export default Profile;
