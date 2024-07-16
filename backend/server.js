const express = require('express');
const app = express();

const cors = require('cors');
require("dotenv").config({ path : "./config.env"});

app.use(cors());
app.use(express.json());


const dbo = require("./db/conn");
app.use(require("./routes/data"));

const port = process.env.PORT;

app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
})

app.get("/", (req, res) =>{
  res.send("Hello world");
})