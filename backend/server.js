const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mockFlightData = require("./mockData");


const app = express();
app.use(cors());
app.use(express.json());

// const mockFlightData = {
//   "Delhi-Jaipur-2023-04-15": {
//     indigo: "₹1,614",
//     airAsia: "₹1,869",
//     vistara: "₹2,133",
//   },
// };

app.post("/flights", (req, res) => {
  const { source, destination, date } = req.body;

  if (!source || !destination || !date) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const key = `${source}-${destination}-${date}`;
  const flights = mockFlightData[key] || {};

  if (Object.keys(flights).length === 0) {
    return res.status(404).json({ error: "No flights found" });
  }

  res.json(flights);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
