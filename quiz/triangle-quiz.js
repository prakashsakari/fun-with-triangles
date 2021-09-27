var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector("#submit-btn");
var message = document.querySelector("#message");

var correctAnswer = ["90°", "right angled"];

function checkScore(){
    var score = 0;
    var index = 0;
    var data = new FormData(quizForm);
    for (var value of data.values()){
        if (value === correctAnswer[index]){
            score++;
        }
        index++
    }
    message.innerText = "Your score is " + score
}

submitButton.addEventListener("click", checkScore)