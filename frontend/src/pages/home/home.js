import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page, PENNY PINCHER!</p>
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
    </div>
  );
}

export default Home;
