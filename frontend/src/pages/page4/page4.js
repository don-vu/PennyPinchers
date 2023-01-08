import { PieChart } from "react-minimal-pie-chart";
import './page4.css'

function page4() {
  const data = [
    {
      name: "Category 1",
      value: 25,
    },
    {
      name: "Category 2",
      value: 15,
    },
    {
      name: "Category 3",
      value: 35,
    },
    {
      name: "Category 4",
      value: 25,
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <PieChart className="piechart"

        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
      />
      ;
    </div>
  );
}

export default page4;
