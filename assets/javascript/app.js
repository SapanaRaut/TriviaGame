// Define variables
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Arrays (Questions & Answers)
    var question = ["Pupusas, handmade thick stuffed corn tortillas, are a traditional dish from what country?",
    "Roquefort is a French blue cheese made from the milk of what animal?", "Granny Smith is a popular type of which fruit?", "Dijon mustand originated in the city of Dijon, located in what country?", "In what year did McDonald's start serving breakfast with the introduction of the Egg McMuffin?",
    "What fast food franchise has the most worldwide locations?", "What was the original flavor of the filling in Twinkies?", "What is the name for a confection that consists primarily of sugar or honey and almond meal?"];
    var answer = ["El Salvador", "Sheep", "Apple", "France", "1972", "Subway", "Banana cream", "Marzipan"];
    var firstChoice = ["Belize", "Sheep", "Pineapple", "Poland", "1972", "Taco Bell", "Banana cream", "Fudge"];
    var secondChoice = ["El Salvador", "Cow", "Cherry", "France", "1975", "Subway", "Key Lime", "Honey Comb"];
    var thirdChoice = ["Costa Rica", "Giraffe", "Mango", "Italy", "1982", "Wendys", "Pumpkin", "Brittle"];
    var fourthChoice = ["Panama", "Elephant", "Apple", "Sweden", "1984", "McDonald", "Pecan", "Marzipan"];

// Show & Hide Functions
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    // CSS Hover
        $("#choice-holder-1").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#FF4500");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#FF4500");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#FF4500");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "gray");
        },
        function(){
            $(this).css("color", "#FF4500");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Check Answer Function
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Correct! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// End game checking function
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 10;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time's up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 500);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 1000);
            setTimeout(displayQuestion, 1500);
        }
    }

    resetTime();

// Display Images With Answer
    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/ElSalvador.png">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Sheep.jpeg">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/apple.jpeg">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/France.png">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/McDonald.jpeg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Subway.png">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/BananaCream.jpeg">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Marzipan.jpeg">');
        }
    }

 // Show Results Function   
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

// Reset Results Function 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});