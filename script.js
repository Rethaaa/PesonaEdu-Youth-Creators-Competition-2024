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
      <h3>Quiz Completed!</h3>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}
showQuestion();

// sort waste
const tutorial = document.getElementById("tutorial");
const game = document.getElementById("game");
const trashContainer = document.getElementById("trash-container");
const trashCans = document.querySelectorAll(".trash-can");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const gameOver = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");

const trashTypes = ["organic", "inorganic", "toxic"];
const trashImages = {
  organic: ["🍎", "🍌"],
  inorganic: ["🧴", "🥤"],
  toxic: ["☣️", "💉"]
};

let round = 1;
let timeLeft;
let interval;
let score = 0;

robot.textContent = "Hi, Welcome!";
setTimeout(() => {
  tutorial.classList.remove("hidden");
}, 2000);

document.getElementById("start-button").addEventListener("click", startGame);

function startGame() {
  tutorial.classList.add("hidden");
  game.classList.remove("hidden");
  robot.textContent = "Round start from... Now!";
  startRound();
}

function startRound() {
  trashContainer.innerHTML = "";
  timeLeft = [30, 20, 10][round - 1];
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  scoreDisplay.textContent = `Score: ${score}`;
  generateTrash();

  interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      handleTimesUp();
    }
  }, 1000);
}

function handleTimesUp() {
  if (trashContainer.children.length > 0) {
    displayMessage("TIME'S UP!", () => {
      if (round < 3) {
        round++;
        startRound();
      } else {
        endGame();
      }
    });
  } else {
    handleWellDone();
  }
}

function handleWellDone() {
  clearInterval(interval);

  let timeBonus = 0;
  if (timeLeft >= 10) {
    timeBonus = 10;
  } else if (timeLeft >= 5) {
    timeBonus = 5;
  } else {
    timeBonus = 2;
  }

  score += 5 + timeBonus;
  scoreDisplay.textContent = `Score: ${score}`;
  robot.textContent = `Well done! Bonus +${timeBonus} points!`;

  displayMessage(`WELL DONE! +${timeBonus} Bonus`, () => {
    if (round < 3) {
      round++;
      startRound();
    } else if (round === 3) {
      round++;
      timeLeft = 5;
      robot.textContent = "Bonus Round! 5 seconds!";
      startRound();
    } else {
      endGame();
    }
  });
}


function displayMessage(message, callback) {
  const messageBox = document.createElement("div");
  messageBox.id = "message-box";
  messageBox.textContent = message;
  document.body.appendChild(messageBox);

  setTimeout(() => {
    document.body.removeChild(messageBox);
    callback();
  }, 2000);
}

trashCans.forEach((can) => {
  can.addEventListener("dragover", (e) => e.preventDefault());
  can.addEventListener("drop", (e) => {
    e.preventDefault();
    const trashType = e.dataTransfer.getData("id");
    const draggedTrash = document.querySelector(`.trash.dragging`);

    if (trashType === can.dataset.type && draggedTrash) {
      robot.textContent = "Correct!";
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      draggedTrash.remove();

      if (trashContainer.children.length === 0) {
        handleWellDone();
      }
    } 
    else {
      robot.textContent = "Oops, wrong trash!";
    }
    if (draggedTrash) draggedTrash.classList.remove("dragging");
  });
});


function generateTrash() {
  robot.textContent = "Please move the trash";

  for (let i = 0; i < 10; i++) {
    let type = trashTypes[Math.floor(Math.random() * 3)];
    let trash = document.createElement("div");
    trash.className = "trash";
    trash.textContent = trashImages[type][Math.floor(Math.random() * 2)];
    trash.draggable = true;
    trash.dataset.type = type;

    let top, left;
    let overlapping;
    do {
      top = Math.random() * 200;
      left = Math.random() * 80;
      overlapping = [...trashContainer.children].some((otherTrash) => {
        const rect1 = { top, left, width: 70, height: 70 };
        const rect2 = otherTrash.getBoundingClientRect();
        return (
          rect1.left < rect2.left + rect2.width &&
          rect1.left + rect1.width > rect2.left &&
          rect1.top < rect2.top + rect2.height &&
          rect1.top + rect1.height > rect2.top
        );
      });
    } while (overlapping);

    trash.style.top = `${top}px`;
    trash.style.left = `${left}%`;

    trash.addEventListener("dragstart", dragStart);
    trash.addEventListener("dragend", dragEnd);

    trashContainer.appendChild(trash);
  }
}

function dragStart(e) {
  e.target.classList.add("dragging");
  e.target.style.zIndex = "10";
  e.dataTransfer.setData("id", e.target.dataset.type);
}

function dragEnd(e) {
  e.target.classList.remove("dragging");
  e.target.style.zIndex = "auto";
}


trashCans.forEach((can) => {
  can.addEventListener("dragover", (e) => e.preventDefault());
  can.addEventListener("drop", (e) => {
    e.preventDefault();
    const trashType = e.dataTransfer.getData("id");
    const draggedTrash = document.querySelector(`.trash.dragging`);

    if (trashType === can.dataset.type && draggedTrash) {
      robot.textContent = "Correct!";
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      draggedTrash.remove();
    } else {
      robot.textContent = "Oops, wrong trash!";
    }
    if (draggedTrash) draggedTrash.classList.remove("dragging");
  });
});

function endGame() {
  game.classList.add("hidden");
  gameOver.classList.remove("hidden");
  finalScore.textContent = `Your Score: ${score}`;
}

let highScore = localStorage.getItem("highScore") || 0;
const highScoreDisplay = document.getElementById("high-score");

highScoreDisplay.textContent = `High Score: ${highScore}`;

function endGame() {
  game.classList.add("hidden");
  gameOver.classList.remove("hidden");
  finalScore.textContent = `Your Score: ${score}`;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    robot.textContent = "New High Score! 🎉";
  } else {
    robot.textContent = "Game Over!";
  }

  document.getElementById("high-score-final").textContent = `High Score: ${highScore}`;
}
function restartGame() {
  score = 0;
  round = 1;
  timeLeft = 30;
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;

  gameOver.classList.add("hidden");
  game.classList.remove("hidden");

  startRound();
}
