const express = require("express");
const app = express();
const conectdb = require("./config/conectdb");
require("dotenv").config();
conectdb();
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.json());

app.use("/api/products", require("./routes/products"));
app.use("/api/admin", require("./routes/admin"));
app.use("/user/", require("./routes/user"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`app listening on port ${PORT}!`)
);
