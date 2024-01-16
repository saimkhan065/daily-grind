console.log("JS");
async function getWeatherAW(latitude, longitude) {
  const result = await fetch(
    `https://api.weather.gov/points/${latitude},${longitude}`
  );
  const data = await result.json();
  console.log(data);
}

getWeatherAW(39.7456, -97.0892);
