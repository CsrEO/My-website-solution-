const myBox = document.getElementById("my-box");

function setColor(color) {
   myBox.style.backgroundColor = color;
    
}

function onClick() {
    console.log("I was clicked");
    setColor("black");
}

myBox.addEventListener("click" , onClick);