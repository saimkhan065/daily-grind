console.log("JS");
async function getWeatherAW(latitude, longitude) {
  try {
    const result = await fetch(
      `https://api.weather.gov/points/${latitude},${longitude}`
    );
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getWeatherAW(39.7456, -97.0892);
