const directions = {
    'horizontal': horizontal,
    'vertical': vertical,
    'diagonal-horizontal': diagonalX,
    'diagonal-vertical': diagonalY,
};

// Example implementations of these functions (assuming they are predefined)
function horizontal() {
    console.log("Handling horizontal direction");
}

function vertical() {
    console.log("Handling vertical direction");
}

function diagonalX() {
    console.log("Handling diagonal-horizontal direction");
}

function diagonalY() {
    console.log("Handling diagonal-vertical direction");
}

// Function to execute the appropriate handler based on input direction
function handleDirection(direction) {
    // Check if the direction exists in the `directions` object
    if (directions.hasOwnProperty(direction)) {
        // Call the corresponding function
        directions[direction]();
    } else {
        console.log("Unknown direction:", direction);
    }
}

// Example usage:
handleDirection('horizontal');          // Outputs: Handling horizontal direction
handleDirection('vertical');            // Outputs: Handling vertical direction
handleDirection('diagonal-horizontal'); // Outputs: Handling diagonal-horizontal direction
handleDirection('diagonal-vertical');   // Outputs: Handling diagonal-vertical direction
handleDirection('unknown');             // Outputs: Unknown direction: unknown
