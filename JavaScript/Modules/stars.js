 import * as parallax from "./parallax.js";

 function stars() {
   var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

   var isTablet= /Tablet|iPad/i.test(navigator.userAgent)
   var count = 40;
   if(isTablet){
     count=32;
   }
   else if(isMobile){
     count=20;

   }



   const insertion = document.querySelector("#aboutPage");


   var i = 0;
   function starAnimate(star){
     const duration=Math.max(Math.random()*10,5)
     const delay=Math.max((Math.random()*5),3)

     star.style.animationDuration=duration+'s'
     star.style.animationDelay=2*delay+'s'

   }
   if(isMobile){

     for (i = 0; i < count; i++) {
       const star = document.createElement("dimmingZoneMobile")
       star.classList.add("star")
       star.classList.add("dimmingZoneMobile")
       const x = Math.floor(Math.random() * window.innerWidth)-10
       const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)-2500

       const size = Math.random() * 1;
       star.style.left = x + "px"
       star.style.top = y + "px"
       star.style.width = 1 + size + "px";
       star.style.height = 1 + size + "px";
       insertion.appendChild(star)


     }
   }





   for (i = 0; i < count; i++) {

     const star = document.createElement("dimmingZone1")
     star.classList.add("star")
     star.classList.add("dimmingZone1")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)*1.5

     const size = Math.random() * 1;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     insertion.appendChild(star)


   }

   for (i = 0; i < count; i++) {
     const star = document.createElement("dimmingZone2")
     star.classList.add("star")
     star.classList.add("dimmingZone2")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)*1.5

     const size = Math.random() * 1;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     starAnimate(star)


     insertion.appendChild(star);



   }
   for (i = 0; i < count; i++) {
     const star = document.createElement("dimmingZone3")
     star.classList.add("star")
     star.classList.add("dimmingZone3")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)-2000

     const size = Math.random() * 2;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     starAnimate(star)
     insertion.appendChild(star)


   }
   for (i = 0; i < count; i++) {
     const star = document.createElement("dimmingZone4")
     star.classList.add("star")
     star.classList.add("dimmingZone4")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)+2000

     const size = Math.random() * 2;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     starAnimate(star)
     insertion.appendChild(star)


   }
   for (i = 0; i < count-3; i++) {
     const star = document.createElement("dimmingZone5")
     star.classList.add("star")
     star.classList.add("dimmingZone5")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)-3000

     const size = Math.random() * 3;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     starAnimate(star)
     insertion.appendChild(star)


   }
   for (i = 0; i < count-3; i++) {
     const star = document.createElement("dimmingZone6")
     star.classList.add("dimmingZone6")
     star.classList.add("star")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)

     const size = Math.random() * 3;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";

     starAnimate(star)
     insertion.appendChild(star)


   }
   for (i = 0; i < count-4; i++) {
     const star = document.createElement("dimmingZone7")
     star.classList.add("dimmingZone7")
     star.classList.add("star")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)

     const size = Math.random() * 2;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";

     starAnimate(star)
     insertion.appendChild(star)


   }
   for (i = 0; i < count-4; i++) {
     const star = document.createElement("dimmingZone8")
     star.classList.add("star")
     star.classList.add("dimmingZone8")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)

     const size = Math.random() * 3;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     starAnimate(star)
     insertion.appendChild(star)


   }
   for (i = 0; i < count-5; i++) {
     const star = document.createElement("dimmingZone9")
     star.classList.add("star")
     star.classList.add("dimmingZone9")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)

     const size = Math.random() * 3;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     starAnimate(star)
     insertion.appendChild(star)


   }
   for (i = 0; i < count-5; i++) {
     const star = document.createElement("dimmingZone10")
     star.classList.add("star")
     star.classList.add("dimmingZone10")
     const x = Math.floor(Math.random() * window.innerWidth)-10
     const y = Math.floor(Math.random() * document.getElementById("aboutPage").clientHeight)

     const size = Math.random() * 4;
     star.style.left = x + "px"
     star.style.top = y + "px"
     star.style.width = 1 + size + "px";
     star.style.height = 1 + size + "px";
     starAnimate(star)
     insertion.appendChild(star)


   }

 const twink = gsap.timeline( {onComplete:function (){
   twink.invalidate()
     twink.restart()
   }})



  var zone1= gsap.utils.random([],true)
  var zone2= gsap.utils.random(["dimmingZone1","dimmingZone2","dimmingZone3",
    "dimmingZone4","dimmingZone5",
    "dimmingZone6","dimmingZone7",
    "dimmingZone8","dimmingZone9","dimmingZone10"],true)

  var duration=gsap.utils.random(1,2,1,true)

  var delay=gsap.utils.random(1,2,1,true);
  var x=zone2();



  var y=duration();




  gsap.to(zone2(), {
    opacity: 0,
    duration: y,
    delay: delay(),
    repeat:-1,
    repeatRefresh:true






  })
   gsap.to(zone2(),{
    opacity: 1,
    duration: y,
    delay: delay(),
     repeat:-1,
     repeatRefresh:true




  },)
  // twink.fromTo(zone2(), {
  //   opacity: 0,
  //   duration: y,
  //   delay: delay(),
  //
  //
  //
  //
  // },{
  //   opacity: 1,
  //   duration: y,
  //   delay: delay(),
  //   onComplete:twink.invalidate()
  //
  //
  //
  //
  //
  // })


  function twinkie() {

    console.log(x)
    console.log(zone2())
    console.log(duration())
    console.log(delay())



  }














 }

export  {stars};
