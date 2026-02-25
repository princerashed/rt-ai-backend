const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/predict", (req, res) => {

    const { secret, period } = req.body;

    if(secret !== "THE R-T AI BOT"){
        return res.json({ status: "error", message: "INVALID KEY" });
    }

    if(!period || period.length < 3){
        return res.json({ status: "error", message: "INVALID PERIOD" });
    }

    // Demo prediction logic (replace with real logic later)
    const result = Math.random() > 0.5 ? "BIG" : "SMALL";

    res.json({
        status: "success",
        period: period,
        prediction: result
    });

});

app.listen(3000, () => {
    console.log("Server running");
});
