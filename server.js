
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.static("public"));

app.get("/api/weather", async (req, res) => {
    try {
        const city = req.query.city;

        if (!city) {
            return res.status(400).json({
                error: "Please enter a city name"
            });
        }

        const apiURL =
            `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${encodeURIComponent(city)}`;

        const response = await fetch(apiURL);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);

    } catch (error) {
        res.status(500).json({
            error: "Something went wrong"
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});