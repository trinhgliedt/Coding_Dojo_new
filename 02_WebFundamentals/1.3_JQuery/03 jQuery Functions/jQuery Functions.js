// .click
// .hide
// .show
// .toggle
$(document).ready( function () {
  $("h1").click(function () {
    $("h2, #firstp").hide();
  });
  $("#cool-actions").click(function () {
    console.log("document is clicked!!!");
    $("h2, #firstp").show(2000, function () {
    //   alert("button was clicked!!");
      $("img").toggle(3000, function(){
        $("img").hide(3000);
        });
    });
  });
  $('h1').html('Hello World!!');
  $('#click-me').click(function(){
      // console.log('Button is clicked!!');
      $('h1').css('background-color',"yellow");
      $(this).addClass('btn btn-warning');
  })
  $('h1').click(function(){
      $('p').toggle();
      $('li').hide();
  })
  $('h2').click(function(){
      $('li').show();
  })
  $('#slide-down').click(function(){
      $("img").slideDown('fast');
  })
  $('#slide-up').click(function(){
      $("img").slideUp('slow');
  })
  //  selector          event callback function (aka or event handler)
  $('#slide-toggle').click(function(){
      $("img").slideToggle('fast');
  })
  $('#fade-in').click(function(){
      console.log("Fade-in was clicked");
      $("p").fadeIn();
  })
  $('#fade-out').click(function(){
      console.log("Fade-out was clicked");
      $("p").fadeOut();
  })
  $('#insert-before').click(function(){
    $('#hot-air').before('<img class="butterfly" src="butterfly.gif" alt="butterfly">');
  })
  $('#insert-after').click(function(){
    // console.log('Button is clicked!!');
    $('#hot-air').after('<img class="dancer2" src="dancer2.gif" alt="dancer">');
  })
  $('h2').mouseover(function(){
    $('#firstp').append('jQuery is awesome!');
  })
  
  $('h2').mouseout(function(){
    $('h2').html("Flying is awesome too!");
  })
  $('a').mouseover(function(){
    console.log('Link is clicked!!');
    $("a").attr("href","https://www.google.com/");
    $("button").addClass("btn-warning");
    $("input:text").val(function(n, c){
      return c + " Gliedt";})
  });
  $('a').mouseout(function(){
    $("input:text").val("Max")
  });
  $('h3').mouseover(function(){
    $("h3").text("Full-time online full stack development")
  });
  
});




