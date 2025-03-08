document.addEventListener("DOMContentLoaded", function() {
    // Set the current date
    const dateElement = document.getElementById("date");
    const currentDate = new Date();
    dateElement.textContent = currentDate.toLocaleDateString();

    // Reveal a secret when the button is clicked
    const revealButton = document.getElementById("revealButton");
    const secretElement = document.getElementById("secret");

    revealButton.addEventListener("click", function() {
        secretElement.textContent = "Ishika, I really love you! You are the love of my life, and I will always cherish you, you don't know how i love you!";
        secretElement.style.opacity = "1"; // Fade-in effect
        revealButton.style.display = "none"; // Hide the button after click
    });
});
