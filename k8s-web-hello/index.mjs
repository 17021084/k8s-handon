// app.js
import express from "express";
import ip from "ip";

const containerIP = ip.address();


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const hello= containerIP
  console.log(`Container IP: ${containerIP}`);
  res.send(hello)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
