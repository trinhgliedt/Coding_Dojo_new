const obj1  = {
"birth_year": "112BBY",
"created": "2014-12-10T15:10:51.357000Z",
"edited": "2014-12-20T21:17:50.309000Z",
"eye_color": "yellow",
"films": (6) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/"],

};

Object.entries(obj1).map(([key, val]) => {
    console.log(key, ":", val);
});

