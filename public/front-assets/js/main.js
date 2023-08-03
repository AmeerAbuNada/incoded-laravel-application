
$(function () {
  $(".iconDrop").click(function (e) {
    e.stopPropagation();
    $(".dropMenu").slideToggle(300);
    $(".dropDownSearch").slideUp(300);
  });

  $(".searchNav").click(function (e) {
    e.stopPropagation();
    $(".dropDownSearch").slideToggle(300);
    $(".dropMenu").slideUp(300);
  });

  $(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest(".listDrop").length) {
      $(".dropMenu").slideUp(300);
    }
    if (!$target.closest(".listDropS").length) {
      $(".dropDownSearch").slideUp(300);
      
    }
  });
});


///////////////////////////////////////////

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}

/////////////////////////////////////////

const blurDivs = document.querySelectorAll(".blur-load");
blurDivs.forEach(div => {
  const img = div.querySelector("img");

  function loaded(){
    div.classList.add("loaded");
  }

  if(img.complete){
    loaded();
  }else{
    img.addEventListener("load" , loaded)
  }

})

////////////////////////////////////////////////////

// const buttons = document.querySelectorAll(".btnCenterC");
// console.log(buttons);
// let added = false;

// Array.from(buttons).forEach((button) => {
//   button.addEventListener('click', (event) => {
//     if (added) {
//       event.target.style.background = "#db1477";
//       event.target.text = "أضف الى السلة";
//       added = false;
//     } else {
//       event.target.style.background = "#501d68";
//       event.target.text = "عرض السلة";
//       added = true;
//     }
//   });
// });

/////////////////////////////////////////////

var hamburgersB = document.querySelector(".hamburger");

let active = true;
hamburgersB.addEventListener("click", function() {
  if(active){
    $('.menuNavbar').addClass("active");
    $('.hamburger').addClass("active");
    $('body').addClass("active");
    active = false;
  }else{
    $('.menuNavbar').removeClass("active");
    $('.hamburger').removeClass("active");
    $('body').removeClass("active");
    active = true;
  }

})

var inputs = document.getElementsByTagName('input');

for (var i=0; i<inputs.length; i++)  {
  if (inputs[i].type == 'checkbox')   {
    inputs[i].checked = false;
  }
}