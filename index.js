let buttons = document.querySelectorAll(".drum").length;
for (let i = 0; i < buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    console.log(innerHTML)
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      let t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;
    case "a":
      let t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;
    case "s":
      let t3 = new Audio('sounds/tom-3.mp3');
      t3.play();
      break;
    case "d":
      let t4 = new Audio('sounds/tom-4.mp3');
      t4.play();
      break;
    case "j":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default: 
      /*let er= new Audio('sounds/perder.mp3')  
      er.play();*/
      console.log(key);
  }
}
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
