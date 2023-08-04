function updateDateTime() {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('id-ID', options);
  document.getElementById('date-time').innerText = formattedDate;
}

// Update date-time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
