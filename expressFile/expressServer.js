import express from "express";
const Port = 9090;
const app = express();

app.get("/", (req, res) => {});

app.get("/signup", (req, res) => {});

app.get("/signup", (req, res) => {});

app.listen(Port, () => {
  console.log(`server is running port no http://localhost:${Port}/`);
});
