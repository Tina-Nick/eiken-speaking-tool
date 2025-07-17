let currentQA = null;
let currentWhQA = null;

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

function showWhQuestion() {
  const i = Math.floor(Math.random() * grade3_wh_questions.length);
  currentWhQA = grade3_wh_questions[i];

  document.getElementById("whQuestionText").textContent = currentWhQA.question;
  document.getElementById("shortAnswer").style.display = "none";
  document.getElementById("longAnswer").style.display = "none";
  document.getElementById("whCard").style.display = "block";
}

function showWhAnswer(type) {
  if (!currentWhQA) return;

  const answer = currentWhQA.answers[type];
  const el = document.getElementById(type + "Answer");
  el.textContent = answer;
  el.style.display = "block";
}
