import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>MOBOGGA</h1>
      <Link to="/login">
        <button id="login-button">로그인하기</button>
      </Link>
    </div>
  );
};

export default Home;
