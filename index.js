//This part is made by ChatGPT cuz i suck at js
let chickens = 2847391;

const counter = document.getElementById("counter");

function updateCounter() {
    // Random change between -3 and +5 chickens
    let change = Math.floor(Math.random() * 9) - 3;
    chickens += change;

    counter.textContent =
        chickens.toLocaleString() ;
}

// Update every second
setInterval(updateCounter, 1000);
