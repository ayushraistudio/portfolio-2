document.addEventListener("DOMContentLoaded", function() {
    // Set the current date
    const dateElement = document.getElementById("date");
    const currentDate = new Date();
    dateElement.textContent = currentDate.toLocaleDateString();

    // Reveal a secret when the button is clicked
    const revealButton = document.getElementById("revealButton");
    const secretElement = document.getElementById("secret");
    
    revealButton.addEventListener("click", function() {
        secretElement.textContent = "You are the love of my life, and I will always cherish you!";
    });
});
