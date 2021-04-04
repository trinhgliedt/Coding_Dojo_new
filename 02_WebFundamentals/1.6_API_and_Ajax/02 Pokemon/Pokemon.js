$(document).ready(function(){

var newUrl=""
    for (var i=150; i<250; i++){
        newUrl = '"https://pokeapi.co/api/v2/pokemon/'+i+'"';
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/"+i,
        }).done(function(pokemonOjb){
            // console.log(i);
            console.log(pokemonOjb);
            // console.log(pokemonOjb.sprites.front_default);
            var box = $("<div class='pokeBox'><img src='" + pokemonOjb.sprites.front_default + "'></div")
             $('#container').append(box);
        })
    }
})