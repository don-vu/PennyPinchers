const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const url =
  "mongodb+srv://demo:admin@cluster0.hlvpvjl.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

const people = [];

const personSchema = new mongoose.Schema({
  userName: String,
  password: String,
});

const Person = mongoose.model("Person", personSchema);

mongoose.connect(url).then((result) => {
  console.log("connected to MongoDB");

  const person = new Person({
    userName: "Mark",
    password: "pennyeater",
  });

  return person.save();
}).then(() => {
  console.log("person saved!");
  return mongoose.connection.close();
})

const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
