const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(cors());

app.post("/", (req, res) => {
  let { firstNo, secondNo, operator } = req.body;

  let result;
  if (operator === "+") {
    result = firstNo + secondNo;
  } else if (operator === "-") {
    result = firstNo - secondNo;
  } else if (operator === "/") {
    result = firstNo / secondNo;
  } else {
    result = firstNo * secondNo;
  }
  res.json({ response: result });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
