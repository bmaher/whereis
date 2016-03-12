var json = {
  "rooms": {
    "room": [{
      "number": "1.41C-023",
      "name": "marlene dietrich",
      "building": 1,
      "floor": 4,
      "cardinal": "north",
      "elevator": "either",
      "direction": "between",
    }, {
      "number": "1.41C-025",
      "name": "harald juhnke",
      "building": 1,
      "floor": 4,
      "cardinal": "north",
      "elevator": "either",
      "direction": "between"
    }, {
      "number": "1.41C-078",
      "name": "billy wilder",
      "building": 1,
      "floor": 4,
      "cardinal": "north east",
      "elevator": "east",
      "direction": "left"
    }, {
      "number": "1.42D-095",
      "name": "belvedere",
      "building": 1,
      "floor": 4,
      "cardinal": "east",
      "elevator": "east",
      "direction": "right"
    }, {
      "number": "1.43C-047",
      "name": "charlottenburg",
      "building": 1,
      "floor": 4,
      "cardinal": "south east",
      "elevator": "east",
      "direction": "right"
    }, {
      "number": "1.42B-053",
      "name": "hasenheide",
      "building": 1,
      "floor": 4,
      "cardinal": "west",
      "elevator": "west",
      "direction": "left"
    }]
  }
};

$('form').submit(function(event) {
  var found = false;
  $.each(json.rooms.room, function(i, v) {
    if (v.name.toLowerCase() == $('input').val().toLowerCase()) {
      $('.info').text(getInfo(v)).show();
      $('.directions').text(getDirections(v)).show();
      found = true;
      return;
    }
  });
  if (found === false) {
    $('.info').text('Room not found').show();
  }
  event.preventDefault();
});

function getInfo(v) {
  return `${toTitleCase(v.name)} is on the ${getOrdinal(v.floor)} floor in HERE building `
    + `${v.building}, ${getCardinal(v.cardinal)}.`;
}

function toTitleCase(s) {
  return s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getOrdinal(n) {
  var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function getCardinal(c) {
  if (wordCount(c) > 1) {
    return `${c} corner`
  } else {
    return c
  }
}

function wordCount(s) { 
  return s.split(' ').length;
}

function getDirections(v) {
  if (v.elevator == 'either') {
    return `Take ${v.elevator} elevator, the room is ${v.direction} them.`
  } else {
    return `From the ${v.elevator} elevator, go ${v.direction}.`
  }
}
