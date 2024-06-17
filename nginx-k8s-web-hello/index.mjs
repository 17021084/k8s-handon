// app.js
import express from "express";
import fetch from "node-fetch";
import ip from "ip";
const containerIP = ip.address();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const hello = "Version 2 " + containerIP;
  console.log(`Container IP: ${containerIP}`);
  res.send(hello);
});

app.get("/nginx", async (req, res) => {
  const url = "http://nginx"; // name same in deployment metadata name
  const response = await fetch(url);
  const text = response.text();
  res.send(text);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
