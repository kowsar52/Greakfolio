swiper();
cursorMove();
videoPlay();
function swiper(){
  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
}
function cursorMove(){
  var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})
}

function videoPlay(){
  let btn = document.querySelector("#video-btn")
let video = document.querySelector("#reputation")
let overflow = document.querySelector(".black-overflow")
btn.onclick = function(){
  video.classList.add('active')
}
overflow.onclick = function(){
  video.classList.remove('active')
}
}