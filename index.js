const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbw1w29pQeKqbO2xsp7y88Y2tH7m1bj283vQsri5lop_gtaIXKSgoaICb1d5RRoLyHSC/exec"; // Ganti dengan URL GAS kamu

app.post("/data", async (req, res) => {
  try {
    await axios.post(googleAppsScriptURL, req.body);
    res.send("Terkirim ke Google Sheets!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Gagal kirim ke Google Sheets");
  }
});

app.listen(3000, () => console.log("Listening on port 3000"));
