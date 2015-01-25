'use strict';

var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/repos/' + args[0] + '/contributors', true);

request.onreadystatechange = function() {
    if (request.readyState != 4) {
        return false;
    }

    if (request.status != 200) {
        stdout(request.status);
    }

    stdout(null, JSON.parse(request.responseText));

    return true;
};

request.send();