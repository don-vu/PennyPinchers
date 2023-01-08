import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PieChart } from "react-minimal-pie-chart";
import "./page4.css";


function page4() {
  const data = [
    { title: "One", value: 10, color: "#E38627", label: "10%" },
    { title: "Two", value: 15, color: "#C13C37", label: "15%" },
    { title: "Three", value: 20, color: "#6A2135", label: "20%" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <PieChart className="piechart" data={data} />;
      <Form>
        <Form.Group controlId="formBasicInput">
          <h1>Sign up</h1>
          <Form.Label>Income source</Form.Label>
          <Form.Control type="text" name="asset"/>
          <Form.Label>$</Form.Label>
          <Form.Control type="number" name="value"/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default page4;
