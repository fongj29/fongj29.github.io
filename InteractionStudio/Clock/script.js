// Function to fetch sunrise and sunset data from the API
async function fetchSunriseSunsetData(latitude, longitude) {
  const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// Function to check if it's daytime based on current time and sunrise/sunset times
function isDaytime(sunrise, sunset) {
  const currentTime = new Date().getTime();
  const sunriseTime = new Date(`2024-04-23 ${sunrise}`).getTime();
  const sunsetTime = new Date(`2024-04-23 ${sunset}`).getTime();

  return currentTime > sunriseTime && currentTime < sunsetTime;
}

// Function to update the UI based on daytime or nighttime
function updateUI(data) {
  const { sunrise, sunset } = data;
  const isDay = isDaytime(sunrise, sunset);
  const body = document.body;
  body.style.backgroundColor = isDay ? 'white' : 'black';
  document.getElementById('sunrise').textContent = sunrise;
  document.getElementById('sunset').textContent = sunset;
  document.getElementById('raw-output').textContent = JSON.stringify(data);
}

// Coordinates for New York
const latitude = 40.71427;
const longitude = -74.00597;

// Fetch sunrise and sunset data and update the UI
fetchSunriseSunsetData(latitude, longitude)
  .then(data => updateUI(data))
  .catch(error => console.error('Error fetching sunrise/sunset data:', error));
