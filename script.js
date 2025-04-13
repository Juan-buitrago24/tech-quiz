const questions = [
    {
      question: "¿Qué significa HTML?",
      answers: ["HyperText Markup Language", "HighText Markdown Language", "HyperTool Multi Language"],
      correct: 0
    },
    {
      question: "¿Cuál no es un lenguaje de programación?",
      answers: ["JavaScript", "Python", "HTML"],
      correct: 2
    },
    {
      question: "¿Qué framework se usa con TypeScript?",
      answers: ["Angular", "Vue", "Laravel"],
      correct: 0
    },
    {
      question: "¿Qué hace Git?",
      answers: ["Control de versiones", "Diseño web", "Base de datos"],
      correct: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const nextBtn = document.getElementById('next');
  const resultEl = document.getElementById('result');
  const restartBtn = document.getElementById('restart');
  
  function showQuestion() {
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
  
    q.answers.forEach((answer, index) => {
      let btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => selectAnswer(index);
      answersEl.appendChild(btn);
    });
  }
  
  function selectAnswer(index) {
    if (index === questions[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    resultEl.classList.remove('hidden');
    restartBtn.classList.remove('hidden');
    resultEl.textContent = `Tu puntaje es ${score} de ${questions.length}`;
  }
  
  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hidden');
    resultEl.classList.add('hidden');
    restartBtn.classList.add('hidden');
    showQuestion();
  });
  
  nextBtn.addEventListener("click", () => {
    showQuestion();
  });
  
  showQuestion();
  