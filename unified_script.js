let currentQA = null;

function showUnifiedQuestion() {
  const grade = document.getElementById("gradeSelect").value;
  const type = document.getElementById("typeSelect").value;

  document.getElementById("questionCard").style.display = "none";
  document.getElementById("whCard").style.display = "none";

  if (type === "yesno") {
    let list;
    if (grade === "grade3") list = grade3_questions;
    else if (grade === "pre2") list = gradePre2_questions;
    const i = Math.floor(Math.random() * list.length);
    currentQA = list[i];

    document.getElementById("preText").textContent = currentQA.pretext || "";
    document.getElementById("questionText").textContent = currentQA.question;
    document.getElementById("yesAnswer").style.display = "none";
    document.getElementById("noAnswer").style.display = "none";
    document.getElementById("questionCard").style.display = "block";
  } else {
    let list;
    if (grade === "grade3") list = grade3_wh_questions;
    else if (grade === "pre2") list = gradePre2_wh_questions;
    const i = Math.floor(Math.random() * list.length);
    currentQA = list[i];

    document.getElementById("whQuestionText").textContent = currentQA.question;
    document.getElementById("shortAnswer").style.display = "none";
    document.getElementById("longAnswer").style.display = "none";
    document.getElementById("whCard").style.display = "block";
  }
}

function showUnifiedAnswer(type) {
  if (!currentQA) return;
  const answer = currentQA.answers[type];
  const el = document.getElementById(type + "Answer");
  el.textContent = answer;
  el.style.display = "block";
}
