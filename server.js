console.log("express...........................................");
const express = require("express");
console.log(express);

console.log("cors..............................................");
const cors = require("cors");
console.log(cors);

console.log("app...............................................");
const app = express();
console.log(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost: ${port}`);
});

// prettier-ignore
const obj = {"name": "Lucycan", "age": 32}

app.get("/", (req, res) => {
  console.log("recieved a get request");
  console.log("req......................................");
  console.log(req.body);
  res.send(obj);
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Data recieved");
});
