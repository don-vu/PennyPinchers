const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { response } = require("express");

const url =
  "mongodb+srv://demo:admin@cluster0.hlvpvjl.mongodb.net/pennypinchers?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

const assets = [
]


const personSchema = new mongoose.Schema({
  id: Number,
  userName: String,
  password: String,
});
const Person = mongoose.model("Person", personSchema, "users");

const assetSchema = new mongoose.Schema({
  id: Number,
  asset: String,
  amount: Number,
});
const Asset = mongoose.model("Asset", assetSchema, "income_sources");

app.post("/api/persons", (request, response) => {
  const body = request.body;
  mongoose.connect(url).then((result) => {
    console.log("connected to MongoDB");
  
    const person = new Person({
      // random number between 1 and 1000
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
      userName: `${body.userName}`,
      password: `${body.password}`,
    });
  
    return person.save();
  }).then(() => {
    console.log("person saved!");
    return mongoose.connection.close();
  })
  response.json("ok");
});


// app.post("/api/assets", (request, response) => {
//   const body = request.body;
//   mongoose.connect(url).then((result) => {
//     console.log("connected to MongoDB");
  
//     const asset = new Asset({
//       // random number between 1 and 1000
//       id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
//       asset: `${body.asset}`,
//       amount: `${body.amount}`,
//     }
//     )
  
//     return asset.save();
//   }).then(() => {
//     console.log("asset saved!");
//     return mongoose.connection.close();
//   })
//   response.json("ok");
// });
app.post("/api/assets", (request, response) => {
  const body = request.body;
    const asset = {
      // random number between 1 and 1000
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
      asset: `${body.asset}`,
      amount: `${body.amount}`,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    }
    assets.push(asset);
    console.log(assets);
  response.json("ok");
});

app.get("/api/assets", (request, response) => {
  response.json(JSON.stringify(assets));
});

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
