const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("build"));


const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
