
//        Event Listener....    Event..       Event Handler
//                                          (Callback Function)
document.addEventListener("DOMContentLoaded", function () {

    console.log("Hello Universe!!");
    console.dir(document);
    var header1 = document.getElementById("header1");
    console.dir(header1);
    var button = document.getElementById("click-me");
    console.dir(button);
    button.addEventListener("click", function() {
        console.log("Button clicked!!");
        header1.style.color = "red";
        // header1.left = header1.left-10px;
    });
    header1.addEventListener("mouseover", function(){
        header1.style.color= "green";
        console.log("test");
        // header1.style.color ="yellow";
    })

})

