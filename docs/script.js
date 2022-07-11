var num1 = Math.random();
var num2 = Math.random();
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
var title = document.getElementById("title");
num1 = Math.floor(num1*6) + 1;
num2 = Math.floor(num2*6) + 1;



var src1 = "images/dice" + num1 + ".png";
var src2 = "images/dice" + num2 + ".png";



function Changes() {
    img1.setAttribute("src", src1);
    img2.setAttribute("src", src2);

    if (num1 > num2) {
        title.innerHTML = "Player 1 Wins 😜"
    } else if (num1 < num2) {
        title.innerHTML = "Player 2 Wins 😜"
    } else {
        title.innerHTML = "Draw 🧛‍♂️"
    }
}


window.onload = Changes;
// btn.onclick = function(){ 
//     if (num1 == 1){
//         img1.src = "images/dice1.png"
//     } else if (num1 == 2) {
//         img1.src = "images/dice2.png"
//     } else if (num1 == 3) {
//         img1.src = "images/dice3.png"
//     } else if (num1 == 4) {
//         img1.src = "images/dice4.png"
//     } else if (num1 == 5) {
//         img1.src = "images/dice5.png"
//     } else if (num1 == 6) {
//         img1.src = "images/dice6.png"
//     }

//     if (num2 == 1){
//         img2.src = "images/dice1.png"
//     } else if (num2 == 2) {
//         img2.src = "images/dice2.png"
//     } else if (num2 == 3) {
//         img2.src = "images/dice3.png"
//     } else if (num2 == 4) {
//         img2.src = "images/dice4.png"
//     } else if (num2 == 5) {
//         img2.src = "images/dice5.png"
//     } else if (num2 == 6) {
//         img2.src = "images/dice6.png"
//     }
// };

