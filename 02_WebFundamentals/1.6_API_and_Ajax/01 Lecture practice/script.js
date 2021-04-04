

$(document).ready(function(){

    
    
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
      }).done(function(pokemonObj) {
        console.log(pokemonObj);
        console.log(pokemonObj.sprites.front_default);
        var box = $("<div id='pokeBox'><img src='"+pokemonObj.sprites.front_default+"'></div>")
        var name = "<h3> " + pokemonObj.name + "</h3>"
        // "<h3>Charmander</h3>"
        box.append("<h4>Abilities:</h4>")
        box.append(name);
        

        var list = "<ul>"
        // "<ul><li>static</li><li>lightning</li></ul>"
        for(var i =0; i < pokemonObj.abilities.length; i++) {
            list+= "<li>" + pokemonObj.abilities[i].ability.name + "</li>"
        }
        list+= "</ul>"

        box.append(list);

        $('#container').append(box);
        
      });


})