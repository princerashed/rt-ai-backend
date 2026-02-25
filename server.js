const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("RT AI Backend Running 🚀");
});

// Prediction Route
app.post("/predict", (req, res) => {
  const { secret, period } = req.body;

  if (secret !== "THE R-T AI BOT") {
    return res.json({
      status: "error",
      message: "INVALID KEY"
    });
  }

  if (!period || period.length < 3) {
    return res.json({
      status: "error",
      message: "INVALID PERIOD"
    });
  }

  // Demo prediction logic (temporary)
  const result = Math.random() > 0.5 ? "BIG" : "SMALL";

  res.json({
    status: "success",
    period: period,
    prediction: result
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
