var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonClicked = this.innerHTML;
    makeSounds(buttonClicked);
    buttonPressed(buttonClicked);
  });
}

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;
  makeSounds(keyPressed);
  buttonPressed(keyPressed);
});

function makeSounds(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      var tomOne = new Audio("./sounds/tom-1.mp3");
      tomOne.play();
      break;

    case "a":
      var tomTwo = new Audio("./sounds/tom-2.mp3");
      tomTwo.play();
      break;

    case "s":
      var tomThree = new Audio("./sounds/tom-3.mp3");
      tomThree.play();
      break;

    case "d":
      var tomFour = new Audio("./sounds/tom-4.mp3");
      tomFour.play();
      break;

    case "j":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonPressed(currentKey) {
  var activeButton = document.querySelector(`.${currentKey}`);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  });
}
