// .click
// .hide
// .show
// .toggle
$(document).ready( function () {
  $("h1").click(function () {
    $("h2, #firstp").hide();
  });
  $("button").click(function () {
    console.log("document is clicked!!!");
    $("h2, #firstp").show(2000, function () {
    //   alert("button was clicked!!");
      $("img").toggle('slow', function(){
        $("img").hide();
        });
    });
  });
});

