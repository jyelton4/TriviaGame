//
// // build timers
//
// // create trivia data service
//
    var triviaGame = { 
        correctCounter: 0, 
        incorrectCounter: 0, 
        response: {
            "response_code": 0,
            "results": [
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which one of these was not a beach landing site in the Invasion of Normandy?",
                    "correct_answer": "Silver",
                    "incorrect_answers": [
                        "Gold",
                        "Juno",
                        "Sword"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "King Henry VIII was the second monarch of which European royal house?",
                    "correct_answer": "Tudor",
                    "incorrect_answers": [
                        "York",
                        "Stuart",
                        "Lancaster"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What was William Frederick Cody better known as?",
                    "correct_answer": "Buffalo Bill",
                    "incorrect_answers": [
                        "Billy the Kid",
                        "Wild Bill Hickok",
                        "Pawnee Bill"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which German field marshal was known as the `Desert Fox`?",
                    "correct_answer": "Erwin Rommel",
                    "incorrect_answers": [
                        "Ernst Busch",
                        "Wolfram Freiherr von Richthofen",
                        "Wilhelm List"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Who discovered Penicillin?",
                    "correct_answer": "Alexander Flemming",
                    "incorrect_answers": [
                        "Marie Curie",
                        "Alfred Nobel",
                        "Louis Pasteur"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How many manned moon landings have there been?",
                    "correct_answer": "6",
                    "incorrect_answers": [
                        "1",
                        "3",
                        "7"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The idea of Socialism was articulated and advanced by whom?",
                    "correct_answer": "Karl Marx",
                    "incorrect_answers": [
                        "Vladimir Lenin",
                        "Joseph Stalin",
                        "Vladimir Putin"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which one of these tanks was designed and operated by the United Kingdom?",
                    "correct_answer": "Tog II",
                    "incorrect_answers": [
                        "M4 Sherman",
                        "Tiger H1",
                        "T-34"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "During WWII, in 1945, the United States dropped atomic bombs on the two Japanese cities of Hiroshima and what other city?",
                    "correct_answer": "Nagasaki",
                    "incorrect_answers": [
                        "Kawasaki",
                        "Tokyo",
                        "Kagoshima"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
                    "correct_answer": "Illyrians",
                    "incorrect_answers": [
                        "Dorians",
                        "Achaeans",
                        "Ionians"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The original Roman alphabet lacked the following letters EXCEPT:",
                    "correct_answer": "X",
                    "incorrect_answers": [
                        "W",
                        "U",
                        "J"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "What was Manfred von Richthofen&#039;s nickname?",
                    "correct_answer": "The Red Baron",
                    "incorrect_answers": [
                        "The High Flying Ace",
                        "The Blue Serpent ",
                        "The Germany Gunner"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "When did the Battle of the Somme begin?",
                    "correct_answer": "July 1st, 1916",
                    "incorrect_answers": [
                        "August 1st, 1916",
                        "July 2nd, 1916",
                        "June 30th, 1916"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In 1720, England was in massive debt, and became in involved in the South Sea Bubble. Who was the main mastermind behind it?",
                    "correct_answer": "John Blunt",
                    "incorrect_answers": [
                        "Daniel Defoe",
                        "Robert Harley",
                        "John Churchill"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "When was Google founded?",
                    "correct_answer": "September 4, 1998",
                    "incorrect_answers": [
                        "October 9, 1997",
                        "December 12, 1989",
                        "Feburary 7th, 2000"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Who was the Prime Minister of Japan when Japan declared war on the US?",
                    "correct_answer": "Hideki Tojo",
                    "incorrect_answers": [
                        "Michinomiya Hirohito",
                        "Isoroku Yamamoto",
                        "Fumimaro Konoe"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Who was the first prime minister of Canada?",
                    "correct_answer": "John Macdonald",
                    "incorrect_answers": [
                        "John Abbott",
                        "Alexander Mackenzie",
                        "Robert Borden"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How was Socrates executed?",
                    "correct_answer": "Poison",
                    "incorrect_answers": [
                        "Decapitation",
                        "Firing squad",
                        "Crucifixion "
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How long did World War II last?",
                    "correct_answer": "6 years",
                    "incorrect_answers": [
                        "4 years",
                        "5 years",
                        "7 years"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "Which of the following countries was not an axis power during World War II?",
                    "correct_answer": " Soviet Union",
                    "incorrect_answers": [
                        "Italy",
                        "Germany",
                        "Japan"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "In 1939, Britain and France declared war on Germany after it invaded which country?",
                    "correct_answer": "Poland",
                    "incorrect_answers": [
                        "Czechoslovakia",
                        "Austria",
                        "Hungary"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "The &quot;Trail of Tears&quot; was a result of which United States President&#039;s Indian Removal Policy?",
                    "correct_answer": "Andrew Jackson",
                    "incorrect_answers": [
                        "Harry S. Truman",
                        "Martin Van Buren",
                        "John Quincy Adams"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "To what political party did Abraham Lincoln belong when elected POTUS?",
                    "correct_answer": "Republican",
                    "incorrect_answers": [
                        "Democrat",
                        "Independent",
                        "Whig"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "These two countries held a commonwealth from the 16th to 18th century.",
                    "correct_answer": "Poland and Lithuania",
                    "incorrect_answers": [
                        "Hutu and Rwanda",
                        "North Korea and South Korea",
                        "Bangladesh and Bhutan"
                    ]
                },
                {
                    "category": "History",
                    "type": "multiple",
                    "difficulty": "easy",
                    "question": "How old was Adolf Hitler when he died?",
                    "correct_answer": "56",
                    "incorrect_answers": [
                        "43",
                        "65",
                        "47"
                    ]
                }
            ]
        }, 
        // generate random number 
        randomNumGenerator: function () {
            return Math.floor(Math.random() * (24-0+1));
        }, 
        // parameters for ajax call
        triviaDataService: {
                url: "https://opentdb.com/api.php?amount=25&category=23&difficulty=easy&type=multiple",
                method: "GET", 
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
        // select question from ajax response and create property this.currentQuestionOBJ 
        selectRandomQuestion: function() {
            var randomNum = this.randomNumGenerator();
            this.currentQuestionOBJ = this.response.results[randomNum];
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
                    setTimeout(tick, 1000);
                } else {
                    if(mins > 1){   
                        countdown(mins-1);           
                    } else {
                        console.log('times up');
                    }
                }
            }
            tick();
        }, 
        // build 1 second timer function
        oneSecondTimer: function () {
            setTimeout(function () {
                triviaGame.resetQnA()}, 1500);

        }, 
        // write answers to HTML buttons
        answersToHTML: function () {
            var answerArray = this.createAnswerArray();
            answerArray.forEach(function (item) {
                $("#answer-container").append($("<button>").text(item).addClass("answer-btn"));
            }) 
        }, 
        // accept click on answer HTML buttons
        guessHandler: function (userAnswer) {
            if (userAnswer === this.currentQuestionOBJ.correct_answer) {
                this.correctAnswerHandler();
                this.oneSecondTimer();
            } else {
                this.incorrectAnswerHandler();
                this.oneSecondTimer();
            }
        }, 
        // correctAnswerHandler
        correctAnswerHandler: function () {
            console.log("that is correct. the answer is " + this.currentQuestionOBJ.correct_answer);
        }, 
        // incorrectAnswerHandler
        incorrectAnswerHandler: function () {
            console.log("you've chosen unwisely. the correct answer is " + this.currentQuestionOBJ.correct_answer);
        }, 
        // reset question & answers
        resetQnA: function () {
            // var newRandomNum = this.randomNumGenerator();
            var newRandomNum = this.randomNumGenerator();
            console.log(newRandomNum);
            var newQuestionOBJ = this.response.results[newRandomNum];
            console.log(newQuestionOBJ);
            if (newQuestionOBJ.question === this.currentQuestionOBJ.question) {
                triviaGame.resetQnA();
            } else {
                this.selectRandomQuestion();
                this.generateHTML();
            }
        }
        // replace console logs with dynamic html for in/correct answers notification, then trigger resetQnA in guessHandler method
        // keep track of in/correct guess count with counter properties 
        // replace 'Start Button' html with reset button
        // bind document.on event to reset button id
        // method to alert game over, total in/correct, etc. trigged by running gameTimer (replace "times up")
        // handle game end/reset accord. to requriments
        // handle gameTimer being actually reset
        // bump question bank up to 50
    }

    $(document).ready(function () { 

        $("#start-reset").on("click", function () {
            // $.ajax(triviaGame.triviaDataService).then(function(response) {
                triviaGame.selectRandomQuestion(triviaGame.response);
                triviaGame.generateHTML();
                triviaGame.gameTimer(1);
            // });

        });
    
    $(document).ready(function () {
        
        $(document).on("click", ".answer-btn", function () {
            console.log(this.innerHTML);
            triviaGame.guessHandler(this.innerHTML);
        });

    });

    });
