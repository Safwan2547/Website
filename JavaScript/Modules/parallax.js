function scrollParallax () {
  document.addEventListener("DOMContentLoaded", function () {
    var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if(!isMobile){
    var exhibit = document.querySelector('.Exhibit');
    var aboutWrapper = document.querySelector('#aboutWrapper');
    var star1 = document.querySelector("#northStar")
    var transition1=document.querySelector(".Transition")
    var dimmingZone1 = document.querySelector(".dimmingZone1")

    console.log(dimmingZone1[1], dimmingZone1[2]);
    var dimmingZone2 = document.querySelector(".dimmingZone2")
    var dimmingZone3 = document.querySelector(".dimmingZone3")
    var dimmingZone4 = document.querySelector(".dimmingZone4")
    var dimmingZone5 = document.querySelector(".dimmingZone5")
    var dimmingZone6 = document.querySelector(".dimmingZone6")
    var dimmingZone7 = document.querySelector(".dimmingZone7")
    var dimmingZone8 = document.querySelector(".dimmingZone8")
    var dimmingZone9 = document.querySelector(".dimmingZone9")
    var dimmingZone10 = document.querySelector(".dimmingZone10")
    var star=document.querySelectorAll(".star")
    var starx=document.querySelector(".star")
    var allZones=[dimmingZone1,dimmingZone2,dimmingZone3,
      dimmingZone4,dimmingZone5,
      dimmingZone6,dimmingZone7,
      dimmingZone8,dimmingZone9,dimmingZone10]
    var eclipse = document.querySelector("#solarEclipse")
    var textBox1 = document.querySelector(".textBox1")
    var textBox2 = document.querySelector(".textBox2")
    var textBox3 = document.querySelector(".textBox3")
    var about_text = document.querySelector("#About-me")
    // var photographyHeading=document.querySelector("#photography_header")
    var about_article = document.querySelector(".aboutArticle")
    var stroke1 = document.querySelector("#stroke1")
    var stroke2 = document.querySelector("#stroke2")
    var blackout = document.querySelector("#blackout");
    var aboutAnimations=document.querySelector("#animationsAboutPage")



// //SCroll issue Debug
    window.addEventListener('scroll', () => {
//     console.log("window: "+ window.scrollY);
//     var container=document.querySelector("body");
//     console.log("body: "+container.scrollTop)
//     var exhibit_css_x=document.querySelector(".Exhibit");
//     // console.log(exhibit_css_x.style.backgroundPositionX);
//
//
//
      var scrolled = window.pageYOffset;
      var scrollRate0 = scrolled * -1;
      var scrollRate1 = scrolled * -0.8;
      var scrollRate2 = scrolled * -0.5;
      var scrollRate3 = scrolled * -0.4;
      var scrollRate4 = scrolled * -0.3;
      var scrollRate5 = scrolled * -0.2;
      var scrollRate6 = scrolled * -0.08;
      var scrollRate7 = scrolled * -0.05;


      exhibit.style.transform = 'translate3d(0px,' + scrollRate1 + 'px,0px)';

      about_text.style.transform = 'translate3d(0px,' + -2 * scrollRate7 + 'px,0px)';
      //Fixing a css Bug with position for the about text
      about_text.style.transform = 'translateY(2vw)'
      if(window.innerWidth<=1024 && window.innerWidth>=480){
        about_text.style.transform = 'translate(-50%,-50%)'
      }

      // hali.style.transform='translate3d(0px,' +scrollRate3+ 'px,0px)';


      for (let i = 0; i < star.length-2; i++) {
        if (star[i].style.height>1+"px"){
          var distance=star[i].style.height.replace("px","")
          distance= parseFloat(distance);
          var distanceStar=(distance)/10


          star[i].style.transition='all ease-out-500ms'
          star[i].style.transform='translate3d(0px,' + scrollRate0*Math.min(distanceStar*2,0.8)+ 'px,0px)'


        }



      }
      star1.style.transform = 'translate3d(0px,' + scrollRate7 + 'px,0px)';
      eclipse.style.transform = 'translate3d(0px,' + scrollRate6 + 'px,0px)';

      // textBox1.style.transform='translate3d(0px,' +scrollRate4+ 'px,0px)';
      // textBox2.style.transform='translate3d(0px,' +scrollRate3+ 'px,0px)';
      // textBox3.style.transform='translate3d(0px,' +scrollRate2+ 'px,0px)';
      if(window.innerWidth>=1024){
        about_article.style.transform = 'translate3d(0px,' +   scrollRate7 + 'px,0px)';}

      // transition1.style.opacity = Math.min(scrolled * 0.0012, 1);











    })

//     img1.style.transform='translate3d(0px,'+scrollRate2+'px,0px)';
//     img2.style.transform='translate3d(0px,'+scrollRate3+'px,0px)';
//     img3.style.transform='translate3d(0px,'+scrollRate3+'px,0px)';
//     img4.style.transform='translate3d(0px,'+scrollRate5+'px,0px)';
//     img5.style.transform='translate3d(0px,'+scrollRate6+'px,0px)';
//     img6.style.transform='translate3d(0px,'+scrollRate7+'px,0px)';
//     img7.style.transform='translate3d(0px,'+scrollRate7+'px,0px)';
//     img8.style.transform='translate3d(0px,'+scrollRate6+'px,0px)';
//     img9.style.transform='translate3d(0px,'+scrollRate7+'px,0px)';
//     img10.style.transform='translate3d(0px,'+scrollRate4+'px,0px)';})
//
//
//
//
  }})
}
export {scrollParallax};
