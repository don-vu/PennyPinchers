import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PieChart } from "react-minimal-pie-chart";
import "./page4.css";
import Table from "react-bootstrap/Table";
import React, { useState } from "react";

function Page4() {
  const [assets, setAssets] = useState([]);
  axios
    .get("https://localhost:8080/api/assets")
    .then((res) => {
      return JSON.parse(res.data);
    })
    .then((res) => {
        setAssets(res);
    });

  // total of amounts in assets
  const total = assets.reduce((acc, asset) => {
    return acc + Number(asset.amount); 
  }, 0);
  
  const data = assets.map((asset) => {
    return {
      title: asset.asset,
      value: asset.amount / total * 100,
      color: asset.color,
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      asset: event.target.asset.value,
      amount: event.target.amount.value,
    };
    axios.post("https://localhost:8080/api/assets", obj);
    setTimeout(function() {
      axios
        .get("https://localhost:8080/api/assets")
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
          {console.log(total)}
          {assets.map((asset) => (
            <tr>
              <td style={{color: asset.color}}>{asset.asset}</td>
              <td>{asset.amount}</td>
            </tr>
          ))}
          <tr><td>Total: ${total}</td></tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Page4;
