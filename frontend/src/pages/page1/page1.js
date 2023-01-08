import "./page1.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Page1() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/page2');
  };

  return (
    <div className="form">
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
          <button className="redirect" onClick={handleClick}>Don't Have an account? Sign Up here!</button>
      </Form>
    </div>
  );
}

export default Page1;
