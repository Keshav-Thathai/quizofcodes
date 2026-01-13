const questions = [
    {
        q: "Who invented JavaScript?",
        options: ["Dennis Ritchie", "Brendan Eich", "James Gosling", "Guido van Rossum"],
        answer: 1
    },
    {
        q: "Which language runs in browser?",
        options: ["C", "Java", "Python", "JavaScript"],
        answer: 3
    },
    {
        q: "Which symbol is used for comments in JS?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: 0
    }
];
let button=document.querySelectorAll("button");


let index = 0;

let score = 0;

let buttons = document.querySelectorAll("button");

function showQuestion() {
  document.getElementById("question").innerText =
    questions[index].q;

  buttons[0].innerText = questions[index].options[0];
  buttons[1].innerText = questions[index].options[1];
  buttons[2].innerText = questions[index].options[2];
  buttons[3].innerText = questions[index].options[3];
}

function checkAnswer(selected) {
  if (selected === questions[index].answer) {
    score++;
    alert("Correct");
  } else {
    alert("Wrong");
  }

  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    document.body.innerHTML =
      "<h2>Quiz Finished</h2><h3>Score: " + score + " / " + questions.length + "</h3>";
  }
}

showQuestion();













