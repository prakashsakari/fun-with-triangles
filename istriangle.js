var inputAngle = document.querySelectorAll(".input-angle");
var checkButton = document.querySelector("#check-button");
var displayMessage = document.querySelector("#message");


function calculateSumOfAngles(angle1, angle2, angle3){
    var sum = angle1 + angle2 + angle3;
    return sum;
}

function checkInput(){
    if (inputAngle[0].value&&inputAngle[1].value&&inputAngle[2].value){
        checkIfTriangle();
    }else{
        displayMessage.innerText = "Kindly enter all the angles";
    }
}

function checkIfTriangle(){
    sum = calculateSumOfAngles(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));

    if (sum === 180){
        displayMessage.innerText = "Yeah! Sum of angles form a triangle!"
    }else{
        displayMessage.innerText = "Ooops! Sum of angles does not form a triangle!"
    }
}

checkButton.addEventListener("click", checkInput);
