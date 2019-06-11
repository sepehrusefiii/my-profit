


//page loader//
$(document).ready(function () {
  $(".p_loader").fadeOut("slow");
  $(".parent_page").show();
});
/** humberger menu toggle class */
$('.handle').on('click', function () {
  $('nav ul').toggleClass('showing');
});
/** tab content for aside page */
$('label').click(function () {
  $('label').removeClass('on');
  $(this).addClass('on');
  var idx = $(this).index() + 1;

  $('.tab_content').css('display', 'none');
  $('.tab_content' + idx).css('display', 'block');

});
/**nav side */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//fixed navbar//
window.onscroll = function() {myFunction()};
var header = document.getElementById("menu-bottom");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/**reservation button */
$('.bottomMenu').hide();
$(document).scroll(function() {
  var toppage = $(this).scrollTop();
  if (toppage > 800) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
});
//panel chat//
$('.panel_chat').hide();
$('.open_panel_chat').on('click', function () {
  $('.open_panel_chat').toggleClass('twist');
  $('.open_panel_chat').removeClass('twist').addClass('d-none');
  $('.panel_chat').slideToggle();
});
$('.close_panel_chat').on('click', function () {
  $('.panel_chat').slideToggle();
  $('.open_panel_chat').removeClass('d-none').addClass('twist');
})

$('.box_place_button').on("click", function () {
  $(this).find('.fa-chevron-down').toggleClass('up');
});

//light slider///
$('#lightSlider').lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  slideMargin: 0,
  thumbItem: 8,
  autoWidth: false,
  prevHtml: '<span class="custom-prev-html"><img src="./img/icons8-next-page-48 (1).png"  class="next"/></span>',
  nextHtml: '<span class="custom-next-html"><img src="./img/icons8-next-page-48 (1).png" /></span>',
  cssEasing: 'ease',
  adaptiveHeight: false,
  rtl: true,
  auto: true,
  responsive: [],
});
//navside//
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//mini searchbar//
$('li .fa-search').click(function () {
  $('.search_sm_hide').toggleClass('mini_searchbar')
})
//button loader//
$('.spinner-grow').hide();
$('button').click(function () {
  $('button').find('span').hide();
  $(this).find('span').show();
});
//open layers for show map//
//for map//
$(document).ready(function () {
  load_map(59.48217439, 36.33739868);
})
function load_map(lng, lat) {
  $('#panel-modal-map').html(''); // Clear last map
  OpenLayers.ImgPath = '../img/'
  var map = new OpenLayers.Map("panel-modal-map");

  var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
  var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection

  var osmLayer = new OpenLayers.Layer.OSM();
  map.addLayer(osmLayer);

  var position = new OpenLayers.LonLat(lng, lat).transform(fromProjection, toProjection);
  var markers = new OpenLayers.Layer.Markers("Markers");
  map.addLayer(markers);
  markers.addMarker(new OpenLayers.Marker(position));

  var zoom = 15;
  map.setCenter(position, zoom);
}

//tooltip//
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/**for close outside element */
$(document).mouseup(function (e) {
  console.log(e.target.toString());
  if (e.target.toString() == '[object HTMLInputElement]') {
    e.target.find('.selects').removeClass("s_box").addClass("o_box");
  } else {
    $('.selects').removeClass("o_box").addClass("s_box");
  }
});

$('.origin').on('click', function () {
  $('.selects').removeClass("s_box").addClass("o_box");
});

//selectbox//
$('.selects li').each(function () {
  $(this).on('click', function () {
    var txt = $(this).find('.city').text();
    $('.origin').val(txt);
    $('.selects').removeClass("o_box").addClass("s_box");
  })
});
//account//
// $('.form-row').addClass('d-none');
$('.account').on('click', function () {
  $(this).text('');
  $('.form-row').removeClass('d-none');
  $('.cls').removeClass('d-none');
  $('.cls').show();
})
$('.cls').on('click', function () {
  $('.form-row').addClass('d-none');
  $('.account').text('ورود');
  $(this).hide();
})
//owl carousel//
/* Owl Carousel  custom*/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    navigation: true,
    rtl: true,
    items: 2,
    autoplay: true,
    loop: true,
    autoHeight: false,
    margin: 8,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });


});

$(".owl-control").owlCarousel({
  navigation: true,
  rtl: true,
  items: 1,
})

/**for news button */
$('.news_box').click(function(){
  $(this).toggleClass('open');
})
/**counter distance from important place*/
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
/**humberger icon */
$('.x').click(function(){
  $(this).toggleClass('change');
  
})
$('.closebtn').click(function(){
  if($('.sidenav').width()>=250){
    $('.x').removeClass('change');
  }
})

/**datepicker */
$(".datepicker").pDatepicker({
  navigator:{
    onPrev:function(){
    $('td .pri').remove();
    $('td').append('<span class="pri">100 ریال</span>')
  },
  onNext:function(){
    $('td .pri').remove();
    $('td').append('<span class="pri">100 ریال</span>')
  },
  onSwitch:function(){
    $('td .pri').remove();
    $('td').append('<span class="pri">100 ریال</span>')
  }
  },
  toolbox:{
    onToday:function(){
      $('td .pri').remove();
      $('td').append('<span class="pri">100 ریال</span>')
    },
    calendarSwitch:{
      onSwitch:function(){
        $('td .pri').remove();
        $('td').append('<span class="pri">100 ریال</span>');
      }
    }
  },
  onShow:function(){
    $('td .pri').remove();
    $('td').append('<span class="pri">100 ریال</span>')
  },
 
});