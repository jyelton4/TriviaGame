//
// Trivia Game App
//  
    // global var to set timer 
    var timer ; 
    // triviaGame object
    var triviaGame = { 
        correctCounter: 0, 
        incorrectCounter: 0, 
        questionCounter: [], 
        randomNumGenerator: function () {
            return Math.floor(Math.random() * (24-0+1));
        }, 
        // parameters for ajax call
        triviaDataService: {
                url: "https://opentdb.com/api.php?amount=25&category=23&difficulty=easy&type=multiple",
                method: "GET", 
        }, 
        // dynamically create start-reset button 
        createStartResetButton: function () {
            $("#navbar").append($("<button>").text("Start Game").attr("id", "start-reset"));
        }, 
        // create array of 1 correct and 3 incorrect answers
        createAnswerArray: function () {
            var answerArray = [this.currentQuestionOBJ.correct_answer];
            var incorrectAnswersArray = this.currentQuestionOBJ.incorrect_answers;
            incorrectAnswersArray.forEach(function (item) {
                answerArray.push(item);
            });
            return answerArray;
        }, 
        // dynamically create objects for api response 
        createReponseObject: function (response) {
            this.responseOBJ = response.results; 
        }, 
        // select question from ajax response and create property this.currentQuestionOBJ 
        selectRandomQuestion: function() {
            var randomNum = this.randomNumGenerator(); 
            if (this.questionCounter.indexOf(randomNum) ===  -1) {
                this.questionCounter.push(randomNum);
                this.currentQuestionOBJ = this.responseOBJ[randomNum]; 
            } else {
                this.selectRandomQuestion();
            }
        }, 
        // call questionToHTML and answersToHTML 
        generateHTML: function() {
            $("#question-container").empty();
            $("#answer-container").empty();
            this.questionToHTML();
            this.answersToHTML();
        }, 
        // write question to html element
        questionToHTML: function () {
            $("#question-container").append($("<div>")).text(this.currentQuestionOBJ.question);
        }, 
        // create HTML element for game timer button 
        createTimer: function () {
            $("#game-timer").remove();
            $("#navbar").append($("<button>").attr("id","game-timer"));
        }, 
        // method to clearTimeout on game timer 
        resetTimer: function () {
            clearTimeout(timer);
        }, 
        // set game timer with setTimout function for 1 minute and write to game timer button HTML element 
        gameTimer: function countdown(minutes) {
            var seconds = 60;
            var mins = minutes;
            this.createTimer();
            // tick function to countdown and update game timer HTML, break off into separate function if possible 
            function tick() {
                var counter = $("#game-timer");
                var current_minutes = mins-1
                seconds--;
                counter.text(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));
                if( seconds > 0 ) {
                    timer = setTimeout(tick, 1000);
                } else {
                    if(mins > 1){   
                        countdown(mins-1);          
                    } else {
                        triviaGame.gameEndAlert();
                    }
                }
            }
            tick();
        }, 
        // alert user of game end and score 
        gameEndAlert: function () {
            $("#question-container").empty();
            $("#answer-container").empty();
            var gameStats = ("Time is up! You guessed " + this.correctCounter + " questions correctly and " + this.incorrectCounter + " questions incorrectly. Click 'Reset Game' to play again!");
            $("#answer-container").append($("<p>").text(gameStats));
        }, 
        // 2 second timer function to reset questions/answers
        twoSecondTimer: function () {
            setTimeout(function () {
                triviaGame.resetQnA();
            }, 2200);
        }, 
        // 1 second timer function to remove in/correct notification 
        oneSecondTimer: function () {
            setTimeout(function () {
                triviaGame.clearNotification();
            }, 2000);
        }, 
        // write answers to HTML buttons
        answersToHTML: function () {
            var answerArray = this.createAnswerArray();
            answerArray.forEach(function (item) {
                $("#answer-container").append($("<button>").text(item).addClass("answer-btn"));
            }) 
        }, 
        // clear in/correct notification 
        clearNotification: function () {
            $("#answer-container").empty();
        }, 
        // accept click on answer HTML buttons
        guessHandler: function (userAnswer) {
            if (userAnswer === this.currentQuestionOBJ.correct_answer) {
                this.correctAnswerHandler();
                this.twoSecondTimer();
            } else {
                this.incorrectAnswerHandler();
                this.twoSecondTimer();
            }
        }, 
        // correctAnswerHandler
        correctAnswerHandler: function () {
            this.correctAnswerHTML();
            this.oneSecondTimer();
            this.correctCounter++;
            this.createCountersHTML();
        }, 
        // incorrectAnswerHandler
        incorrectAnswerHandler: function () {
            this.incorrectAnswerHTML();
            this.oneSecondTimer();
            this.incorrectCounter++;
            this.createCountersHTML();
        }, 
        // reset question & answers
        resetQnA: function (response) {
            this.selectRandomQuestion();
            this.generateHTML();
        }, 
        // create HTML for counters in/correct guesses 
        createCountersHTML: function () {
            $("#counters").empty();
            $("#counters").append($("<button>").text("Incorrect: " + this.incorrectCounter).attr("id", "incorrect-counter"));
            $("#counters").append($("<button>").text("Correct: " + this.correctCounter).attr("id", "correct-counter"));
        }, 
        // replace 'Start Button' html with reset button
        startButtonToResetButton: function () {
            $("#start-reset").text("Reset Game");
        }, 
        // write HTML notification to user for correct answer 
        correctAnswerHTML: function () {
            $("#answer-container").append($("<p>").text("This is correct. The answer is: " + this.currentQuestionOBJ.correct_answer));
        }, 
        // write HTML notification to user for incorrect answer 
        incorrectAnswerHTML: function () {
            $("#answer-container").append($("<p>").text("This is incorrect. The correct answer is: " + this.currentQuestionOBJ.correct_answer));
        }, 
        // reset in/correct counters 
        resetCounters: function () {
            this.correctCounter = 0;
            this.incorrectCounter = 0;
            this.questionCounter = [];
        }, 
        // method to make questions aren't repeated
        // method to initialize game 
        initializeGame: function (response) {
            triviaGame.startButtonToResetButton();
            triviaGame.resetTimer();
            triviaGame.resetCounters();
            triviaGame.createCountersHTML();
            triviaGame.createReponseObject(response);
            triviaGame.selectRandomQuestion();
            triviaGame.generateHTML();
            triviaGame.gameTimer(1);
        }
    }

//
// Executables below
// 

    // generate Start Game button
    triviaGame.createStartResetButton();

    // click handler to initialize game
    $(document).ready(function () { 

        $("#start-reset").on("click", function () {
            $.ajax(triviaGame.triviaDataService).then(function(response) {
                triviaGame.initializeGame(response);
            });
        });
    });

    // click handler to accept user input for guesses
    $(document).ready(function () {
        
        $(document).on("click", ".answer-btn", function () {
            triviaGame.guessHandler(this.innerHTML);
        });
    });