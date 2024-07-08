const express = require("express");
const app = express();
app.use(express.json());
const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloGET', (req, res) => {
  res.send('Hello World!');
});

const docs ={
  "name": "gcd",
  "description": "Greater Common Divisor",
  "input": {
      "type": "object",
      "properties":{
        "a": {
          "type": "number",
          "description": "First integer to compute gcd",
          "example": "78"
        },
        "b": {
          "type": "number",
          "description": "Second integer to compute gcd",
          "example": "14"
        }
      },
      "required": ["a", "b"]
  },
  "output": {
    "type": "number",
    "description": "Greater Common Divisor of the two integers given",
    "example": 2
  }
}

function rgcd(a, b) {
  if (b == 0) return a;
  else return rgcd(b, a % b);
}
const gcd = async (req, res) => {
  const { input } = req.body;
  const { a, b } = input;
  const output = rgcd(a, b);
  res.send({ output });
};

app.post("/functions/gcd", gcd);
app.get("/functions/gcd", (req, res) => {
  res.json(docs);
});

exports.gcd = app;