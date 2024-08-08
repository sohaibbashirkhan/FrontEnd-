
// For Fixing Nav Bar

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 125) {
          document.getElementById('navbar_top').classList.add('fixed-top');
       
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 



  $(document).ready(function () {
    var infoToast = document.getElementById('infoToast');
    infoToast.addEventListener('hidden.bs.toast', function () {
        //roll-in-blurred-right
        $("#gitBtn").addClass("jello-horizontal");
    });
    var toast = new bootstrap.Toast(infoToast);
    toast.show();
});

$('#vertical-carousel').bind('mousewheel DOMMouseScroll', function (e) {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $(this).carousel('prev');
    }
    else {
        $(this).carousel('next');
    }
    e.preventDefault();
});

$("#vertical-carousel").on("touchstart", function (event) {
    var yTouchPointStart = event.originalEvent.touches[0].pageY;
    $(this).on("touchmove", function (event) {
        var yTouchPointEnd = event.originalEvent.touches[0].pageY;
        if (Math.floor(yTouchPointStart - yTouchPointEnd) > 1) {
            $(".carousel").carousel('next');
        }
        else if (Math.floor(yTouchPointStart - yTouchPointEnd) < -1) {
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
    event.preventDefault();
});

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


  //  For Categories Like Button


$(".wishlist1").click(function(){
    $(".wishlist1").css("color", "red",  )
  
 })
 
   $(".wishlist2").click(function(){
    $(".wishlist2").css("color", "red " );
 
 })
 $(".wishlist3").click(function(){
    $(".wishlist3").css("color", "red " );
 
 })
 $(".wishlist4").click(function(){
    $(".wishlist4").css("color", "red " );
 
 })
 $(".wishlist5").click(function(){
    $(".wishlist5").css("color", "red " );
 
 })
 $(".wishlist6").click(function(){
    $(".wishlist6").css("color", "red " );
 
 })



 // For Loader

$(document).ready(function(){
    setTimeout(function(){
     $(".load").fadeOut()
     $(".start").fadeOut()
     $("#navbar_top").show()
    },2000)
})






 // For FeedBack Modal

 $(document).ready(function(){
    setTimeout(function(){
       $("#exampleModal").addClass("show");
       document.getElementById("exampleModal").style.display = "block";
 
    },10000)
 
    $("#close1").click(function(){
       document.getElementById("exampleModal").style.display = "none";
    })
 
    $("#close2").click(function(){
       document.getElementById("exampleModal").style.display = "none";
    })
 
    $("#close3").click(function(){
       document.getElementById("exampleModal").style.display = "none";
    })
 
 
 })









// Home Page Data Through JSON


 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title1").innerHTML = b.littleGirls[0].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img1").src = b.littleGirls[0].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing1").innerHTML = b.littleGirls[0].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title2").innerHTML = b.littleGirls[1].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img2").src = b.littleGirls[1].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing2").innerHTML = b.littleGirls[1].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title3").innerHTML = b.littleGirls[2].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img3").src = b.littleGirls[2].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing3").innerHTML = b.littleGirls[2].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title4").innerHTML = b.littleGirls[3].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img4").src = b.littleGirls[3].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing4").innerHTML = b.littleGirls[3].pricing )

 





 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title5").innerHTML = b.Boy[0].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img5").src = b.Boy[0].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing5").innerHTML = b.Boy[0].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title6").innerHTML = b.Boy[1].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img6").src = b.Boy[1].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing6").innerHTML = b.Boy[1].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title7").innerHTML = b.Boy[2].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img7").src = b.Boy[2].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing7").innerHTML = b.Boy[2].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title8").innerHTML = b.Boy[3].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img8").src = b.Boy[3].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing8").innerHTML = b.Boy[3].pricing )







 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title9").innerHTML = b.men[0].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img9").src = b.men[0].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing9").innerHTML = b.men[0].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title10").innerHTML = b.men[1].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img10").src = b.men[1].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing10").innerHTML = b.men[1].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title11").innerHTML = b.men[2].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img11").src = b.men[2].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing11").innerHTML = b.men[2].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title12").innerHTML = b.men[3].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img12").src = b.men[3].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing12").innerHTML = b.men[3].pricing )







 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title13").innerHTML = b.women[0].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img13").src = b.women[0].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing13").innerHTML = b.women[0].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title14").innerHTML = b.women[1].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img14").src = b.women[1].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing14").innerHTML = b.women[1].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title15").innerHTML = b.women[2].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img15").src = b.women[2].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing15").innerHTML = b.women[2].pricing )

 fetch("data.json").then( a => a.json()).then( b => document.getElementById("title16").innerHTML = b.women[3].title )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("img16").src = b.women[3].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("pricing16").innerHTML = b.women[3].pricing )








 fetch("data.json").then( a => a.json()).then( b => document.getElementById("galleryimage").src = b.galleryimage[0].imgurl )
 fetch("data.json").then( a => a.json()).then( b => document.getElementById("thriftimage").src = b.thriftimage[0].imgurl )













