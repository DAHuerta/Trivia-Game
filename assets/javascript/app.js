// Global Variables
    // Number Correct
var correct = 0;
    // Number Wrong
var wrong = 0;
    // Number Unanswered
var unanswered = 0;
    // Number Timer Starts At
var timer = 30;
    // Is Timer Running
var timerRunning = false;
    // number of questions
var questionCount = questions.length;
    // User Choice
var userChoice = "";
var select

    // Object With Questions and Answer Array
var questions = [

    {
        question: "What is Stan’s dad (Randy) do for a living?",
        answerOptions: ["Architect", "Professional Mascot", "Geologiest", "Meteorologist"],
        correctAnswer: 2
    },

    {
        question: "What does Towelie like to do?",
        answerOptions: ["Drink Windex", "Get High", "Play Frisbee", "Smoke Meth"],
        correctAnswer: 1
    },

    {
        question: "Why did Cartman's friends ignore him in the “death of Eric Cartman” episode?",
        answerOptions: ["He ate all the skin of the KFC Chicken", "He is an asshole", "He took credit for the 'Fish Dicks' joke", "He called Kyle a Jew"],
        correctAnswer: 0
    },

    {
        question: "What is the name of the South Park Elementary School counselor?",
        answerOptions: ["Mr. Garrison", "Mr. Mackey", "Mr. Marsh", "Mr. Hat"],
        correctAnswer: 1
    },

    {
        question: "Why did Issac Hayes and his character (Chef) leave the show?",
        answerOptions: ["He retired", "The show was to offensive", "The show decided to go on without him", "The creators made fun of Scientology"],
        correctAnswer: 3
    },

    {
        question: "What is the name of Cartman’s christan boy band?",
        answerOptions: ["Heavenly Soldiers", "Hands on Bible", "Faith Plus 1", "Sinners"],
        correctAnswer: 2
    },

    {
        question: "What is a recurring event in almost all South Park Episodes?",
        answerOptions: ["Kenny Dies", "Cartman eat KFC chicken", "Randy does something stupid", "ManBearPig mes an apperance"],
        correctAnswer: 0
    },

    {
        question: "What is Cartman’s superhero name?",
        answerOptions: ["Agua Man", "The Coon", "Fat Man", "Mysterion"],
        correctAnswer: 1
    },

    {
        question: "What is South Parks famous Christmas character?",
        answerOptions: ["Merry the talking Wreath", "Beau Jo Mistletoe", "Mr. Spanky the Xmas Shoe", "Mr.Hankey the Christmas Poo"],
        correctAnswer: 3
    },

    {
        question: "Jesus had a television talk show, what was it called?",
        answerOptions: ["Jesus Christ Superstar", "Sins and Forgivness", "Jesus and Pals", "Jesus, Believe It or not!"],
        correctAnswer: 2
    },
];

$(".resetButton").hide();

    // Reset Function

    // Start Timer Count Down
function countDown(){

    if (!timerRunning) {
        intervalId = setInterval(decrement, 1000);
        timerRunning = true;
    }
    
};

    // Set Count Down Function
    function decrement() {

        timer--;
        $(".timeRemaining").html("<p>Time Remaining: " + timer + "</p>");

        if (timer === 0) {
            unanswered++;
            stop();
            $(".answer").html("<p>Times Up! The correct answer is: " + select.answerOptions[select.correctAnswer] + "</p>");
        }

    }

    // Set Timer Stop Function
    function stop() {

        clearInterval(intervalId);
        timerRunning = false;
      
      }

    // Randomly Select Question
    function selectedQuestion() {

        var quizQuestions = Math.floor(Math.random() * questions.length);
        select = questions[index];

        $(".triviaQuestion").html("<p>" + select.question + "</p>");
        for (var i = 0; i < select.answerOptions.length; i++) {

            var userGuess = $("<div>");
            userGuess.addClass("answerSelected");
            userGuess.html(select.answerOptions[i]);
            userGuess.attr("data-value", i);
            $(".triviaQuestion").append(userGuess);
            
        };
    }

    // On Click Event For Start button
    
    // On Click Event For Answer Selection
    $(".answerSelected").on("click", function() {

        userChoice = parseInt($(this).attr("data-value"));

        if (userChoice === select.answer) {
            stop();
            correct++;
            userChoice = "";
            $(".answer").html("<h1>CORRECT!</h1>");
        } else {
            stop();
            wrong++;
            userChoice = "";
            $(".answer").html("<h1>Wrong!</h1>");
        }

    })
    





