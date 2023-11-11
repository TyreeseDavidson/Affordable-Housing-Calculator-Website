const affirmations = [
    "I am confident and capable.",
    "I radiate love and positivity.",
    "I am in control of my thoughts and emotions.",
    "I attract success and abundance into my life.",
    "I am worthy of happiness and success.",
    "I am surrounded by positivity and love.",
    "I am a magnet for positive energy.",
    "I believe in my abilities and express my true self with ease.",
];

function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationElement = document.getElementById('affirmation');
    affirmationElement.textContent = affirmations[randomIndex];
}