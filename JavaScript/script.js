


import {stars} from './Modules/stars.js';
import {scrollParallax} from "./Modules/parallax.js";
import {animations} from "./Modules/animations.js";
import {cursor} from "./Modules/cursor.js";
import {mobileAnimations} from "./Modules/MobileAnimations.js";


stars();
scrollParallax()
animations()
cursor()
mobileAnimations()

window.addEventListener("DOMContentLoaded", function (){
  window.scrollTo(0,0)
})

var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
console.log(isMobile)
var isTablet= /Tablet|iPad/i.test(navigator.userAgent)
console.log(isTablet)
var mobile=window.innerWidth<=480
var desktop=window.innerWidth>1024
var userDevice="";

if(isTablet===true){
  userDevice="Tablet"
}

else if(mobile===true){
  userDevice="Mobile"

}
else{
  userDevice="Desktop"
}
window.addEventListener("load",function(){
  if(mobile){
    gridAdjustmentMobile()}
  else if(!mobile || isTablet){
    heightAdjustment()
  }})
console.log(userDevice)


window.addEventListener("scroll",function (){


  let aboutPage=document.querySelector("#aboutPage")
  let aboutPagePosition=aboutPage.getBoundingClientRect().top;
  var navbar=document.querySelectorAll(".navbar li a")
  var responseNav=document.querySelector("#responsiveBackground li ul")

    // if(aboutPagePosition<0){
    //
    //
    //   for(let i=0;i<3;i++){
    //
    //   navbar[i].style.color="var(--Main-1)"
    //     navbar[i].style.borderColor="var(--Main-1)"}
    // strokeAnimation1.style.backgroundColor="var(--Main-1)"
    //   strokeAnimation2.style.backgroundColor="var(--Main-1)"
    //   strokeAnimation1.style.boxShadow="0 0 5px var(--Main-1)"
    //   strokeAnimation2.style.backgroundColor="var(--Main-1)"
    //   strokeAnimation2.style.boxShadow="0 0 5px var(--Main-1)"
    //
    //
    //
    // }
    // else if(aboutPagePosition>0) {
    //
    //   for(let i=0;i<3;i++){
    //     navbar[i].style.color="var(--Dark)"
    //     navbar[i].style.borderColor="var(--Dark)"}
    //   strokeAnimation1.style.backgroundColor="var(--Dark)"
    //   strokeAnimation2.style.backgroundColor="var(--Dark)"
    //   strokeAnimation1.style.boxShadow="none"
    //   strokeAnimation2.style.boxShadow="none"
    //
    // }
    // if (aboutPage.getBoundingClientRect().bottom<50){
    //   for(let i=0;i<3;i++){
    //     navbar[i].style.color="var(--Dark)"
    //     navbar[i].style.borderColor="var(--Dark)"}
    //   strokeAnimation1.style.backgroundColor="var(--Dark)"
    //   strokeAnimation2.style.backgroundColor="var(--Dark)"
    //   strokeAnimation1.style.boxShadow="none"
    //   strokeAnimation2.style.boxShadow="none"
    //
    // }


})






window.onload = function () {
    window.scrollTo(0, 0);
}

/* GSAP ANIMATIONS*/
/*Intro Animation*/




















//Responsive

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
                      }
  }
);

const navButton=document.querySelector("#mobileNavButton")
var navBack=document.querySelector("#responsiveBackground")
var responsiveNavbar=document.querySelector("#responsiveNavbar")
var navList=document.querySelector("#navList")
var strokeAnimation1=document.querySelector("#stroke1")
var strokeAnimation2=document.querySelector("#stroke2")
var aboutPage=document.querySelector("#aboutPage")




// navButton.addEventListener("touchend", mobileNavToggle)

function mobileNavToggle(){
  navBack=document.querySelector("#responsiveBackground")

   if(navBack.classList.contains("stateDisable")){
     return
   }
  else if (navBack.classList.contains("stateNone") ){

    strokeAnimation1=document.querySelector("#stroke1")
    strokeAnimation2=document.querySelector("#stroke2")
    strokeAnimation1.style.transform="rotate(945deg)"
    strokeAnimation2.style.transform="rotate(-45deg)"
    console.log("animation working")

    navBack.style.opacity="1"

    navBack.classList.replace("stateNone","stateOn")
    navBack.style.zIndex="19";


    // if (aboutPage.getBoundingClientRect().bottom<50){
    //   strokeAnimation1.style.backgroundColor="var(--Dark)"
    //   strokeAnimation2.style.backgroundColor="var(--Dark)"
    //
    // }


  }
  else if(navBack.classList.contains("stateOn")){

    navBack.classList.replace("stateOn","stateOff")
    navBack.style.opacity="0"

    if(isTablet===true){
      strokeAnimation1.style.transform="translateY(-10px) rotate(180deg)"
      strokeAnimation2.style.transform="translateY(10px) rotate(180deg)"
    }
    else if(isMobile===true){
      strokeAnimation1.style.transform="translateY(-5px) rotate(180deg)"
      strokeAnimation2.style.transform="translateY(5px) rotate(180deg)"
    }

    setTimeout(function(){navBack.style.zIndex="0"},501)

    setTimeout(function(){
      if(navBack.classList.contains("stateDisabled")){
        exit()
      }
      else{
      navBack.classList.replace("stateOff","stateNone")}},505)

  }
  if(navBack.classList.contains("stateOn")){
    strokeAnimation1.style.backgroundColor="var(--Dark)"
    strokeAnimation2.style.backgroundColor="var(--Dark)"
    navButton.style.backgroundColor="var(--Dark)"
    strokeAnimation1.style.transform="rotate(45deg)"
    strokeAnimation2.style.transform="rotate(-45deg)"


  }







}
window.addEventListener("scroll",function (){

    if(navBack.classList.contains("stateOn")){
      strokeAnimation1.style.backgroundColor="var(--Dark)"
      strokeAnimation2.style.backgroundColor="var(--Dark)"}




})
// window.onresize=()=>{
//   location.reload()
// }
// Gallery Transition

var portfolio = document.querySelector(".Transition");
if(portfolio.getBoundingClientRect().top<1000){
  portfolio.style.opacity = Math.max(-1*0.001*portfolio.getBoundingClientRect().top, 1);
  // console.log(-1*0.01*portfolio.getBoundingClientRect().top)

}









//Opacity changer
var aboutWrapper = document.querySelector('#aboutWrapper');
var transition1=document.querySelector("#empty")
window.addEventListener("DOMContentLoaded",function (){
  aboutWrapper.style.opacity="0";
  transition1.style.opacity="0";

})

window.addEventListener("scroll",function (){
  var scrolled = window.pageYOffset;
  aboutWrapper.style.opacity = Math.min((window.pageYOffset * 0.001), 1);


var transition2=document.querySelector("#empty2")
var portfolioSec=document.querySelector("#portfolio-sec")

var transitionTrigger1=transition1.getBoundingClientRect().top
if(transitionTrigger1<0){
  transition1.style.opacity=Math.abs(Math.max((-transitionTrigger1*0.003), 0));
  aboutWrapper.style.opacity=transition1.style.opacity
  console.log("tran1")
  console.log(transition1.style.opacity)

}
if(transitionTrigger1>0){
  transition1.style.opacity="0"
  aboutWrapper.style.opacity=transition1.style.opacity
}

var transitionTrigger2=transition2.getBoundingClientRect().top
if(transitionTrigger2<0){
  transition2.style.opacity=1-Math.abs(Math.min((transitionTrigger2*0.002), 1));
  console.log(transitionTrigger2)

}
if(transitionTrigger2>0){
  transition2.style.opacity="1"
}})
//Function GridAdjustment Adjusts the grid layout
function gridAdjustmentMobile(){

  let gridChild=document.querySelectorAll(".galleryImg")
  let portfolio=document.querySelector(".portfolio")
  let sum=0
  let gridRow=1
  let gridCol=1
  for(let i=0;i<gridChild.length;i++){
    let height=gridChild[i].clientHeight
    let width=gridChild[i].clientWidth
    let imgNum=i;

    sum+=height

    if(i%1===0){
      gridRow+=1;
    }
    let gridRowEnd=gridRow+1


    // if(width>height){
    //   gridCol=1
    //   gridChild[i].style.gridArea=gridRow+"/"+gridCol+"/"+gridRow+"/"+3
    // }
    if(width>height && i%2===0){
      gridRow+=1
    }
    if(width<height){
      gridChild[i].style.gridArea=gridRow+"/"+gridCol+"/"+gridRowEnd+"/"+gridCol


    }
    // gridCol++
    // if(gridCol>2){
    //   gridCol=1
    // }
    console.log(gridChild[i].style.gridArea)
  }
  sum+=100
  let gridSize=sum/9
  portfolio.style.gridTemplateRows="repeat("+"auto"+gridSize+")"
  portfolio.style.height=sum+"px"
  sum+=400
  let portfolioHead=document.querySelector("#photography_header")
  let portfolioSec=document.querySelector("#portfolio-sec")
  portfolioSec.style.height=portfolio.clientHeight+300+"px";
  portfolioSec.style.position="relative"
  portfolioHead.style.top="0"
  portfolioHead.style.margin="0px"
  portfolioHead.style.position="absolute";
  portfolio.style.top=portfolioHead.clientHeight+"px";



}

function heightAdjustment(){
  let img=document.querySelectorAll(".galleryImg")
  let portfolio=document.querySelector(".portfolio")
  let portfolioSec=document.querySelector("#portfolio-sec")
  let imgText=document.querySelector(".image_text_hover")
  let sum=0
  img.forEach(function (x){
    sum+=x.clientHeight
  })
  sum=sum/2+150;

  console.log(sum)
  portfolio.style.height=sum+"px"

  sum+=50;
  portfolioSec.style.height=sum+"px";
}




//Image Viewer
function clickForImage(){

const modal=document.querySelector("#modal")
const imgContainer=document.querySelector("#fullImg")
const imageDiv=document.querySelectorAll(".galleryImg")
  const image=document.querySelectorAll(".specificImg")
  const strokeModalAnimation1=document.querySelector("#stroke1Modal")
  const strokeModalAnimation2=document.querySelector("#stroke2Modal")
  const modalExit=document.querySelector("#modalExit")

  let index=0;


imageDiv.forEach(img =>{

  img.addEventListener("click",(e)=>{

    let portrait=false
    if(img.clientHeight>img.clientWidth){
      portrait=true
    }



    // let counter=e.entries
    const imgSrc=e.target.src
    const modalHeading=img.firstElementChild.textContent
    const modalDescribe=img.lastElementChild.textContent
    const modalHeadingText=document.createElement("h1")
    const modalDescribeText=document.createElement("h3")



    modalHeadingText.innerText=modalHeading
    modalDescribeText.innerText=modalDescribe
    // modalHeadingText.classList.add("imageTitle")
    console.log(imgSrc)
    if(imgSrc!==undefined) {
      imgModal(imgSrc, modalHeadingText,modalDescribeText,portrait);
    }



  })




})
let imgModal = (src,modalHeading,modalDescribe,portrait) => {

  const portSec=document.querySelector("#portfolio-sec")
  const modal = document.createElement("div");



  var closeBtnGraphics=document.createElement("div")
  var stroke1=document.createElement("div")
  var stroke2=document.createElement("div")
  let closeBtn = document.createElement("button");



  modal.classList.add("modalActive")
  modal.setAttribute("class", "modal");

  //add the modal to the main section or the parent element
  portSec.appendChild(modal)
  //adding image to modal
  const newImage = document.createElement("img");
  const imgChecker = document.createElement("img");


  newImage.setAttribute("src", src);

  modal.append(newImage)
  if(isMobile) {
    newImage.setAttribute("class", "modalImageMobile")
  }



  //If image is portrait and on desktop we want the modal to be organized different
  if(portrait===true && isMobile===false){
    modal.style.flexDirection="row"
    modal.style.justifyContent="center"

    newImage.style.position="absolute"
    newImage.style.height="90%"
    newImage.style.width="40%"

    modalHeading.style.transform="rotate(270deg)"
    modalHeading.style.position="absolute"
    modalHeading.style.left="20%"

  }


  stroke1.setAttribute("class", "strokes")
  stroke2.setAttribute("class","strokes")
  stroke1.setAttribute("id", "stroke1Modal")
  stroke2.setAttribute("id","stroke2Modal")

  closeBtn.setAttribute("class", "modalExit")

  closeBtnGraphics.setAttribute("class","modalExitGraphics")
  closeBtnGraphics.append(stroke1)
  closeBtnGraphics.append(stroke2)
  portfolio.style.animation="fadeIn 0.5s ease-out;"
  closeBtn.onmouseenter=function (){
  const cursor=document.querySelector(".cursor")
  cursor.classList.add("hover")
  closeBtnGraphics.style.transform="scale(1.15)"
  stroke1.style.transform="rotate(135deg)"
  stroke2.style.transform="rotate(-135deg)"
}
  closeBtn.onmouseleave=function (){
    const cursor=document.querySelector(".cursor")
    cursor.classList.remove("hover")
  closeBtnGraphics.style.transform="scale(1)"
  stroke1.style.transform="rotate(180deg)"
  stroke2.style.transform="rotate(-180deg)"
  }


  //Setting up Mobile Modal

  if(isMobile){
    stroke1=document.querySelector("#stroke1")
    stroke2=document.querySelector("#stroke2")
    strokeAnimation1.style.transform=" rotate(135deg)"
    strokeAnimation2.style.transform=" rotate(-135deg)"
    strokeAnimation1.style.backgroundColor="var(--Main-1)"
    strokeAnimation2.style.backgroundColor="var(--Main-1)"

    closeBtn=navButton
    if(navBack.classList.contains("stateNone")){
      navBack.classList.replace("stateNone","stateDisable")
    }
    else{
    navBack.classList.replace("stateOff","stateDisable")}
 closeBtn=document.querySelector("#mobileNavButton")
    if(navBack.classList.contains("stateNone")){
      navBack.classList.replace("stateNone","stateDisable")
    }
    else{
    navBack.classList.replace("stateOff","stateDisable")}




  }
  //close function
  closeBtn.onclick = () => {
    if(isTablet){
      strokeAnimation1.style.backgroundColor="var(--Dark)"
      strokeAnimation2.style.backgroundColor="var(--Dark)"
      strokeAnimation1.style.transform="translateY(-10px) rotate(180deg)"
      strokeAnimation2.style.transform="translateY(10px) rotate(180deg)"
      navBack.classList.replace("stateDisable","stateNone")
    }
    else if(isMobile){


      strokeAnimation1.style.backgroundColor="var(--Dark)"
      strokeAnimation2.style.backgroundColor="var(--Dark)"
      strokeAnimation1.style.transform="translateY(-5px) rotate(180deg)"
      strokeAnimation2.style.transform="translateY(5px) rotate(180deg)"
      navBack.classList.replace("stateDisable","stateNone")






    }


    modal.classList.replace("modalActive","modalDeactivate")
    modal.style.opacity="0"
    modal.style.zIndex="0"

    setTimeout(modal.style.zIndex="0",680);


    // setTimeout(modal.remove,1000);

  };
  if(isMobile){
    modal.append(modalHeading,newImage,modalDescribe)


  }
  else{
  modal.append(modalHeading,newImage, closeBtn,closeBtnGraphics);}

}



}






clickForImage()
document.addEventListener("DOMContentLoaded",function (){
  navBack.style.zIndex="0"
} )
navButton.addEventListener("click", mobileNavToggle )






//Things I do for love
//Selecting the North Star

function loverBoy() {
  const northStar = document.querySelector("#northStar img")
//Names of girls
  const girlNames = {stargaze: "Mila", pinot: "Miah", starbucks: "Jasmine", smalldick:"Ethan", daddy:"Chloe", hourglass:"Alif" }
//Lovelines
  const loveLines = ["I named this star after you", "I was thinking about you when I made this star", "you shine brighter than any star I can make for you",]


//The click event listener for the North Star
  document.addEventListener("DOMContentLoaded", function () {

    northStar.addEventListener("click", function love (e) {

      console.log("girl_name")
//  EVery time the star is clicked a new variable with an empty string is formed
      var pass = ""
      let selector=0
      selector = (Math.random() * loveLines.length)-0.05
      let line = loveLines[Math.floor(selector)]
//  The event Listener to read the password
      window.addEventListener('keydown', function (event) {

        //Adding keypress to the string
        pass += event.key
        //Filtering out unnessecary keys such as shift and control
        if (event.shiftKey) {
          pass = pass.replace('Shift', '')

        } else if (event.ctrlKey) {
          pass = pass.replace('Ctrl', '')
        }
        else if(event.key==="Enter"){
          pass = pass.replace('Enter', '')
        }


        console.log(pass)
        //making the string lowercase
        pass = pass.toLowerCase()
        //checking if a key corresponds to the value
        if (girlNames[pass]) {

          console.log(selector)

          let finalLine=girlNames[pass] + ", " + line
          //  the name popping up

          window.alert(finalLine)
          // let popup=document.createElement("div")
          // popup.setAttribute("id","lovey")
          // popup.innerText=finalLine
          // aboutWrapper.append(popup)

          //the password is emptied again
          finalLine=""
          pass = ""
          e.target.removeEventListener(e.type, love);








        }


      })

    })

  })
}

loverBoy()
