//timer elements
var timerEl = document.getElementById("timeLeft")
var startBtn = document.getElementById("start")
var questionEl = document.getElementById("main")
console.log(startBtn);

var timeLeft = 54;

// Question array and index
var questions = [
    {
    question: "What is the language used to describe the presentation of a document?",
    a: "HTML",
    b: "JavaScript",
    c: "CSS",
    d: "C+",
    answer: "CSS"
    },
    {
    question: "Which one of these headings has a bigger font size?",
    a: "h1",
    b: "h2",
    c: "h3",
    d: "h4",
    answer: "h1"
    },
    {
    question: "Which of these elements can create a section in an HTML?",
    a: "section",
    b: "article",
    c: "div",
    d: "All of the Above",
    answer: "All of the Above"
    },
    {
    question: "What style creates space around an element?",
    a: "Margin",
    b: "Padding",
    c: "Border",
    d: "Position",
    answer: "Margin"
    },
    {
    question: "What does console.log do?",
    a: "Creates functions in the console",
    b: "Outputs messages to the console",
    c: "Displays the HTML in the console",
    d: "Creates log-in information",
    answer: "Outputs messages to the console"
    }
];

questionindex = 0

// starts the quiz
function startQuiz () {
    countdown();
    displayquestion ();
}

// displays question function
function displayquestion () {
    document.getElementById("main").innerHTML = '';

    var current = questions[questionindex];

    var question = document.createElement("h2");
    question.textContent = current.question;
    questionEl.appendChild(question);
    
    var a = document.createElement("p");
    a.textContent = current.a;
    questionEl.appendChild(a);

    var b = document.createElement("p");
    b.textContent = current.b;
    questionEl.appendChild(b);

    var c = document.createElement("p")
    c.textContent = current.c;
    questionEl.appendChild(c);

    var d = document.createElement("p")
    d.textContent = current.d;
    questionEl.appendChild(d);

    a.addEventListener("click", anwserCheck)
    b.addEventListener("click", anwserCheck)
    c.addEventListener("click", anwserCheck)
    d.addEventListener("click", anwserCheck)
}

// answer check function
function anwserCheck () {
    console.log(this)
    if (questions[questionindex].answer === this.textContent ) {
    console.log("correct");
    questionindex ++;
    displayquestion();
    } else {
        console.log("incorrect");
        questionindex ++;
        timeLeft -= 10;
        displayquestion();
    }
}

//timer function
function countdown() {
    
    var interval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
            console.log(timeLeft);
        } else if (timeLeft === 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time: 0";
            alert("You Ran Out of Time");
            clearInterval(interval);
        }
    }, 1000);
}

// Start Button
startBtn.onclick = startQuiz;