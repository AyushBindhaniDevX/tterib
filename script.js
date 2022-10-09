feather.replace()
fetch("https://api.thingspeak.com/channels/1887074/feeds.json?results=1").then((data) => {
  return data.json();

}).then((objectData) => {
  console.log(objectData.feeds[0].field1);
  var output = document.getElementById('test');
  output.innerHTML = objectData.feeds[0].field1;
});

