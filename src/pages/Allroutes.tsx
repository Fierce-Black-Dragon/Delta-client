import { Routes, Route, Link } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
const AllRoutes = () => {
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Auth isRegistering={false} />} />
        <Route path="/auth/register" element={<Auth isRegistering />} />
      </Routes>
      ;
    </div>
  );
};
export default AllRoutes;
