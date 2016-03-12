var json = {
  "rooms": {
    "room": [{
      "name": "belvedere",
      "building": 1,
      "floor": 6,
      "elevator": "east",
      "direction": "right"
    }, {
      "name": "atlas",
      "building": 1,
      "floor": 6,
      "elevator": "west",
      "direction": "left"
    }]
  }
};

function buildString(v) {
  return `${titleCase(v.name)} is on the ${getOrdinal(v.floor)} floor in HERE building `
    + `${v.building}. From the ${v.elevator} elevator go ${v.direction}.`;
}

function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getOrdinal(n) {
  var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

$(document).ready(function() {
  $('form').submit(function(event) {
    $.each(json.rooms.room, function(i, v) {
      if (v.name.toLowerCase() == $('input').val().toLowerCase()) {
        $('span').text(buildString(v)).show();
        return;
      } 
    });
    event.preventDefault();
  });
});
