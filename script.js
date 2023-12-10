const box = document.getElementById("box");

// Set initial position of element
let posX = 0;
let posY = 0;
const moveAmount = 10; // Adjust this value to control the movement speed
let currentSize = 50; // Initial size of the element
const sizeIncrement = 10; // Amount to increase/decrease size

// Function to update the element's position and size
function updateElement() {
    box.style.transform = `translate(${posX}px, ${posY}px)`;
     //! Add below after showing initial example
    // movable.style.width = `${currentSize}px`;
    // movable.style.height = `${currentSize}px`;
}

// Add event listeners for directional buttons and keypresses
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowUp":
            posY -= moveAmount;
            break;
        case "ArrowDown":
            posY += moveAmount;
            break;
        case "ArrowLeft":
            posX -= moveAmount;
            break;
        case "ArrowRight":
            posX += moveAmount;
            break;
            //! Add below after showing initial example
        // case "Enter":
        //     // Increase the size of the element when Enter is pressed
        //     currentSize += sizeIncrement;
        //     break;
        // case "Backspace":
        //     // Decrease the size of the element when Backspace is pressed
        //     currentSize -= sizeIncrement;
        //     break;
    }
    updateElement();
});