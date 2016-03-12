var json = {
  "rooms": {
    "room": [{
      "number": "1.41C-023",
      "name": "marlene dietrich",
      "building": 1,
      "floor": 4,
      "elevator": "east or west",
      "direction": "right or left",
    }, {
      "number": "1.41C-025",
      "name": "harald juhnke",
      "building": 1,
      "floor": 4,
      "elevator": "east or west",
      "direction": "right or left"
    }, {
      "number": "1.41C-078",
      "name": "billy wilder",
      "building": 1,
      "floor": 4,
      "elevator": "east",
      "direction": "left"
    }, {
      "number": "1.42D-095",
      "name": "belvedere",
      "building": 1,
      "floor": 4,
      "elevator": "east",
      "direction": "right"
    }, {
      "number": "1.43C-047",
      "name": "charlottenburg",
      "building": 1,
      "floor": 4,
      "elevator": "east",
      "direction": "right"
    }, {
      "number": "1.42B-053",
      "name": "hasenheide",
      "building": 1,
      "floor": 4,
      "elevator": "west",
      "direction": "left"
    }]
  }
};

function buildString(v) {
  return `${titleCase(v.name)} is on the ${getOrdinal(v.floor)} floor in HERE building `
    + `${v.building}. From the ${v.elevator} elevator go ${v.direction}.`;
}

function titleCase(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getOrdinal(n) {
  var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

$(document).ready(function() {
});

$('form').submit(function(event) {
  $.each(json.rooms.room, function(i, v) {
    if (v.name.toLowerCase() == $('input').val().toLowerCase()) {
      $('span').text(buildString(v)).show();
      return;
    }
  });
  event.preventDefault();
  // $('span').text('Room not found').show();
});
