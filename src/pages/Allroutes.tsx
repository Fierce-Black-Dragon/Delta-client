import { Routes, Route, Link } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Profile from "./Profile";
const AllRoutes = () => {
  return (
    <div className="">
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Auth isRegistering={false} />} />
        <Route path="/auth/register" element={<Auth isRegistering />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
