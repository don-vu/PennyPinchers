import axios from "axios";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.asset.value, event.target.amount.value);
    const obj = {
      asset: event.target.asset.value,
      amount: event.target.amount.value,
    };
    axios.post("http://localhost:8080/api/assets", obj);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Income source</Form.Label>
          <Form.Control type="text" name="asset"/>
          <Form.Label>$</Form.Label>
          <Form.Control type="number" name="amount"/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <PieChart className="piechart" data={data} />;
    </div>
  );
}

export default page4;
