const express = require("express");
const app = express();
const db = require("./config/database");

app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// db connection
db.connect();

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
// routes
app.use("/api/v1", require("./routes/routes"));

app.get("/", (req, res) => {
  res.send("hello world");
});
