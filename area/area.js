var triangleSide = document.querySelectorAll(".triangle-sides");
var calculateButton = document.querySelector("#calculate-btn");
var message = document.querySelector("#message");

function calculateArea(){
    var base = triangleSide[0].value;
    var height = triangleSide[1].value;
    if (base&&height){
        var area = (base * height)/2;
        message.innerText = "Area of triangle is " + area + "cm2"
    }else{
        message.innerText = "Kindly enter both the lengths"
    }
}


calculateButton.addEventListener("click", calculateArea);