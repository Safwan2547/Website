function cursor() {
  const cursor = document.querySelector(".cursor");
  const customHover1 = document.querySelectorAll("nav ul li ");
  const customHover2 = document.querySelectorAll("div h5 ");
  const customHover3 = document.querySelectorAll("section div div img")
  const customHover4 = document.querySelectorAll("form input")
  const customHover5 = document.querySelectorAll("form textarea")
  const customHover6 = document.querySelectorAll("form button")
  //increase rate function
  function increaseRate(start, end, duration) {
    const change = end - start;
    let time = 0;
    let increment = 0.01;
    const interval = setInterval(function() {
      time += 10;
      increment += 0.0001 * time / duration;
      const value = start + change * Math.pow(increment, 3);
      console.log(value);
      if (time >= duration) clearInterval(interval);
    }, 10);
  }

  //These variables Keep track of previous cursor Data
  let prevTime=0;
  let prevCursorX = 0;
  let prevCursorY = 0;
  let velocityX=0;
  let velocityY=0;
  

  document.addEventListener("mousemove", (e) => {
      let xCoordinate = e.clientX;
      let yCoordinate = e.clientY;

      const timeNow=Date.now();
      const timeDiff=timeNow-prevTime;
      prevTime=timeNow;

      //calculate distance the mouse travelled;
      const deltaX = xCoordinate - prevCursorX;
      const deltaY = yCoordinate - prevCursorY;

      prevCursorX = deltaX;
      prevCursorY = deltaY;

      velocityX += (deltaX / 100 - velocityX) * 0.05;
      velocityY += (deltaY / 100 - velocityY) * 0.05;

      
      // const accelerationX=(speedX-(prevCursorX/timeDiff))/timeDiff;

      // xCoordinate+=velocityX;
      // yCoordinate+=velocityY;
      let delay=200;
      

      setTimeout(() => {

        // cursor.style.transform="translate3d(0,0,0)"
        // cursor.style.transition = 'transform 0.1s ease-out';
        // cursor.style.transform = `translate(${xCoordinate}px, ${yCoordinate}px)`;
        cursor.style.left = xCoordinate + velocityX + "px";
        cursor.style.top = yCoordinate + velocityY + "px";
      }, delay);



      // cursor.style.transform="translate3d(0,0,0)"
      
      // cursor.style.left = xCoordinate + "px";
      // cursor.style.top = yCoordinate + "px";



    }
  )
  document.addEventListener("pointerover", (e) => {
      let xCoordinate = e.clientX;
      let yCoordinate = e.clientY;

      cursor.style.left = xCoordinate + "px";
      cursor.style.top = yCoordinate + "px";


    }
  )


  customHover1.forEach((customHover1 => {
    customHover1.addEventListener("mouseenter", () => {
      cursor.classList.add("hover")
    })
  }))
  customHover1.forEach((customHover1 => {
    customHover1.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover")
    })
  }))

  customHover2.forEach((customHover2 => {
    customHover2.addEventListener("mouseenter", () => {
      cursor.classList.add("hover")
    })
  }))
  customHover2.forEach((customHover2 => {
    customHover2.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover")
    })
  }))
  customHover3.forEach((customHover3 => {
    customHover3.addEventListener("mouseenter", () => {
      cursor.classList.add("hover")
    })
  }))
  customHover3.forEach((customHover3 => {
    customHover3.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover")
    })
  }))
  customHover4.forEach((customHover4 => {
    customHover4.addEventListener("mouseenter", () => {
      cursor.classList.add("text")
    })
  }))
  customHover4.forEach((customHover4 => {
    customHover4.addEventListener("mouseleave", () => {
      cursor.classList.remove("text")
    })
  }))
  customHover5.forEach((customHover5 => {
    customHover5.addEventListener("mouseenter", () => {
      cursor.classList.add("text")
    })
  }))
  customHover5.forEach((customHover5 => {
    customHover5.addEventListener("mouseleave", () => {
      cursor.classList.remove("text")
    })
  }))
  customHover6.forEach((customHover6 => {
    customHover6.addEventListener("mouseenter", () => {
      cursor.classList.add("hover")
    })
  }))
  customHover6.forEach((customHover6 => {
    customHover6.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover")
    })
  }))



  
  


}







export {cursor};
