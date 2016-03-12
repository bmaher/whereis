var json = {
  "rooms": {
    "room": [{
      "name": "belvedere",
      "floor": 4,
      "ordinal": "east"
    }, {
      "name": "atlas",
      "floor": 6,
      "ordinal": "north west"
    }]
  }
};

function getOrdinal(n) {
  var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

$(document).ready(function() {

  $('form').submit(function(event) {

    $.each(json.rooms.room, function(i, v) {

      if (v.name.toLowerCase() == $('input').val().toLowerCase()) {

        var s = v.name + ' is on the ' + getOrdinal(v.floor) + ' floor, ' + v.ordinal + ' side.';
        $('span').text(s).show();
        return;
      } 
    });
    event.preventDefault();
  });
});
