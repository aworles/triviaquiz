// ------------------------------
// QUESTIONS
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
      "Automated Systems & Emerging Technologies",
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
    correct: null,
    points: 1,
    troll: true,
  },
];

// ------------------------------
// ELEMENTS
// ------------------------------

const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".question");
const pointsBadge = document.querySelector(".question-points");
const optionsEl = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const quizResult = document.querySelector(".quiz-result");
const startBtnContainer = document.querySelector(".start-btn-container");
const startBtn = document.querySelector(".start-btn");

// ------------------------------
// STATE
// ------------------------------

let questionIndex = 0;
let score = 0;
let goalCode = "---";

let userAnswers = Array(quizData.length).fill(null);

let totalPossiblePoints = quizData.reduce((sum, q) => sum + q.points, 0);

quizData = quizData.sort(() => Math.random() - 0.5);

// ------------------------------
// CHECK ANSWER
// ------------------------------

function checkAnswer(e) {
  const q = quizData[questionIndex];
  const userAnswer = e.target.textContent;

  // remove previous score if changing answer
  if (userAnswers[questionIndex] !== null) {
    const prev = userAnswers[questionIndex];
    if (prev === q.correct) {
      score -= q.points;
    }
  }

  userAnswers[questionIndex] = userAnswer;

  if (q.troll === true) {
    e.target.classList.add("incorrect");
  } else {
    if (userAnswer === q.correct) {
      score += q.points;
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("incorrect");
    }
  }

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
    <span class="question-number">Question ${questionIndex + 1}</span><br>
    ${q.question}
  `;

  pointsBadge.textContent = `${q.points} pts`;

  optionsEl.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = opt;
    btn.addEventListener("click", checkAnswer);
    optionsEl.appendChild(btn);
  });

  // restore previous answer
  const saved = userAnswers[questionIndex];
  if (saved !== null) {
    document.querySelectorAll(".option").forEach((btn) => {
      if (btn.textContent === saved) {
        btn.classList.add(saved === q.correct && !q.troll ? "correct" : "incorrect");
      }
      btn.classList.add("disabled");
    });
  }

  // last question → change button
  if (questionIndex === quizData.length - 1) {
    nextBtn.textContent = "End Quiz";
    nextBtn.classList.add("end-btn");
  } else {
    nextBtn.textContent = "Next";
    nextBtn.classList.remove("end-btn");
  }
}

// ------------------------------
// RESULTS + GOAL CHECK
// ------------------------------

function displayResults() {
  quizContainer.style.display = "none";
  quizResult.style.display = "flex";

  const accuracy = ((score / totalPossiblePoints) * 100).toFixed(1);
  const goalAchieved = accuracy >= 80;

  if (goalAchieved && goalCode === "---") {
    goalCode = "S20"; // your code
  }

  quizResult.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>You earned <strong>${score}</strong> out of <strong>${totalPossiblePoints}</strong> points.</p>
    <p>Accuracy: <strong>${accuracy}%</strong></p>

    <p style="margin-top:10px; font-size:18px; opacity:0.9;">
      ${goalAchieved ? "🎉 Goal Achieved: 80% Accuracy!" : "Goal not reached — try again!"}
    </p>

    <p style="margin-top:12px; font-size:22px; font-weight:600;">
      Code: ${goalCode}
    </p>

    <button class="retake-btn">Retake Quiz</button>
  `;

  document.querySelector(".retake-btn").addEventListener("click", () => {
    questionIndex = 0;
    score = 0;
    goalCode = "---";
    userAnswers = Array(quizData.length).fill(null);
    quizData = quizData.sort(() => Math.random() - 0.5);

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

  if (q.troll === true && userAnswers[questionIndex] === null) {
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
// BACK QUESTION
// ------------------------------

function goToPreviousQuestion() {
  if (questionIndex === 0) return;

  questionIndex--;
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
backBtn.addEventListener("click", goToPreviousQuestion);
