gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


function animations() {


  const tl = gsap.timeline({defaults: {ease: "expo.in"}})
  const navigation_animation = gsap.timeline({defaults: {ease: "expo.in"}})
  const arr = gsap.timeline({defaults: {ease: "expo.in"}, repeat: -1, repeatDelay: 0.4})
  const about_animation = gsap.timeline({defaults: {ease: "expo.in"}, repeat: -1, repeatDelay: 0.4})
// const textboxs=gsap.timeline({defaults:{repeat:-1, repeatDelay:0.5}})
  const star = gsap.timeline({repeat: -1})
  const eclipse = gsap.timeline({repeat: -1})
  const dot = gsap.timeline({repeat: -1, repeatDelay: 3})
  tl.to(".hide", {opacity: 1, duration: 0.6})

  tl.to(".intro", {delay: 0.8, opacity: 0, ease: "expo.in", duration: 0.5})
  tl.to(".intro", {y: "-100%", ease: "expo.in", duration: 0.1})
// gsap.to("h5",{delay:0.5,duration:3.5, ease:"expo.in",text:"Safwan Serajum"})
  /*Landing*/
  tl.to(".Exhibit", {delay: 0, opacity: 1, duration: 0.3, ease: "expo.in"})
  tl.to("#About-me", {delay: 0, opacity: 1, duration: 0.3, ease: "expo.in"})

// about_animation.to('.About-me',{delay:3,opacity:0.8,duration:5,ease:"expo.in"})
// about_animation.to('.About-me',{delay:1, opacity:1,duration:5,ease:"expo.out"})

  tl.to("#nav-name", {delay: 0, opacity: 1, duration: 0.3, ease: "expo.in"})

  navigation_animation.from("#nav1", {delay: 2.6, opacity: 0, duration: 0.3, ease: "expo.in"})
  navigation_animation.from("#nav2", {opacity: 0, duration: 0.3, ease: "expo.in"})
  navigation_animation.from("#nav3", {opacity: 0, duration: 0.3, ease: "expo.in"})
  navigation_animation.from("#buttonAnimationMobile",{opacity:0,delay:2,duration:0.5,ease:"expo.in"},1)


//ARROW ANIMATIONS
  tl.from("#circleAnimationLanding", {delay: 0, opacity: 0, duration: 0.2, ease: "expo.in"})
  tl.to("#arrow", {delay: 0, opacity: 0.5, duration: 0.4, ease: "expo.in"})
  dot.from("#circleAnimationLanding", {opacity: 0, duration: 10, ease: "sine.inOut"})
  dot.to("#circleAnimationLanding", {opacity: 0, duration: 10, ease: "sine.inOut"})
  arr.to('#arrow', {y: 10, duration: 1.5, ease: "expo.in"})
  arr.to('#arrow', {y: 0, duration: 1.5, ease: "expo.out"})
//Portfolio ScrollTrigger
// const portfolioFade=gsap.timeline({defaults:{ease:"expo.in"}});
//Star
  const starWobble = gsap.timeline({repeat: -1, repeatDelay: 1});
  const mobileStar=gsap.timeline({repeat: -1, repeatDelay: 1});
  star.to("#northStar img", {
    opacity: 0.5,
    transform: "scale(0.5)",
    duration: 5,
    ease: "sine.inOut",
    delay: 0.2
  })
  star.to("#northStar img", {
    delay: 0.2,
    opacity: 1,
    transform: "scale(1)",
    ease: "sine.inOut",
    duration: 5
  })

  starWobble.to("#northStar img", {
    y: -10,
    duration: 14,
    ease: "sine.inOut"
  })
  starWobble.to("#northStar img", {
    y: 0,
    duration: 14,
    ease: "sine.inOut"
  })

  // mobileStar.to("#star1Mobile img", {
  //   opacity: 0.8,
  //   transform: "scale(0.8)",
  //   duration: 3,
  //   ease: "sine.inOut",
  //   delay: 0.2
  // })
  // mobileStar.to("#star1Mobile img", {
  //   delay: 0.2,
  //   opacity: 1,
  //   transform: "scale(1)",
  //   ease: "sine.inOut",
  //   duration: 3
  // })
//Solar Eclipse
  const sun = document.querySelector("#sun");
  const moon = document.querySelectorAll(".moon");
  const eclipseWobble = gsap.timeline({repeat: -1, repeatDelay: 1});
  eclipseWobble.to("#solarEclipseWrapper", {
    y: -30,
    duration: 6,
    ease: "sine.inOut"
  })
  eclipseWobble.to("#solarEclipseWrapper", {
    y: 0,
    duration: 6,
    ease: "sine.inOut"
  })
  eclipse.from(moon, {
    transform: "translate3d(-150px,-150px,5px)",
    duration: 15,
    ease: "sine.inOut",
    delay: 0.5

  })
  eclipse.to(moon, {
    transform: "translate3d(150px,150px,0px)",
    duration: 15,
    ease: "sine.inOut"

  })

  eclipse.to(moon, {
    transform: "translate3d(0px,0px,0px)",
    duration: 15,
    ease: "sine.inOut",
    delay: 0.5

  })
  eclipse.to(moon, {
    transform: "translate3d(-150px,150px,0px)",
    duration: 15,
    ease: "sine.inOut"

  })

//Solar System
  const center = document.querySelector("#center")
  const planet1path = document.querySelector("#planet1Path")
  const solarWobble = gsap.timeline({repeat: -1, repeatDelay: 1});

  solarWobble.to("#solarSystem", {
    y: -30,
    duration: 10,
    ease: "sine.inOut"
  })
  solarWobble.to("#solarSystem", {
    y: 0,
    duration: 10,
    ease: "sine.inOut"

  })

  gsap.from(center, {
    rotation: 360,
    duration: 12,
    repeat: -1,

    transformOrigin: "56%"
  })
  gsap.from(planet1path, {
    rotation: 360,
    transformOrigin: "center",

    duration: 7,
    ease: "linear",
    repeat: -1
  },)
  gsap.from("#planet2Path", {
    rotation: 360,
    transformOrigin: "center",

    duration: 9,
    ease: "linear",
    repeat: -1

  })
  gsap.from("#planet3Path", {
    rotation: 360,
    transformOrigin: "center",

    duration: 12,
    ease: "linear",
    repeat: -1

  },)
  gsap.from("#planet4Path", {
    rotation: 360,
    transformOrigin: "center",

    duration: 15,
    ease: "linear",
    repeat: -1

  },)
  gsap.from("#planet5Path", {
    rotation: 360,
    transformOrigin: "center",

    duration: 18,
    ease: "linear",
    repeat: -1

  }, 0.7)
  gsap.from("#planet6Path", {
    rotation: 360,
    transformOrigin: "center",

    duration: 22,
    ease: "linear",
    repeat: -1

  }, 1.3)
  gsap.from("#planet7Path", {
    rotation: 360,
    transformOrigin: "center",

    duration: 25,
    ease: "linear",
    repeat: -1

  }, 0.5)
  gsap.from("#planet8Path", {
    rotation: 360,
    transformOrigin: "center",

    duration: 30,
    ease: "linear",
    repeat: -1

  }, 1.8)




  var imageGalleryFadeDuration = 5;

  gsap.to('.img-1', {
    opacity: 1,
    duration: imageGalleryFadeDuration,
    scrollTrigger: ".img-1",
    ease: "expo.out"
  })
  gsap.to('.img-2', {
    opacity: 1,
    delay: 0.3,
    duration: imageGalleryFadeDuration,
    scrollTrigger: ".img-1",
    ease: "expo.out"
  })
  gsap.from('.img-3', {
    opacity: 0,
    duration: imageGalleryFadeDuration,
    scrollTrigger: ".img-3",
    ease: "expo.out"
  })
  gsap.from('.img-4', {
    opacity: 0,
    duration: imageGalleryFadeDuration,
    delay: 0.3,
    scrollTrigger: ".img-3",
    ease: "expo.out"
  })
  gsap.from('.img-5', {
    opacity: 0,
    duration: imageGalleryFadeDuration,
    scrollTrigger: ".img-5",
    ease: "expo.out"
  })
  gsap.from('.img-6', {
    opacity: 0,
    duration: imageGalleryFadeDuration,
    delay: 0.3,
    scrollTrigger: ".img-5",
    ease: "expo.out"
  })
  gsap.from('.img-7', {
    opacity: 0,
    duration: imageGalleryFadeDuration,
    scrollTrigger: ".img-7",
    ease: "expo.out"
  })
  gsap.from('.img-8', {
    opacity: 0,
    duration: imageGalleryFadeDuration,
    delay: 0.3,
    scrollTrigger: ".img-7",
    ease: "expo.out"
  })

  var contactHeader=gsap.timeline({repeat:-1, yoyo:true, delay:3})
  const messagesArr=["Contact me!","Get in touch!","Say Hi!","Leave a message!","Drop a message!","Drop by!"]
  var part2=document.querySelector("#part2")
  let duration2=1

  for (let i = 0; i <messagesArr.length ; i++) {

    contactHeader.to(part2,{
      text:{value:messagesArr[i]},
      duration:duration2,
      ease:"sine.inOut",
      padSpace:true,
      type:"diff",
      delay:3





    })


  }


//Mobile Navbar Wobble




}


export {animations};
