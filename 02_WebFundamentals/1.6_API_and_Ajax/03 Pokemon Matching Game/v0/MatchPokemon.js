$(document).ready(function () {
  var newUrl = "",
    pokeIndex = createPokeIndex();
  for (var i = 0; i < pokeIndex.length; i++) {
    newUrl = '"https://pokeapi.co/api/v2/pokemon/' + pokeIndex[i] + '"';

    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokeIndex[i],
    }).done(function (pokemonOjb) {
      // console.log(i);
      // console.log(pokemonOjb);
      // console.log(pokemonOjb.sprites.front_default);
      var box = $(
        "<div class='pokeBox'><img src='" +
          pokemonOjb.sprites.front_default +
          "'></div"
      );
      $("#container").append(box);
    });
  }

  $(document).on("click", ".pokeBox", function () {
    console.log("Image was clicked!");
    $(this).hide();
  });
});
//Idea: fix the gird to get x and y

function createPokeIndex() {
  //Create an array consists of 1 to 50:
  var arr = [];
  for (var j = 101; j < 151; j++) {
    arr.push(j);
  }
  // Double the array created above:
  var newArr = arr.concat(arr);

  //Shuffle the array values:
  for (var i = newArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
}

// createPokeIndex();

// function createPokeIndex(){
//   //Create an array consists of 1 to 50:
//   var arr=[];
//   for (var j=1; j<51; j++){
//       arr.push(j);
//   }
// console.log(arr);
// Double the array created above:

// var newArr = arr.concat(arr);
// console.log(newArr);

//Shuffle the array values:
// var arr = [5,6,3,8];
// for (var i = newArr.length-1; i > 0; i--) {
//   var j = Math.floor(Math.random() * i);
//   var temp = newArr[i];
//   newArr[i] = newArr[j];
//   newArr[j] = temp;
// }
// return newArr;

//   for (var i = arr.length-1; i > 0; i--) {
//     var j = Math.floor(Math.random() * i);
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//Diagram for the codes above
//      arr = [5,6,3,8]
//arr index:   0 1 2 3  arr length = 4

//loop: from i = 3 to i = 1

//first run of loop: i = 3, arr = [5,6,3,8]
//                    arr index:   0 1 2 3
// j = a random integer < i --> j = a random integer < 3 --> j could be 0, 1 or 2. Says j=2
//   temp = arr[i] -->  temp = arr[3]--> temp = 8
//   arr[i] = arr[j] --> arr[3] = arr[2] --> arr[3] = 3 --> arr = [5,6,3,3]
//   arr[j] = temp --> arr[2] = 8 --> arr = [5,6,8,3]

//second run of loop: i = 2, arr = [5,6,8,3]
//                     arr index:   0 1 2 3
// j = a random integer < i --> j = a random integer < 2 --> j could be 0 or 1. Says j=0
//   temp = arr[i] -->  temp = arr[2]--> temp = 8
//   arr[i] = arr[j] --> arr[2] = arr[0] --> arr[2] = 5  --> arr = [5,6,5,3]
//   arr[0] = temp --> arr[0] = 8 --> arr = [8,6,5,3]

//third run of loop: i = 1, arr = [8,6,5,3]
//                    arr index:   0 1 2 3
// j = a random integer < 1 --> j = a random integer < 1 --> j = 0
//   temp = arr[i] -->  temp = arr[1]--> temp = 6
//   arr[i] = arr[j] --> arr[1] = arr[0] --> arr[1] = 8  --> arr = [8,8,5,3]
//   arr[j] = temp --> arr[0] = 6 --> arr = [6,8,5,3]
// }
// createPokeIndex();
