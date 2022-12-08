function cursor() {
  const cursor = document.querySelector(".cursor");
  const customHover1 = document.querySelectorAll("nav ul li ");
  const customHover2 = document.querySelectorAll("div h5 ");
  const customHover3 = document.querySelectorAll("section div div img")
  const customHover4 = document.querySelectorAll("form input")
  const customHover5 = document.querySelectorAll("form textarea")
  const customHover6 = document.querySelectorAll("form button")



  document.addEventListener("mousemove", (e) => {
      let xCoordinate = e.clientX;
      let yCoordinate = e.clientY;

      cursor.style.left = xCoordinate + "px";
      cursor.style.top = yCoordinate + "px";


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
