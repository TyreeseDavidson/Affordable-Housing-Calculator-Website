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
    Burnout: {
        affirmations:[
            "I don’t compare myself to others. The only person I compare myself to is the person I was yesterday. And as long as the person I am today is even the tiniest bit better than the person I was yesterday—I’m meeting my own definition of success.",
            "I can do anything, but I can’t do everything",
            "Rest is work, too. It’s a job that needs to be done.",
            "Delegation isn’t failure. It’s okay to ask for help.",
            "It’s okay to pause and take a break… but don’t give up.",
            "I work to live, not live to work.",
            "I release my need to control the future, and I choose to focus on allowing the best to happen.",
            "It’s okay to work hard, but it’s not okay to work so hard that my work is no longer effective.",
            "There is no harm in asking for some time to learn new things before executing them.",
            "I release any guilt or shame associated with taking time for myself.",
            "I am not defined by my productivity; my worth is inherent.",
            "I honor my needs and prioritize self-care.",
            "I am allowed to take breaks and ask for support when needed.",
            "I am deserving of rest and rejuvenation.",
            "I am surrounded by love and support, and it's okay to lean on others."
            
        ],
        activties:[ 
            "Take a nature retreat at the Hawk Mountain Sanctuary",
            "Enjoy a quiet day at Trexler Memorial Park",
            "Try the Lehigh Valley Wine Trail Tour",
            "Visit the Lehigh Valley Heritage Museum",
            "Take a scenic drive along the Delaware River",
            "Participate in the Lehigh Valley Yoga Fest",
            "Try a cooking class at the Culinary Arts Institute",
            "Try Botanical Exploration at Rodale Institute",
            "Walk, run, or bike across the Lehigh Valley Greenways",
            "Go to Dorney Park for a day"
            ]
          },
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
  
    if (emotions[selectedEmotion] && emotions[selectedEmotion].affirmations) {
      const randomAffirmationIndex = Math.floor(Math.random() * emotions[selectedEmotion].affirmations.length);
      const randomAffirmation = emotions[selectedEmotion].affirmations[randomAffirmationIndex];
      affirmationContainer.textContent = randomAffirmation;
    } else {
      affirmationContainer.textContent = "Please select an emotion.";
    }
  }
  
  function generateActivity() {
    const selectedEmotion = document.getElementById('emotionSelect').value;
    const activityContainer = document.getElementById('activity');
  
    if (emotions[selectedEmotion] && emotions[selectedEmotion].activties) {
      const randomActivityIndex = Math.floor(Math.random() * emotions[selectedEmotion].activties.length);
      const randomActivity = emotions[selectedEmotion].activties[randomActivityIndex];
      activityContainer.textContent = randomActivity;
    } else {
      activityContainer.textContent = "Please select an emotion.";
    }
    
  
} 

