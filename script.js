// 1. Automatic Slider (Home Page)
let images = ["shoe1_collection.jpg", "shoe2_collection.jpg", "shoe3_collection.jpg", "shoe4_collection.jpg", "shoe5_collection.jpg"];
let i = 0;

function changeImage() {
    let slide = document.getElementById("slide");
    if (slide) {
        i = (i + 1) % images.length;
        slide.src = images[i];
    }
}
setInterval(changeImage, 2500);

// 2. Focus Mode & WhatsApp Logic
const myNumber = "254712345678"; // <--- PUT NASE'S REAL NUMBER HERE

function showImage(imgElement) {
    const focusOverlay = document.getElementById('imageFocus');
    const focusedImg = document.getElementById('focusedImg');
    const focusName = document.getElementById('focusName');
    const focusWA = document.getElementById('focusWA');

    const shoeName = imgElement.parentElement.querySelector('h3').innerText;
    
    focusedImg.src = imgElement.src;
    focusName.innerText = shoeName;

    // Link for the specific shoe
    const message = "Hello Nase, I am interested in the " + shoeName + " collection.";
    focusWA.href = "https://wa.me/" + myNumber + "?text=" + encodeURIComponent(message);

    focusOverlay.style.display = "flex";
}

function closeImage() {
    document.getElementById('imageFocus').style.display = "none";
}
// --- Circle Interaction Logic ---
const shoeCards = document.querySelectorAll('.shoe');
const allCircles = document.querySelectorAll('.stat-circle');

shoeCards.forEach(card => {
    // When mouse enters the shoe card
    card.addEventListener('mouseenter', () => {
        allCircles.forEach(circle => {
            circle.classList.add('pulse-glow');
        });
    });

    // When mouse leaves the shoe card
    card.addEventListener('mouseleave', () => {
        allCircles.forEach(circle => {
            circle.classList.remove('pulse-glow');
        });
    });
});
