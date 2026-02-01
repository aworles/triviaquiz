// ------------------------------
// QUESTIONS
// ------------------------------

let quizData = [
  {
    question: "What is the worst error detection method?",
    options: ["Echo check", "Parity Bit", "Checksum", "ARQ"],
    correct: "Echo check",
  },
  {
    question: "What is the *best* Paper 1 unit in the CS syllabus?",
    options: ["Data representation", "Boolean Logic", "Automated Systens & Emerging Technologies", "None. Theory is boring."],
    correct: "Data representation",
  },
  {
    question: "Convert the denary number 04022026 to binary (22 digit):",
    options: ["1111001011011110101110", "1111010101111100001010", "0111101010110101101011", "..Overflow?"],
    correct: "1111010101111100001010",
  },
  {
    question: "Guess the answer.",
    options: ["A", "B", "C", "D"],
    correct: "B",
  },
  // ADD UP TO 75 QUESTIONS HERE
];

// ------------------------------
// ELEMENTS
// ------------------------------

const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".quiz-container .question");
const optionsEl = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const quizResult = document.querySelector(".quiz-result");
const startBtnContainer = document.querySelector(".start-btn-container");
const startBtn = document.querySelector(".start-btn-container .start-btn");
const timerDisplay = document.querySelector(".quiz-container .timer");

// ------------------------------
// STATE
// ------------------------------

let questionIndex = 0;
let score = 0;
let timerInterval;

// ------------------------------
// HELPERS
// ------------------------------

const shuffleArray = (arr) => arr.slice().sort(() => Math.random() - 0.5);

quizData = shuffleArray(quizData); // randomize question order

function startTimer() {
  clearInterval(timerInterval);

  let secondsLeft = 10;
  timerDisplay.classList.remove("danger");
  timerDisplay.textContent = `Time Left: 10 seconds`;

  timerInterval = setInterval(() => {
    secondsLeft--;
    timerDisplay.textContent = `Time Left: ${String(secondsLeft).padStart(2, "0")} seconds`;

    if (secondsLeft < 3) timerDisplay.classList.add("danger");

    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      displayNextQuestion();
    }
  }, 1000);
}

function checkAnswer(e) {
  const userAnswer = e.target.textContent;
  const correct = quizData[questionIndex].correct;

  if (userAnswer === correct) {
    score++;
    e.target.classList.add("correct");
  } else {
    e.target.classList.add("incorrect");
  }

  // disable all options
  document.querySelectorAll(".option").forEach((btn) => {
    btn.classList.add("disabled");
  });
}

function createQuestion() {
  startTimer();

  const q = quizData[questionIndex];

  questionEl.innerHTML = `<span class="question-number">Question ${
    questionIndex + 1
  }</span> ${q.question}`;

  optionsEl.innerHTML = "";

  shuffleArray(q.options).forEach((opt) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = opt;
    btn.addEventListener("click", checkAnswer);
    optionsEl.appendChild(btn);
  });
}

function displayResults() {
  quizContainer.style.display = "none";
  quizResult.style.display = "flex";

  const accuracy = ((score / quizData.length) * 100).toFixed(1);

  quizResult.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>You answered <strong>${score}</strong> out of <strong>${quizData.length}</strong> correctly.</p>
    <p>Accuracy: <strong>${accuracy}%</strong></p>
    <button class="retake-btn">Retake Quiz</button>
  `;

  document.querySelector(".retake-btn").addEventListener("click", () => {
    questionIndex = 0;
    score = 0;
    quizData = shuffleArray(quizData);
    quizResult.style.display = "none";
    quizContainer.style.display = "block";
    createQuestion();
  });
}

function displayNextQuestion() {
  clearInterval(timerInterval);

  if (questionIndex >= quizData.length - 1) {
    displayResults();
    return;
  }

  questionIndex++;
  createQuestion();
}

// ------------------------------
// START
// ------------------------------

startBtn.addEventListener("click", () => {
  startBtnContainer.style.display = "none";
  quizContainer.style.display = "block";
  createQuestion();
});

nextBtn.addEventListener("click", displayNextQuestion);
