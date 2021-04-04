// #1
for(var num = 0; num < 15; num++){
    console.log(num);
}

// num = 0 -> 1 -> 2 -> ...14 -> 15
//console: 0, 1, 2, ...14

//#2
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
console.log(i);
//i = 1 -> 3 -> 5 ->7 ->9 ->11
//console: 3, 9

//#3
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

//j = 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> 11 -> 12 -> 14 -> 15 -> 16
//console: 1, 4, 5, 8, 10, 11, 14, 16