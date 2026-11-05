# Weather App

It is a simple weather website where you type a city name and it shows the current weather. I made it using HTML, CSS, JavaScript, Node.js and Express. The weather data comes from WeatherAPI.

I kept the API key in a `.env` file on the server so it doesn't show in the browser or on GitHub.

## What it shows

- Temperature
- Weather condition with an icon
- Humidity
- Wind speed
- UV index
- Pressure
- Visibility

## Technologies used

- HTML, CSS, JavaScript
- Node.js
- Express
- dotenv
- WeatherAPI

## How to run it

You need Node.js (version 18 or above) installed and a free API key from https://www.weatherapi.com/

1. Download or clone this repo

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install the packages

```
npm install
```

3. Make a file named `.env` in the main folder (you can copy `.env.example`) and put your key in it like this

```
WEATHER_API_KEY=your_api_key_here
```

Only write the key, not the full link.

4. Start the server

```
npm start
```

5. Open http://localhost:3000 in your browser and search for a city.

## How it works

When you search a city, the page sends a request to my own server (`/api/weather`). The server adds the API key and gets the data from WeatherAPI, then sends it back to the page. This way the key is never in the frontend code.

## Problems I faced

- I got a 401 error at first because I pasted the whole API link in `.env` instead of just the key.
- If you change `.env`, you have to restart the server, otherwise it won't work.
- GitHub Pages can't run the server, so the site only works on localhost for now.

## Things I want to add later

- Show city name and country
- Search when pressing Enter
- Forecast for next days
- Better error messages
- Put it online using Render or Railway
