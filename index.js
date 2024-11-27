// Array of subjects
const subjects = [
    "You",
    "Your dreams",
    "Your efforts",
    "Your hard work",
    "Your potential"
];

// Array of actions
const actions = [
    "will lead to",
    "are building towards",
    "are paving the way for",
    "are the foundation of",
    "will always inspire"
];

// Array of outcomes
const outcomes = [
    "great success.",
    "a brighter future.",
    "new opportunities.",
    "unimaginable rewards.",
    "limitless possibilities."
];

// Function to generate a random number
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

// Function to create a random message
const generateRandomMessage = () => {
    const subject = subjects[getRandomIndex(subjects)];
    const action = actions[getRandomIndex(actions)];
    const outcome = outcomes[getRandomIndex(outcomes)];
    
    return `${subject} ${action} ${outcome}`;
};

// Output a random message
console.log(generateRandomMessage());