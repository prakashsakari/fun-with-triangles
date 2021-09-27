var inputSide = document.querySelectorAll(".side-length");
var checkButton = document.querySelector("#check-btn");
var message = document.querySelector("#message");


function calculateSumOfSquare(x, y){
    sumOfSquare = Math.pow(x, 2) + Math.pow(y, 2)
    return sumOfSquare;
}

function calculateHypotunese(){
    sumOfSquare = calculateSumOfSquare(Number(inputSide[0].value), Number(inputSide[1].value))
    var hypotunese = Math.sqrt(sumOfSquare);
    console.log((hypotunese).toFixed(2));
    if (inputSide[0].value&&inputSide[1].value){
        message.innerText = "The lenght of hypotunese is " + hypotunese.toFixed(2); 
    }else{
        message.innerText = "Kindly enter both the lengths!"
    }
}


checkButton.addEventListener("click", calculateHypotunese);