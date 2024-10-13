// Initial 24-hour countdown in milliseconds
const totalDuration = 24 * 60 * 60 * 1000;
let remainingTimeValue = totalDuration;
let timerInterval = null;

// Function to update the countdown display
function updateCountdown() {
    const hours = Math.floor((remainingTimeValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTimeValue % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTimeValue % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Countdown timer function
function startCountdown() {
    if (remainingTimeValue >= 0) {
        remainingTimeValue -= 1000;
        updateCountdown();

        if (remainingTimeValue <= 0) {
            document.getElementById("countdown").innerHTML = "Hackathon Ended!";
            clearInterval(timerInterval); // Stop the countdown
        }
    }
}

// Button click event handler to start the countdown
function handleStartButtonClick() {
    // Start the countdown only if it's not already running
    if (!timerInterval) {
        timerInterval = setInterval(startCountdown, 1000);
    }
}

// Initialize the countdown display to 24 hours
updateCountdown();

// Event listener for the button to start the countdown
document.getElementById("startButton").addEventListener("click", handleStartButtonClick);


particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 120, // More bubbles
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#ff57b9", "#ffcc00", "#00d1ff", "#7c4dff"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 25, // Increase for bigger bubble effect
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 5, // Minimum bubble size
                "sync": false
            }
        },
        "line_linked": {
            "enable": false // No lines between bubbles
        },
        "move": {
            "enable": true,
            "speed": 1, // Slow floating effect
            "direction": "top", // Move bubbles upward
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false // No hover effect
            },
            "onclick": {
                "enable": false // No click effect
            }
        }
    },
    "retina_detect": true
});
