// app.js
import express from "express";
import ip from "ip";
import cors from "cors";
const app = express();
const port = 4000;
const containerIP = ip.address();
// Define your CORS options
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};
// Use the CORS middleware with options
app.use(cors(corsOptions));
// Handle preflight requests
app.options("*", cors(corsOptions));

app.get("/", (req, res) => {
  const hello = "Version 2 " + containerIP;
  console.log(`Container IP: ${containerIP}`);
  res.send(hello);
});

app.get("/user", (req, res) => {
  res.send([
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Smith",
    },
    {
      id: 3,
      name: "Adam",
    },
    {
      id: 4,
      name: "Frank",
    },
  ]);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
