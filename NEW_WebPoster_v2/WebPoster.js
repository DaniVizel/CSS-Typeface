//GLOBAL VARIABLES
var letterArray = document.querySelectorAll(".letter");
var circleArray = document.querySelectorAll(".green-circle");





// RUNNABLE CODE
console.log("duck duck goose");

// console.log(letterArray);
// document.onclick = skew;


// document.onmousemove = moveLetters;
document.onmousemove = moveCircle;




// FUNCTIONS

function moveLetters(event) {
    var mouseX = event.clientX;
    // console.log(mouseX);
    for (var i=0; i< letterArray.length; i++){
        letterArray[i].style.transform = "skew("+mouseX/100 * -1+ "deg)";
    
    }
  }


function moveCircle(event) {
  var mouseX = event.clientX;

  for (var i=0; i< circleArray.length; i++){
    circleArray[i].style.transform = "skew("+ (-20 + mouseX/100 * -1) + "deg)";
}
}
