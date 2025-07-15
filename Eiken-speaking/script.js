let currentQA = null;

function showQuestion() {
  const i = Math.floor(Math.random() * grade3_questions.length);
  currentQA = grade3_questions[i];

  document.getElementById("questionText").textContent = currentQA.question;
  document.getElementById("yesAnswer").style.display = "none";
  document.getElementById("noAnswer").style.display = "none";
  document.getElementById("questionCard").style.display = "block";
}

function showAnswer(type) {
  if (!currentQA) return;

  const answer = currentQA.answers[type];
  const el = document.getElementById(type + "Answer");
  el.textContent = answer;
  el.style.display = "block";
}
