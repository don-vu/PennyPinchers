import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Page1() {
  return (

    <div>
      <h1>Login </h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <button>Don't Have an account? Sign Up here!</button>
    </div>
  );

}

export default Page1;