const box = document.querySelector("#box");
const sides = document.querySelectorAll(".side");
let currentAnimation = null;
let currentBorderRadius = 10;

// Function to start the animation
function startAnimation(animationClass) {
  // Remove the previous animation class if there was one
  if (currentAnimation) {
    box.style.animation = "";
  }

  // Set the new animation class
  box.style.animation = ` ${animationClass} 8s linear infinite`;

  // Store the current animation class
  currentAnimation = animationClass;

  // Start the animation
  box.style.animationPlayState = "running";

  console.log("clicked start");
}

function controlDirection(direction) {
  box.style.animationDirection = direction;
}

// Function to stop the animation
function stopAnimation() {
  box.style.animationPlayState = "paused";
  console.log("clicked stop");
}

function updateBorderRadius() {
  sides.forEach(function (side) {
    side.style.borderRadius = currentBorderRadius + "px";
  });
}

function increaseBorderRadius() {
  if (currentBorderRadius < 110) {
    currentBorderRadius += 10;
    updateBorderRadius();
  }
}

function decreaseBorderRadius() {
  if (currentBorderRadius > 0) {
    currentBorderRadius -= 10;
    updateBorderRadius();
  }
}
