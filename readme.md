# Flight Price API

## Hosted Url - https://flight-price-api-six.vercel.app/

## Overview
The Flight Price API is a Node.js-based REST API that provides flight prices between two cities for a given date. Users can send requests with source, destination, and date to get available flight prices.

## Features
- Fetch flight prices between two cities
- Rest API
- Built with **Express.js**
- Implements best coding practices

## Technologies Used
- **Node.js**
- **Express.js**
- **Axios (for fetching real-time data, if applicable)**

## API Endpoints

## Example Request (Postman or Fetch API):

POST http://localhost:3000/flights
Content-Type: application/json
{
  "source": "Delhi",
  "destination": "Jaipur",
  "date": "2023-04-15"
}

## Example Response:

{
  "indigo": "₹1,614",
  "airAsia": "₹1,869",
  "vistara": "₹2,133"
}

![Results Screenshot](./Screenshot%20(1).png)
![Results Screenshot](./Screenshot%20(2).png)
![Results Screenshot](./Screenshot%20(3).png)






