// import {gsap} from "../GSAP/gsap.min.js";

function mobileAnimations(){
function exhibitMover(){
  var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  var exhibit=document.querySelector(".Exhibit")
  var textBox1=document.querySelector("#textBox1")
  var textBox2=document.querySelector("#textBox2")
  var textBox3=document.querySelector("#textBox3")
  var textBox4=document.querySelector("#textBox4")
  var textArr=document.querySelector(".aboutArticle").children



  if(isMobile){
    window.addEventListener("DOMContentLoaded",function (){
      for (const x of textArr){
        x.style.opacity="0"
      }

    })
  window.addEventListener("scroll",function (
                                             ){
    console.log(window.scrollY)
    // console.log(window.screenTop)
    let lastOpacity="1"


    if(window.scrollY>50 ){
      exhibit.style.opacity="0";
      lastOpacity=exhibit.style.opacity;

    }
    else if (window.scrollY<250){
        exhibit.style.opacity="1"
        lastOpacity=exhibit.style.opacity;



    }
     if (window.scrollY>20 && window.scrollY<250){
      exhibit.style.opacity=lastOpacity;
    }

    console.log(window.scrollY)
    console.log(textBox3.getBoundingClientRect().top)
    // while(textArr[3].getBoundingClientRect().top>100){

      for(let i=0;i<4;i++){
        if(textArr[i].getBoundingClientRect().top<500){
          textArr[i].style.opacity="1"
          console.log(textArr[i])

        }
        else {
          textArr[i].style.opacity="0"
        }
      }


    console.log(exhibit.getBoundingClientRect().top)

  })





}}
exhibitMover()

}

export {mobileAnimations}
