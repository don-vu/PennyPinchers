import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PieChart } from "react-minimal-pie-chart";
import "./page4.css";
import Table from "react-bootstrap/Table";
import React, { useState } from "react";

function Page4() {
  const data = [
    { title: "One", value: 10, color: "#E38627", label: "10%" },
    { title: "Two", value: 15, color: "#C13C37", label: "15%" },
    { title: "Three", value: 20, color: "#6A2135", label: "20%" },
  ];
  const [assets, setAssets] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      asset: event.target.asset.value,
      amount: event.target.amount.value,
    };
    axios.post("http://localhost:8080/api/assets", obj);
    setTimeout(function() {
      axios
        .get("http://localhost:8080/api/assets")
        .then((res) => {
          return JSON.parse(res.data);
        })
        .then((res) => {
            setAssets(res);
        });
    }, 500)
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Income source</Form.Label>
          <Form.Control type="text" name="asset" />
          <Form.Label>$</Form.Label>
          <Form.Control type="number" name="amount" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <PieChart className="piechart" data={data} />;
      <Table borderded hover>
        <thead>
          <tr>
            <th>Income source</th>
            <th>$</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr>
              <td>{asset.asset}</td>
              <td>{asset.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Page4;
