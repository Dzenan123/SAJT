const questions = [{
    id: 12345678,
    question: "Who is the fastest human on earth?",
    answers: ["Usain Bolt", "Yohan Blake", "Tyson Gay", "Justin Gatlin"],
    points: 5,
    correct: "Usain Bolt"
  },
  {
    id: 12345679,
    question: "Who is the most followed person on Instagram?",
    answers: ["Cristiano Ronaldo", "Instagram", "Lionel Messi", "The Rock"],
    points: 5,
    correct: "Instagram",
  },
  {
    id: 12345670,
    question: "In a bingo game, which number is represented by the phrase 'two little ducks'?",
    answers: ["19", "22", "21", "20"],
    points: 5,
    correct: "22"
  }];
  
  let currentQuestion = 0;
  const questionDiv = document.getElementById("questionDiv");
  const questionInDiv = document.getElementById("question");
  const answerOptions = document.getElementById("answers");
  let score = 0;

  function displayQuestion(question) {
    questionInDiv.innerText = question.question;
    answerOptions.innerHTML = "";
    for (let i = 0; i < question.answers.length; i++) {
      const answerButton = document.createElement("button");
      answerButton.classList.add("answer");
      answerButton.innerText = question.answers[i];
      answerButton.addEventListener("click", function() {
        submitAnswer(question.id, question.answers[i]); 
      });
      answerOptions.appendChild(answerButton);
    }
  }
  
  function startTest() {
    // Prikazi prvo pitanje
    const question = questions[currentQuestion];
    displayQuestion(question);
  }
  
  startTest();

  function submitAnswer(id, ans) {
    const question = questions[currentQuestion];
    if (question.id === id && question.correct === ans) {
      score += question.points;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      // success stranica
      window.location.href = "success.html?score=" + score + "&total=" + getTotalPoints();
      return;
    }
    const nextQuestion = questions[currentQuestion];
    displayQuestion(nextQuestion);
  }

  function getTotalPoints() {
    let totalPoints = 0;
    for (let i = 0; i < questions.length; i++) {
      totalPoints += questions[i].points;
    }
    return totalPoints;
  }

  document.getElementById("ans1").addEventListener("click", function() {
    const ans = document.getElementById("ans1").textContent;
    submitAnswer(questions[currentQuestion].id, ans);
  });
  document.getElementById("ans2").addEventListener("click", function() {
    const ans = document.getElementById("ans2").textContent;
    submitAnswer(questions[currentQuestion].id, ans);
  });
  document.getElementById("ans3").addEventListener("click", function() {
    const ans = document.getElementById("ans3").textContent;
    submitAnswer(questions[currentQuestion].id, ans);
  });
  document.getElementById("ans4").addEventListener("click", function() {
    const ans = document.getElementById("ans4").textContent;
    submitAnswer(questions[currentQuestion].id, ans);
  });
