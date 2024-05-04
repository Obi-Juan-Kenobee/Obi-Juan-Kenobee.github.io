// main variables
let title = document.getElementById("level-title");
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// will generate the next sequence as well as play the next sound and update level
function nextSequence() {
  userClickedPattern = [];
  level++;
  title.innerHTML = "Level " + level;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// check if the user's answer is correct
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    if (isMobileDevice) {
      $("#level-title").text("Game over, Tap the screen to restart");
      startOver();
    } else {
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }
  }
}

// restart the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// main loop
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

// js code for the game to work on mobile devices
// Store the user's device details in a variable:
let details = navigator.userAgent;

// user's device details will be stored in this variable
let regexp = /android|iphone|kindle|ipad/i;

// check if the device is a mobile device
let isMobileDevice = regexp.test(details);

// if the device is a mobile device, change h1 and allow taps to start the game and run the game code for mobile devices

if (isMobileDevice) {
  $("#level-title").text("Tap to Start");
  $("#level-title").css("font-size", "3em");

  $(document).on("touchstart", function () {
    if (!started) {
      nextSequence();
      started = true;
    }
  });
}

