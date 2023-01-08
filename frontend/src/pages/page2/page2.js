import axios from "axios";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Page1() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.userName.value, event.target.password.value);
    const person = {
      userName: event.target.userName.value,
      password: event.target.password.value,
    };
    axios.post("http://localhost:8080/api/persons", person)
  };

  return (

    <div>
      <h1>SignUp </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="userName"/>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" name="password"/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );

}

export default Page1;