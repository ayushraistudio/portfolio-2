document.addEventListener("DOMContentLoaded", function() {
    // Reveal a secret when the button is clicked
    const revealButton = document.getElementById("revealButton");
    const secretElement = document.getElementById("secret");

    revealButton.addEventListener("click", function() {
        secretElement.innerHTML = "Ishika, I really love you! You don't know how much I love you! ❤️<br> Just like a cherry on top of a cake, you make my life complete! 🍒";
        secretElement.style.opacity = "1"; // Message visible hoga
        revealButton.style.display = "none"; // Button hide hoga
    });
});
