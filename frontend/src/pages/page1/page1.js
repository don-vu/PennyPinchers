import "./page1.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../../img/background.png";

function Page1() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/signup');
  };

  return (
    <div className="form">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <Form>
        <Form.Group controlId="formBasicEmail" className="border">
          <h1>Login </h1>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
          <Button className="submit" variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
        <Button className="redirect" variant="secondary" onClick={handleClick}>Don't Have an account? Sign Up here!</Button>
      </Form>
    </div>
  );
}

export default Page1;
