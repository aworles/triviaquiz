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
    question: "What is the best Paper 1 unit in the CS syllabus?",
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
    points: 1,
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
  {
    question: "What is the capital of france?",
    options: [
      "Paris",
      "Marseille",
      "Lyon",
      "F",
    ],
    correct: "F",
    points: 1,
  },
  {
    question: "France's penalty kicks is best described as:",
    options: [
      "Elite",
      "World-class",
      "Legendary",
      "Predictable",
    ],
    correct: "Predictable",
    points: 1,
  },
  {
    question: "French language is described as:",
    options: [
      "Romantic",
      "Elegant",
      "Beautiful",
      "English with extra letters",
    ],
    correct: "English with extra letters",
    points: 1,
  },
  {
    question: "What was the first flowchart exercise about? ",
    options: [
      "Input 2 numbers, add them and output the result",
      "Input 3 nmubers, find the highest and output the result",
      "Input 2 numbers, multiply them and output the result",
      "Input 3 numbers, sum them and output the result",
    ],
    correct: "Input 2 numbers, multiply them and output the result",
    points: 1,
  },
  {
    question: "What is the fastest way to make a CS teacher lose hope?",
    options: [
      "A student asking what a boolean is ...in Year 11",
      "A student writing code on a document with no indentation, ..using Comic Sans",
      "A student using 17 nested IF statements, with no ELIFs",
      "A student writing a code that asks for 100 inputs without using a loop'"
    ],
    correct: "A student asking what a boolean is ...in Year 11",
    points: 1,
  },
  {
    question: "What is the most common answer for 'state the purpose of the algorithm'?",
    options: [
      "Nothing",
      "Waffling out three sentences",
      "A detailed explanation of every line of code",
      "A single sentence describing the purpose using correct keywords"
    ],
    correct: "A detailed explanation of every line of code",
    points: 1,
  },
  {
    question: "Which one is inevitably the best programming language?",
    options: [
      "Scratch",
      "Python",
      "HTML",
      "Pseudocode"
    ],
    correct: "Python",
    points: 1,
  },
  {
    question: "54 68 65 20 62 65 73 74 20 67 61 6D 65 3F",
    options: [
      "66 6C 69 70 70 79 20 62 69 74 20 61 6E 64 20 74 68 65 20 61 74 74 61 63 6B 20 6F 66 20 74 68 65 20 68 65 78 61 64 65 63 69 6D 61 6C 20 66 72 6F 6D 20 62 61 73 65 20 31 36",
      "74 68 61 74 20 6F 6E 65 20 6C 69 67 68 74 62 75 6C 62 20 77 65 62 73 69 74 65 20 73 69 72 20 63 72 65 61 74 65 64 20 74 6F 20 74 65 61 63 68 20 62 69 6E 61 72 79",
      "74 68 69 73 21 20 6F 62 76 69 6F 75 73 6C 79 2E",
      "77 68 61 74"
    ],
    correct: "66 6C 69 70 70 79 20 62 69 74 20 61 6E 64 20 74 68 65 20 61 74 74 61 63 6B 20 6F 66 20 74 68 65 20 68 65 78 61 64 65 63 69 6D 61 6C 20 66 72 6F 6D 20 62 61 73 65 20 31 36",
    points: 1,
  },
  {
    question: "Why did the chicken cross the road?",
    options: [
      "To get to the other side",
      "To knock on the idiot's door",
      "To run away from Paper 1",
      "Because someone's code told it to do so"
    ],
    correct: "To get to the other side",
    points: 1,
  },
  {
    question: "Most efficient way to make a student drop CS",
    options: [
      "To get to the other side",
      "To knock on the idiot's door",
      "To run away from Paper 1",
      "Because someone's code told it to do so"
    ],
    correct: "To get to the other side",
    points: 1,
  },
  {
    question: "Approx. how many times did the word 'system' or 'systems' appear in page 243, of the textbook?",
    options: [
      "0",
      "15",
      "10",
      "5"
    ],
    correct: "15",
    points: 1,
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
// CONFETTI (TAB CASINO VERSION)
// ------------------------------

function baguetteConfetti() {
  const container = document.getElementById("confetti-container");

  // FIX: clear old confetti so nothing freezes
  container.innerHTML = "";

  for (let i = 0; i < 120; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "baguette";

      const icons = ["🥖", "🥐"];
      el.textContent = icons[Math.floor(Math.random() * icons.length)];

      el.style.left = Math.random() * 100 + "vw";
      el.style.fontSize = (1.5 + Math.random() * 2.5) + "rem";
      el.style.animationDuration = (4 + Math.random() * 3) + "s";

      container.appendChild(el);
      setTimeout(() => el.remove(), 8000);
    }, i * 20);
  }
}

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
    baguetteConfetti();
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
