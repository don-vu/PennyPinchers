import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import './page2.css';

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
  const navigate = useNavigate();

  return (

    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="border">
          <h1>Sign up</h1>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="userName"/>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" name="password"/>
          <Button onClick={() => navigate("/dashboard")}className="submit" variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );

}

export default Page1;