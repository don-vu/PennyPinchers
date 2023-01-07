import Form from 'react-bootstrap/Form'
import "./page3.css"
import Button from 'react-bootstrap/Button'


function Page3() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

 

  return (
    <div>
      <header> Sources of Income</header>
      <p>What are your sources of income? </p>

      <Form onSubmit={handleSubmit} controlId="test-p3" >
          <Form.Label>Student Loans</Form.Label>
          <Form.Control type="number" name="p3-email" placeholder="Enter income" />
          {/* <Form.Label>Password</Form.Label> */}
          <Button variant="primary" type="submit">
           Submit
         </Button>
      </Form>

      <Form onSubmit={handleSubmit} controlId="test-p3" >
          <Form.Label>Scholarships</Form.Label>
          <Form.Control type="number" name="p3-email" placeholder="Enter income" />
          {/* <Form.Label>Password</Form.Label> */}
          <Button variant="primary" type="submit">
           Submit
         </Button>
      </Form>

      <Form onSubmit={handleSubmit} controlId="test-p3" >
          <Form.Label>Work</Form.Label>
          <Form.Control type="number" name="p3-email" placeholder="Enter income" />
          {/* <Form.Label>Password</Form.Label> */}
          <Button variant="primary" type="submit">
           Submit
         </Button>
      </Form>

      <Form onSubmit={handleSubmit} controlId="test-p3" >
          <Form.Label>Other</Form.Label>
          <Form.Control type="number" name="p3-email" placeholder="Enter income" />
          {/* <Form.Label>Password</Form.Label> */}
          <Button variant="primary" type="submit">
           Submit
         </Button>
      </Form>
      <Button>Next</Button> 
    </div>
  );
  
}

export default Page3;