const quizData = [
  {
    question: 'HTML Stands for-',
    options: ['HighText Machine Language', 'HyperText and links Markup Language', 'HyperText Markup Language', 'None of the above'],
    answer: 'HyperText Markup Language',
  },
  {
    question: 'Which of the following element is responsible for making the text bold in html?',
    options: ['<pre>', '<a>', '<b>', '<br>'],
    answer: '<b>',
  },
  {
    question: 'How to create an unordered list (a list with the list items in bullets) in HTML?',
    options: ['<ul>', '<ol>', '<li>', '<l>'],
    answer: '<ul>',
  },
  {
    question: '&lt;input&gt; is-',
    options: ['A format tag', 'An empty tag', 'All of the above', 'None of the above'],
    answer: 'An empty tag',
  },
  {
    question: 'Which of the following HTML tag is used to display the text with scrolling effect?',
    options: [
      '<marquee>',
      '<scroll>',
      '<div>',
      'None',
    ],
    answer: '<marquee>',
  },
  {
    question: 'An HTML program is saved by using the ____ extension.',
    options: ['.ht', '.html', '.hml', '.htl'],
    answer: '.html',
  },
  {
    question: 'The full form of CSS is:',
    options: [
      'Cascade style sheets',
      'Color and style sheets',
      'Cascading style sheets',
      'None of the above',
    ],
    answer: 'Cascading style sheets',
  },
  {
    question: 'Which of the following is the correct syntax to display the hyperlinks without any underline?',
    options: [
       'a {text-decoration : underline;}',
       'a {decoration : no-underline;}',
       'a {text-decoration : none;}',
       'None of the above',
      ],
    answer: 'a {text-decoration : none;}',
  },
  {
    question: 'Which of the following is not a value of the font-variant property in CSS?',
    options: [
      'normal',
      'small-caps',
      'large-caps',
      'inherit',
    ],
    answer: 'large-caps',
  },
  {
    question: 'JavaScript is the same as Java.',
    options: ['True', 'False',],
    answer: 'False',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

// Shuffle options once to keep them consistent
quizData.forEach(q => shuffleArray(q.options));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];
  
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;
  
  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  questionData.options.forEach(optionText => {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = optionText;

    option.appendChild(radio);
    option.appendChild(document.createTextNode(optionText));
    optionsElement.appendChild(option);
  });

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (!selectedOption) {
    alert("Please select an answer before submitting!");
    return;
  }

  const answer = selectedOption.value;
  if (answer === quizData[currentQuestion].answer) {
    score++;
  } else {
    incorrectAnswers.push({
      question: quizData[currentQuestion].question,
      incorrectAnswer: answer,
      correctAnswer: quizData[currentQuestion].answer,
    });
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';

  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  incorrectAnswers.forEach(({ question, incorrectAnswer, correctAnswer }) => {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${correctAnswer}
      </p>
    `;
  });

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    ${incorrectAnswers.length > 0 ? `<p>Incorrect Answers:</p>${incorrectAnswersHtml}` : '<p>All answers were correct!</p>'}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();