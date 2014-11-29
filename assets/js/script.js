$(document).ready(function(){


// Top Bar

$(".top-bar-button").click(function() {
	var oneitem = $(this).text();
	if(oneitem == "about") {
		$(this).addClass("active");
	}
	
});


$("#Website").click(function(){
    $(".text-box").text("Welcome to my amazing universe of baking. You can find all my favorite recipes on this page. I hope you will enjoy looking through everything and deviding about your next baking adventure. Just klick on the image of whatever looks appealing to you. The recipe will show up then. In case you do not want to bake yourself but still don't want to miss out on anything. You can order everything you like and we will diliver it to your house. In case you have an amazing recipe that everyone should know about. We are happy to share it on our website. Just send it to us. ");
  });

$("#Me").click(function(){
    $(".text-box").text("My name is Charlotte and I am in the second year of a Master's program in Modern European History. And as you can see I love baking. Normally I am studying at Humboldt-University of Berlin but currently I am doing a year abroad at UC Berkeley. Here I chose to add some more practial classes to my studies. One class I have been taking was the Web Design Decal. This website is my final project in this class. As I am hoping to make a career in the field of public history I hope I will be able to apply my new Web Design skills some day in this field as well.");
  });
	
//  cursor

//about

$("#Website").hover(function() {
	$("#Website").css( 'cursor', 'pointer' );

});

$("#Me").hover(function() {
	$("#Me").css( 'cursor', 'pointer' );

});

//recipe

$(".Close-Button").hover(function() {
	$(".Close-Button").css( 'cursor', 'pointer' );

});


$("#image1").hover(function() {
	$("#image1").css( 'cursor', 'pointer' );

});

	$("#text1").hover(function() {
	$("#text1").css( 'cursor', 'pointer' );

});

	$("#image2").hover(function() {
	$("#image2").css( 'cursor', 'pointer' );

});

	$("#text2").hover(function() {
	$("#text2").css( 'cursor', 'pointer' );

});

	$("#image3").hover(function() {
	$("#image3").css( 'cursor', 'pointer' );

});

	$("#text3").hover(function() {
	$("#text3").css( 'cursor', 'pointer' );

});

	$("#image4").hover(function() {
	$("#image4").css( 'cursor', 'pointer' );

});

	$("#text4").hover(function() {
	$("#text4").css( 'cursor', 'pointer' );

});
	$("#image5").hover(function() {
	$("#image5").css( 'cursor', 'pointer' );

});

	$("#text5").hover(function() {
	$("#text5").css( 'cursor', 'pointer' );

});
	$("#image6").hover(function() {
	$("#image6").css( 'cursor', 'pointer' );

});

	$("#text6").hover(function() {
	$("#text6").css( 'cursor', 'pointer' );

});

	$("#image7").hover(function() {
	$("#image7").css( 'cursor', 'pointer' );

});

	$("#text7").hover(function() {
	$("#text7").css( 'cursor', 'pointer' );

});

	$("#image8").hover(function() {
	$("#image8").css( 'cursor', 'pointer' );

});

	$("#text8").hover(function() {
	$("#text8").css( 'cursor', 'pointer' );

});
	$("#image9").hover(function() {
	$("#image9").css( 'cursor', 'pointer' );

});

	$("#text9").hover(function() {
	$("#text9").css( 'cursor', 'pointer' );

});

	$("#image10").hover(function() {
	$("#image10").css( 'cursor', 'pointer' );

});

	$("#text10").hover(function() {
	$("#text10").css( 'cursor', 'pointer' );

});

	$("#image11").hover(function() {
	$("#image11").css( 'cursor', 'pointer' );

});

	$("#text11").hover(function() {
	$("#text11").css( 'cursor', 'pointer' );

});
	$("#image12").hover(function() {
	$("#image12").css( 'cursor', 'pointer' );

});

	$("#text12").hover(function() {
	$("text12").css( 'cursor', 'pointer' );

});


// cursor - Christmas


$("#image21").hover(function() {
	$("#image21").css( 'cursor', 'pointer' );

});

	$("#text21").hover(function() {
	$("#text21").css( 'cursor', 'pointer' );

});

	$("#image22").hover(function() {
	$("#image22").css( 'cursor', 'pointer' );

});

	$("#text22").hover(function() {
	$("#text22").css( 'cursor', 'pointer' );

});

	$("#image23").hover(function() {
	$("#image23").css( 'cursor', 'pointer' );

});

	$("#text23").hover(function() {
	$("#text23").css( 'cursor', 'pointer' );

});

	$("#image24").hover(function() {
	$("#image24").css( 'cursor', 'pointer' );

});

	$("#text24").hover(function() {
	$("#text24").css( 'cursor', 'pointer' );

});
	$("#image25").hover(function() {
	$("#image25").css( 'cursor', 'pointer' );

});

	$("#text25").hover(function() {
	$("#text25").css( 'cursor', 'pointer' );

});
	$("#image26").hover(function() {
	$("#image26").css( 'cursor', 'pointer' );

});

	$("#text26").hover(function() {
	$("#text26").css( 'cursor', 'pointer' );

});

	$("#image27").hover(function() {
	$("#image27").css( 'cursor', 'pointer' );

});

	$("#text27").hover(function() {
	$("#text27").css( 'cursor', 'pointer' );

});

	$("#image28").hover(function() {
	$("#image28").css( 'cursor', 'pointer' );

});

	$("#text28").hover(function() {
	$("#text28").css( 'cursor', 'pointer' );

});
	$("#image29").hover(function() {
	$("#image29").css( 'cursor', 'pointer' );

});

	$("#text29").hover(function() {
	$("#text29").css( 'cursor', 'pointer' );

});

	$("#image30").hover(function() {
	$("#image30").css( 'cursor', 'pointer' );

});

	$("#text30").hover(function() {
	$("#text30").css( 'cursor', 'pointer' );

});

	$("#image31").hover(function() {
	$("#image31").css( 'cursor', 'pointer' );

});

	$("#text31").hover(function() {
	$("#text31").css( 'cursor', 'pointer' );

});
	$("#image32").hover(function() {
	$("#image32").css( 'cursor', 'pointer' );

});

	$("#text32").hover(function() {
	$("text32").css( 'cursor', 'pointer' );

});





//  Modal Box 1 - Everyday

	$("#image1").click(function() {
	$("#modal-container1").fadeIn();
});

$("#text1").click(function() {
	$("#modal-container1").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container1").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container1").fadeOut();
});

//  Modal Box 2 - Everyday

	$("#image2").click(function() {
	$("#modal-container2").fadeIn();
});

$("#text2").click(function() {
	$("#modal-container2").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container2").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container2").fadeOut();
});

//  Modal Box 3 - Everyday

	$("#image3").click(function() {
	$("#modal-container3").fadeIn();
});

$("#text3").click(function() {
	$("#modal-container3").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container3").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container3").fadeOut();
});

//  Modal Box 4 - Everyday

	$("#image4").click(function() {
	$("#modal-container4").fadeIn();
});

$("#text4").click(function() {
	$("#modal-container4").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container4").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container4").fadeOut();
});

//  Modal Box 5 - Everyday

	$("#image5").click(function() {
	$("#modal-container5").fadeIn();
});

$("#text5").click(function() {
	$("#modal-container5").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container5").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container5").fadeOut();
});

//  Modal Box 6 - Everyday

	$("#image6").click(function() {
	$("#modal-container6").fadeIn();
});

$("#text6").click(function() {
	$("#modal-container6").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container6").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container6").fadeOut();
});

//  Modal Box 7 - Everyday

	$("#image7").click(function() {
	$("#modal-container7").fadeIn();
});

$("#text7").click(function() {
	$("#modal-container7").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container7").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container7").fadeOut();
});

//  Modal Box 8 - Everyday

	$("#image8").click(function() {
	$("#modal-container8").fadeIn();
});

$("#text8").click(function() {
	$("#modal-container8").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container8").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container8").fadeOut();
});

//  Modal Box 9 - Everyday

	$("#image9").click(function() {
	$("#modal-container9").fadeIn();
});

$("#text9").click(function() {
	$("#modal-container9").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container9").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container9").fadeOut();
});

//  Modal Box 10 - Everyday

	$("#image10").click(function() {
	$("#modal-container10").fadeIn();
});

$("#text10").click(function() {
	$("#modal-container10").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container10").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container10").fadeOut();
});

//  Modal Box 11 - Everyday

	$("#image11").click(function() {
	$("#modal-container11").fadeIn();
});

$("#text11").click(function() {
	$("#modal-container11").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container11").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container11").fadeOut();
});

//  Modal Box 12 - Everyday

	$("#image12").click(function() {
	$("#modal-container12").fadeIn();
});

$("#text12").click(function() {
	$("#modal-container12").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container12").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container12").fadeOut();
});


//  Modal Box 21 - Christmas

	$("#image21").click(function() {
	$("#modal-container21").fadeIn();
});

$("#text21").click(function() {
	$("#modal-container21").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container21").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container21").fadeOut();
});

//  Modal Box 22 - Christmas

	$("#image22").click(function() {
	$("#modal-container22").fadeIn();
});

$("#text22").click(function() {
	$("#modal-container22").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container22").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container22").hide();
});

//  Modal Box 23 - Christmas

	$("#image23").click(function() {
	$("#modal-container23").fadeIn();
});

$("#text23").click(function() {
	$("#modal-container23").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container23").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container23").fadeOut();
});

//  Modal Box 24 - Christmas

	$("#image24").click(function() {
	$("#modal-container24").fadeIn();
});

$("#text24").click(function() {
	$("#modal-container24").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container24").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container24").fadeOut();
});

//  Modal Box 25 - Christmas

	$("#image25").click(function() {
	$("#modal-container25").fadeIn();
});

$("#text25").click(function() {
	$("#modal-container25").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container25").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container25").fadeOut();
});

//  Modal Box 26 - Christmas

	$("#image26").click(function() {
	$("#modal-container26").fadeIn();
});

$("#text26").click(function() {
	$("#modal-container26").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container26").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container26").fadeOut();
});

//  Modal Box 27 - Christmas

	$("#image27").click(function() {
	$("#modal-container27").fadeIn();
});

$("#text27").click(function() {
	$("#modal-container27").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container27").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container27").fadeOut();
});

//  Modal Box 28 - Christmas

	$("#image28").click(function() {
	$("#modal-container28").fadeIn();
});

$("#text28").click(function() {
	$("#modal-container28").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container28").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container28").fadeOut();
});

//  Modal Box 29 - Christmas

	$("#image29").click(function() {
	$("#modal-container29").fadeIn();
});

$("#text29").click(function() {
	$("#modal-container29").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container29").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container29").fadeOut();
});

//  Modal Box 30 - Christmas

	$("#image30").click(function() {
	$("#modal-container30").fadeIn();
});

$("#text30").click(function() {
	$("#modal-container30").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container30").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container30").fadeOut();
});

//  Modal Box 31 - Christmas

	$("#image31").click(function() {
	$("#modal-container31").fadeIn();
});

$("#text31").click(function() {
	$("#modal-container31").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container31").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container31").fadeOut();
});

//  Modal Box 32 - Christmas

	$("#image32").click(function() {
	$("#modal-container32").fadeIn();
});

$("#text32").click(function() {
	$("#modal-container32").fadeIn();
});


$(".Close-Button").click(function() {
	$("#modal-container32").fadeOut();
});


$(".modal-overlay").click(function() {
	$("#modal-container32").fadeOut();
});



// google-maps 


      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(37.868713, -122.259154),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    

});