var json = {
    "rooms": [
        { "id": "1.41C-023", "name": "marlene dietrich" },
        { "id": "1.41C-025", "name": "harald juhnke" },
        { "id": "1.41C-078", "name": "billy wilder" },
        { "id": "1.42D-095", "name": "belvedere" },
        { "id": "1.43C-047", "name": "charlottenburg" },
        { "id": "1.42B-053", "name": "hasenheide" },
        { "id": "1.22D-085", "name": "teufelsberg" },
        { "id": "1.53C-041", "name": "schoneberg" },
        { "id": "1.53C-058", "name": "here leadership team room" },
        { "id": "2.G1A-064", "name": "downunder" }
    ]
};

$( document ).ready(function() {
    var names = json.rooms.room.map( function(item) { return toTitleCase(item.name); } );
    $('input').autocomplete({ source: names });
});

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
        $('.info').text('No idea!').show();
        $('.directions').text('').show();
    }
    event.preventDefault();
});

function getInfo(v) {
    var data = parseRoomId(v.id);
    return `${toTitleCase(v.name)} is in building ${data[0]} on the ${getOrdinal(data[1])} floor.`;
}

function toTitleCase(s) {
    return s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getOrdinal(n) {
    if (n.toLowerCase() == 'g') { return 'ground '; }
    var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function getDirections(v) {
    var data = parseRoomId(v.id);
    var cardinal = getCardinal(data[2], data[3]);
    if (cardinal == 'north') {
        return `Take either elevator, the room is between them.`
    } else if (cardinal == 'south') {
        return `Take either elevator, head ${cardinal}.`
    } else if (cardinal == 'east') {
        return `Take the ${cardinal} elevator, exit right, head south.`
    } else if (cardinal == 'west') {
        return `Take the ${cardinal} elevator, exit left, head south.`
    } else {
        return '';
    }
}

function parseRoomId(id) {
    var building = id[0];
    var s = id.split('.')[1].split('-')[0];
    var floor = s[0];
    var x = s[2];
    var y = s[1];
    return [building, floor, x, y]
}

function getCardinal(x, y) {
    if (x == 'B') { x = 'west'; }
    if (x == 'C') { x = ''; }
    if (x == 'D') { x = 'east'; }
    if (y == '1') { y = 'north'; }
    if (y == '2') { y = ''; }
    if (y == '3') { y = 'south'; }
    return `${y}${x}`
}

