//This file is used to store informtion about pictures and relay them to the HTML
var Portrait1 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait1.jpg"
};

var Portrait2 = {
    title: "Sliver",
    header: "placeholder",
    text:"placeHolder",
    model:"Yaren Vural",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait2.jpg"
};
var Portrait3 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait3.jpg"
};
var Portrait4 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait4.jpg"
};
var Portrait5 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait5.jpg"
};
var Portrait6 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait6.jpg"
};
var Portrait7 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait7.jpg"
};
var Portrait8 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait8.jpg"
};
var Portrait9 = {
    title: "To Hold on",
    header: "placeholder",
    text:"placeHolder",
    model:"Jordan Blums",
    alt:"girl in a black dress with her hand on her forehead",
    imageUrl: "Files/img/Portraits/Portrait9.jpg"
};
const imgArray=[Portrait1,Portrait2,Portrait3,Portrait4,Portrait5,Portrait6,Portrait7,Portrait8,Portrait9]


function imageInsertion(portrait,index) {
    const target = document.getElementsByClassName("portfolio")[0];
    const myImage = `
    <div class="img-${index} galleryImg">
        <h1 class="imageTitle">${portrait.title}</h1>
        <img id="${index}" class="specificImg" src="${portrait.imageUrl}" loading="eager" alt="${portrait.alt}">
        <h1 class="image_text_hover">${portrait.title}<br>Model: ${portrait.model}</h1>
    </div>
`; 
    target.innerHTML+=myImage;
     
  }


for (let i = 0; i < 9; i++) {
    imageInsertion(imgArray[i],i+1);
}
  