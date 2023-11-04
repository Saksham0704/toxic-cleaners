var apiUrl = "https://console.firebase.google.com/u/0/project/esp32-8ae9e/database/esp32-8ae9e-default-rtdb/data/~2F";
$.getJSON(apiUrl, function(data) {
  chart.data.datasets[0].data = data.data;
  chart.update();
});
