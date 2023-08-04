function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
}

setInterval(updateClock, 1000);