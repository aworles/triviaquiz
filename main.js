// ------------------------------
// QUESTIONS (ADD UP TO 75)
// ------------------------------

let quizData = [
  {
    question: "What is the worst error detection method?",
    options: ["Echo check", "Parity Bit", "Checksum", "ARQ"],
    correct: "Echo check",
    points: 1,
  },
  {
    question: "What is the *best* Paper 1 unit in the CS syllabus?",
    options: [
      "Data representation",
      "Boolean Logic",
      "Automated Systens & Emerging Technologies",
      "None. Theory is boring.",
    ],
    correct: "Data representation",
    points: 1,
  },
  {
    question: "Convert the denary number 04022026 to binary (22 digit):",
    options: [
      "1111001011011110101110",
      "1111010101111100001010",
      "0111101010110101101011",
      "..Overflow?",
    ],
    correct: "1111010101111100001010",
    points: 3,
  },
  {
    question: "Guess the answer.",
    options: ["A", "B", "C", "D"],
    correct: "B",
    points: 1,
  },
  {
    question: "What is the *worst* CS unit in the syllabus? (Hint: It's none.. obviously.)",
    options: [
      "Hardware",
      "Software",
      "The internet and its uses",
      "Programming (on paper)",
    ],
    correct: null, // FIXED SYNTAX
    points: 1,
    troll: true, // ONLY CORRECT IF UNANSWERED
  },

  // TODO: add troll message box in HTML later
  // <div class="troll-message"></div>

  {
    question: "What is the coolest input device?",
    options: ["Mouse", "Keyboard", "Touchscreen", "Microphone"],
    correct: "Keyboard",
    points: 1,
  },
  {
    question: "What is the exact date of the FIRST ever CS assignment given on MS Teams?",
    options: [
      "Friday, November 15th 2024",
      "Wednesday, November 20th 2024",
      "Tuesday, October 29th 2024",
      "Thursday, November 14th 2024",
    ],
    correct: "Friday, November 15th 2024",
    points: 1,
  },
  {
    question: "What is one of the first homeworks given about Python in MS Teams that not many knew how to complete?",
    options: ["Bingo Project", "Fibonacci Sequence", "Validation Checks", "1D Arrays"],
    correct: "Fibonacci Sequence",
    points: 1,
  },
  {
    question: "What was the first 15 marker (Paper 2) exercise that we looked at about?",
    options: ["Temperatures", "Mountains", "Matches", "Competitors"],
    correct: "Temperatures",
    points: 1,
  },
  {
    question: "What is the exact date of the Y10 End of Year Exam?",
    options: [
      "Tuesday 27 May at 13:30",
      "Wednesday 28 May at 12:45",
      "Friday 30 May at 13:30",
      "Monday 26 May at 11:30",
    ],
    correct: "Tuesday 27 May at 13:30",
    points: 1,
  },

  // ADD THE REST OF YOUR 75 QUESTIONS HERE
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

// ------------------------------
// STATE
// ------------------------------

let questionIndex = 0;
let score = 0;

// total possible points
let totalPossiblePoints = quizData.reduce((sum, q) => sum + q.points, 0);

// ------------------------------
// HELPERS
// ------------------------------

const shuffleArray = (arr) => arr.slice().sort(() => Math.random() - 0.5);

// randomize question order
quizData = shuffleArray(quizData);

// ------------------------------
// CHECK ANSWER
// ------------------------------

function checkAnswer(e) {
  const q = quizData[questionIndex];

  // ⭐ TROLL QUESTION: ANY answer = wrong
  if (q.troll === true) {
    e.target.classList.add("incorrect");
  } else {
    const userAnswer = e.target.textContent;

    if (userAnswer === q.correct) {
      score += q.points;
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("incorrect");
    }
  }

  // disable all options
  document.querySelectorAll(".option").forEach((btn) => {
    btn.classList.add("disabled");
  });
}

// ------------------------------
// CREATE QUESTION
// ------------------------------

function createQuestion() {
  const q = quizData[questionIndex];

  questionEl.innerHTML = `
    <span class="question-number">Question ${questionIndex + 1}</span>
    <span class="question-points">(${q.points} pts)</span>
    ${q.question}
  `;

  optionsEl.innerHTML = "";

  shuffleArray(q.options).forEach((opt) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = opt;
    btn.addEventListener("click", checkAnswer);
    optionsEl.appendChild(btn);
  });
}

// ------------------------------
// RESULTS
// ------------------------------

function displayResults() {
  quizContainer.style.display = "none";
  quizResult.style.display = "flex";

  const accuracy = ((score / totalPossiblePoints) * 100).toFixed(1);

  quizResult.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>You earned <strong>${score}</strong> out of <strong>${totalPossiblePoints}</strong> points.</p>
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

// ------------------------------
// NEXT QUESTION
// ------------------------------

function displayNextQuestion() {
  const q = quizData[questionIndex];

  // TROLL QUESTION: if unanswered → give points
  const anyAnswered = [...document.querySelectorAll(".option")].some(
    (btn) => btn.classList.contains("correct") || btn.classList.contains("incorrect")
  );

  if (q.troll === true && !anyAnswered) {
    score += q.points;
  }

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
