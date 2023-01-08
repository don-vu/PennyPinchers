import "./home.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Home() {
  const { user, setUser } = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="containerHome">
      <div className="borderHome">
        <h1>Home</h1>
        <p>Welcome to the home page, PENNY PINCHER!</p>
        <p>
          Being a student is stressful enough, let us relieve some of the stress
          by helping you organize your funds. Based on your selected criteria,
          we will help you generate a customized plan so you can keep track of
          how much you spend for each category every month for the length of
          your academic term
        </p>
      </div>
    </div>
  );
}

export default Home;
