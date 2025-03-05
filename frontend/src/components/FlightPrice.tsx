import React, { useState } from "react";
import axios from "axios";

interface FlightPrices {
  [key: string]: string;
}

const FlightPrice: React.FC = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [flightPrices, setFlightPrices] = useState<FlightPrices | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/flights", {
        source,
        destination,
        date,
      });

      setFlightPrices(response.data);
    } catch (err) {
      setError("No flights found or invalid input.");
      setFlightPrices(null);
    }
  };


  return (
    <div className="container">
      <h1>Flight Price Finder</h1>
      <div>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p>{error}</p>}

      {flightPrices && (
        <div>
          <h2>Available Flights</h2>
          <ul>
            {Object.entries(flightPrices).map(([airline, price]) => (
              <li key={airline}>
                {airline}: {price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightPrice;
