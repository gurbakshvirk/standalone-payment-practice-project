const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripeRoutes = require("./routes/stripeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/payment", stripeRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
app.post("/test", (req, res) => {
  res.json({ message: "Test route works" });
});