let currentQuestionIndex = 0;
let totalPoints = 0;

// Function to render a question
function renderQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = ""; // Clear previous content

  if (currentQuestionIndex >= questions.length) {
    // Display the final score
    container.innerHTML = `
            <p class="text-2xl font-bold mb-4">Quiz Completed!</p>
            <p class="text-xl">Your Total Points: <span class="text-green-500">${totalPoints}</span></p>
            <a href="../../public/index.php" class="text-blue-500 underline">Go to Home</a>
        `;
    return;
  }

  const question = questions[currentQuestionIndex];
  const answersHtml = question.answers
    .map(
      (answer) => `
            <button
                id="answer-${answer.id}"
                class="block w-full text-left border-2 border-blue-500 rounded-lg p-2 my-2 hover:bg-white transition"
                onclick="handleAnswerClick(${answer.id}, ${question.correct_answer_id}, ${question.point})"
            >
                ${answer.text}
            </button>
        `
    )
    .join("");

  container.innerHTML = `
        <div>
            <p class="text-2xl font-bold mb-4">${question.question}</p>
            <div id="answers-container">${answersHtml}</div>
        </div>
    `;
}

// Function to handle answer click
function handleAnswerClick(selectedAnswerId, correctAnswerId, points) {
  // Highlight buttons
  const correctButton = document.getElementById(`answer-${correctAnswerId}`);
  const selectedButton = document.getElementById(`answer-${selectedAnswerId}`);

  if (selectedAnswerId === correctAnswerId) {
    correctButton.classList.add("bg-green-500", "text-white");
    correctButton.classList.remove("hover:bg-white"); // Disable hover effect
    totalPoints += points; // Add points for the correct answer
  } else {
    selectedButton.classList.add("bg-red-500", "text-white");
    selectedButton.classList.remove("hover:bg-white"); // Disable hover effect
    correctButton.classList.add("bg-green-500", "text-white");
    correctButton.classList.remove("hover:bg-white"); // Disable hover effect
  }

  // Disable all buttons to prevent multiple clicks
  const allButtons = document.querySelectorAll("#answers-container button");
  allButtons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("hover:bg-white"); // Disable hover effect on all buttons
  });

  // Move to the next question after 1 second
  setTimeout(() => {
    currentQuestionIndex++;
    renderQuestion();
  }, 1000);
}

// Initialize the quiz
renderQuestion();
