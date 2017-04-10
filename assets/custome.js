$(document).ready(function(){ 
  
$("#Slideshow-slideshow").width();
  
 var s_start_height = ($("#Slideshow-slideshow").width()) * 510/1437;
 $("#Slideshow-slideshow").css("height",s_start_height);  


//   Slider Arrow Working
  
  
});


function slide_prev(){
  $slider.slick('slickPrev');
}
function slide_next(){
   $slider.slick('slickNext');
}

$( window ).resize(function() {   
    setsliderresponsive();
});

// document.getElementById("Slideshow-slideshow").onresize = function() {getsliderwidth()};

function setsliderresponsive(){  
  var sheight = ($("#Slideshow-slideshow").width()) * 510/1437 ;
  $("#Slideshow-slideshow").css("height",sheight);  
}

