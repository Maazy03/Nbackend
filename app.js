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
  console.log("REQUEST", req.body);
  let { firstNo, secondNo, operator } = req.body;

  let firstNumber = Number(firstNo);
  let secondNumber = Number(secondNo);

  let result;
  if (operator === "+") {
    console.log("IF 1");
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    console.log("IF 2");
    result = firstNumber - secondNumber;
  } else if (operator === "/") {
    console.log("IF 3");
    result = firstNumber / secondNumber;
  } else {
    console.log("IF 4");
    result = firstNumber * secondNumber;
  }

  console.log("RESULT", result);

  res.json({ response: result });
  // however, if I send res.json(req.body), the response is empty in Network tab
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
