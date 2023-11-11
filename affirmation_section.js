const emotions = {
    happy: [
      "I am filled with joy and gratitude.",
      "Happiness is my natural state.",
      "I radiate positivity and attract joy."
    ],
    calm: [
      "I am at peace with myself and the world.",
      "I breathe in calmness and breathe out stress.",
      "I am centered and grounded."
    ],
    motivated: [
      "I am motivated and ready to take on challenges.",
      "I am focused on my goals and determined to achieve them.",
      "I have the power to create change in my life."
    ],
    // emotion[],
    // emotion[],
    // emotion[],
    // emotion[],
    // emotion[],
    // emotion[],
    // emotion[],
    // emotion[],
  };

function generateAffirmation() {
    const selectedEmotion = document.getElementById('emotionSelect').value;
    const affirmationContainer = document.getElementById('affirmation');
  
    if (emotions[selectedEmotion]) {
      const randomIndex = Math.floor(Math.random() * emotions[selectedEmotion].length);
      const randomAffirmation = emotions[selectedEmotion][randomIndex];
      affirmationContainer.textContent = randomAffirmation;
    } else {
      affirmationContainer.textContent = "Please select an emotion.";
    }
  
}