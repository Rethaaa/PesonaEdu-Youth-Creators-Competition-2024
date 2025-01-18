// switch
const swtch = document.getElementById("swtch");
let darkmode = localStorage.getItem("darkmode");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    updateParallaxImages("dark");
    updateLogo("dark");
    localStorage.setItem("darkmode", "active");
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    updateParallaxImages("light");
    updateLogo("light");
    localStorage.setItem("darkmode", "inactive");
}

const updateParallaxImages = (mode) => {
    const parallaxImages = document.querySelectorAll(".parallax > img");
    parallaxImages.forEach(img => {
        const newSrc = mode === "dark" ? img.dataset.dark : img.dataset.light;
        img.setAttribute("src", newSrc);
    });
}
const updateLogo = (mode) => {
    const logos = document.querySelectorAll(".logo > img");
    logos.forEach(img => {
        const newSrc = mode === "dark" ? img.dataset.dark : img.dataset.light;
        img.setAttribute("src", newSrc);
    });
}

if (darkmode === "active") {
    enableDarkmode();
}

swtch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "active") {
        enableDarkmode();
    } 
    else {
        disableDarkmode();
    }
});

// news
function showNews(newsClass) {
    document.querySelectorAll('.news__content').forEach(content => {
        content.style.display = 'none';
    });
    const newsContent = document.querySelector(`.${newsClass}`);
    if (newsContent) {
        newsContent.style.display = 'block';
    }
}
function hideNews(newsClass) {
    const newsContent = document.querySelector(`.${newsClass}`);
    if (newsContent) {
        newsContent.style.display = 'none';
    }
}

// games
function showGame(gameClass) {
    document.querySelectorAll('.game__content').forEach(content => {
        content.style.display = 'none';
    });
  
    const gameContent = document.querySelector(`.${gameClass}`);
    if (gameContent) {
        gameContent.style.display = 'block';
    }
}
function hideGame(gameClass) {
    const gameContent = document.querySelector(`.${gameClass}`);
    if (gameContent) {
        gameContent.style.display = 'none';
    }
}

// trivia
const quizData = [
    {
      question: "Why is it important to sort waste into recyclables, compostables, and non-recyclables categories?",
      options: ["It looks nicer", "It helps reduce waste going to landfills", "It saves money on garbage bags", "It attracts wildlife"],
      answer: "It helps reduce waste going to landfills"
    },
    {
        question: "Which material should never go in the recycling bin?",
        options: ["Clean paper", "Plastic bottles", "Dirty pizza boxes", "Aluminium cans"],
        answer: "Dirty pizza boxes"
    },
    {
        question: "What is the most eco-friendly way to get rid of kitchen scraps like vegetable peels?",
        options: ["Throw them in the trash", "Feed them to pets", "Compost them", "Burn them"],
        answer: "Compost them"
    },
    {
        question: "Which of these actions saves the most water?",
        options: ["Leaving the tap running while brushing your teeth", "Taking shorter showers", "Washing your car every day", "Using a sprinkler to water your lawn daily"],
        answer: "Taking shorter showers"
    },
    {
        question: "Which label should you look for when buying eco-friendly products?",
        options: ["Recyclable", "Made in China", "Eco-friendly certified", "High price"],
        answer: "Eco-friendly certified"
    },
    {
        question: "How does using energy-efficient LED bulbs save the environment?",
        options: ["They are smaller than regular bulbs", "They use less energy and last longer", "They are expensive", "They make the room brighter"],
        answer: "They use less energy and last longer"
    },
    {
        question: "What should you do with old batteries that no longer work?",
        options: ["Throw them in the regular trash", "Burn them", "Recycle them at a designated center", "Flush them down the toilet"],
        answer: "Recycle them at a designated center"
    },
    {
        question: "True or False: Buying products with minimal packaging helps reduce waste.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "How can you save electricity when you leave a room?",
        options: ["Turn off the lights", "Leave the TV on", "Keep all fans running", "Close the windows"],
        answer: "Turn off the lights"
    },
    {
        question: "Which of these is the most water-efficient way to do laundry?",
        options: ["Running the washing machine with a full load","Washing clothes by hand", "Washing one item at a time", "Using only hot water"],
        answer: "Running the washing machine with a full load"
    },
    {
        question: "What does biodegradable mean?",
        options: ["Can be easily recycled", "Breaks down naturally over time", "Is indestructible", "Has a shiny surface"],
        answer: "Breaks down naturally over time"
    },
    {
        question: "Which of these habits can help you save energy at home?",
        options: ["Keeping lights on at night", "Unplugging devices not in use", "Keeping the thermostat high all year", "Leaving chargers plugged in"],
        answer: "Unplugging devices not in use"
    },
    {
        question: "Which product is generally more eco-friendly?",
        options: ["A product made from recycled materials", "A single-use plastic bottle", "A product with lots of packaging", "A non-recyclable item"],
        answer: "A product made from recycled materials"
    },
    {
        question: "Why is it better to buy local products?",
        options: ["They are always cheaper", "They travel shorter distances, reducing carbon emissions", "They come in fancy packaging", "They are never eco-friendly"],
        answer: "They travel shorter distances, reducing carbon emissions"
    },
    {
        question: "True or False: Using a reusable water bottle is a good way to cut down on single-use plastics.",
        options: ["True", "False"],
        answer: "True"
    },
  ];
  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score_trivia = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
    if (selectedButton.innerText === answer) {
        score_trivia++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score: ${score_trivia}/${quizData.length}</p>`;
}

showQuestion();

// sort waste game
const startScreen = document.getElementById("start-screen");
const game = document.getElementById("game");
const gameOver = document.getElementById("game-over");
const trashContainer = document.getElementById("trash-container");
const trashCansContainer = document.getElementById("trash-cans");
const startButton = document.getElementById("start-button");
const robot = document.getElementById("robot");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");
const timerDisplay = document.getElementById("timer");
const finalScoreDisplay = document.getElementById("final-score");
const highScoreFinalDisplay = document.getElementById("high-score-final");

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let timeLeft = 30;
let round = 1;
let timer;
let trashItems = 10;
let trashData = [];

const trashTypes = [
    { type: "organic", image: "🍌" },
    { type: "inorganic", image: "🧴" },
    { type: "toxic", image: "🔋" }
];

highScoreDisplay.textContent = `High Score: ${highScore}`;

startButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    game.classList.remove("hidden");
    startRound();
});
function startRound() {
    score = 0;
    trashItems = 10;
    trashData = [];
    updateScore();
    updateTimer();
    generateTrash();
    robot.textContent = `🤖 Round ${round} starts now!`;
    timer = setInterval(updateTimer, 1000);
}
function generateTrash() {
    trashContainer.innerHTML = "";

    for (let i = 0; i < trashItems; i++) {
        const randomTrash = trashTypes[Math.floor(Math.random() * trashTypes.length)];
        const trashElement = document.createElement("div");
        trashElement.classList.add("trash");
        trashElement.textContent = randomTrash.image;
        trashElement.dataset.type = randomTrash.type;

        trashElement.draggable = true;
        trashElement.addEventListener("dragstart", handleDragStart);

        const leftPosition = Math.random() * (trashContainer.offsetWidth - 150);
        trashElement.style.position = "absolute";
        trashElement.style.left = `${leftPosition}px`;
        trashElement.style.top = `${Math.random() * 150 + 10}px`;

        trashContainer.appendChild(trashElement);
        trashData.push(randomTrash);
    }
}
function handleDragStart(event) {
    event.dataTransfer.setData("type", event.target.dataset.type);
}
trashCansContainer.querySelectorAll(".trash-can").forEach((trashCan) => {
    trashCan.addEventListener("dragover", (event) => event.preventDefault());
    trashCan.addEventListener("drop", handleDrop);
});
function handleDrop(event) {
    const droppedType = event.dataTransfer.getData("type");
    const targetType = event.target.dataset.type;

    if (droppedType === targetType) {
        score++;
        updateScore();
        robot.textContent = "🤖 Correct!";
        removeTrash(droppedType);
    } else {
        robot.textContent = "🤖 Oops, wrong trash!";
    }
}
function removeTrash(type) {
    const trashElement = Array.from(trashContainer.children).find(
        (trash) => trash.dataset.type === type
    );

    if (trashElement) {
        trashElement.remove();
        trashItems--;

        if (trashItems === 0) {
        clearInterval(timer);
        score += calculateBonusPoints(timeLeft);
        showFinishedMessage();
        setTimeout(nextRound, 2000);
        }
    }
}
function showFinishedMessage() {
    robot.textContent = `🤖 Finished! Bonus Points: ${calculateBonusPoints(timeLeft)}`;
}
function updateTimer() {
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        score += calculateBonusPoints(timeLeft);
        showFinishedMessage();
        setTimeout(nextRound, 2000);
    }
    timeLeft--;
}
function calculateBonusPoints(timeLeft) {
    if (timeLeft >= 10) {
        return 10;
    } else if (timeLeft >= 5) {
        return 5;
    } else {
        return 2;
    }
}
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}
function nextRound() {
    round++;
    if (round <= 3) {
        timeLeft = round === 1 ? 30 : round === 2 ? 20 : 10;
        trashItems = 10;
        generateTrash();
        robot.textContent = `🤖 Round ${round} starts now!`;
        timer = setInterval(updateTimer, 1000);
    } else {
        endGame();
    }
}
function endGame() {
    game.classList.add("hidden");
    gameOver.classList.remove("hidden");

    finalScoreDisplay.textContent = `Your Total Score: ${score}`;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }
    highScoreFinalDisplay.textContent = `High Score: ${highScore}`;
}
function restartGame() {
    gameOver.classList.add("hidden");
    startScreen.classList.remove("hidden");
}
