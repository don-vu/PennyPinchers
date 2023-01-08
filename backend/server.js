const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://demo:admin@cluster0.hlvpvjl.mongodb.net/pennypinchers?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("build"));


const personSchema = new mongoose.Schema({
  id: Number,
  userName: String,
  password: String,
});

const Person = mongoose.model("Person", personSchema, "users");
// app.get("/api/persons", (request, response) => {
//   response.json(people[0]);
// });

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


const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
