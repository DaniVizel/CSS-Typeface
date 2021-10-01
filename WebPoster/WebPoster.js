//GLOBAL VARIABLES
var letterArray = document.querySelectorAll(".letter");





// RUNNABLE CODE
console.log("duck duck goose");

// console.log(letterArray);
// document.onclick = skew;


document.onmousemove = moveLetters;






// FUNCTIONS
function moveLetters(event) {
    var mouseX = event.clientX;
    // console.log(mouseX);
    for (var i=0; i< letterArray.length; i++){
        letterArray[i].style.transform = "skew("+mouseX/9 * -1+ "deg)";
    
    }
  }

// function skew(){
//     for (var i=0; i< letterArray.length; i++){
//         letterArray[i].style.transform = "skew(40deg)";
    
//     }
// }