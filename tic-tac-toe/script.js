//button monitor
//const boxes = document.getElementsByClassName(".box");
var player1 = prompt("Enter your name:");
console.log(player1);
var player2 = prompt("Enter your name:");
console.log(player2);
const boxes = document.querySelectorAll(".box");
console.log(boxes);
let player=true; //true or false---PLAYER'S TURN------player->true->"o"--player->false->"x"

const winner=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

boxes.addEventListener("click", function() {
player.setItem("citySession", "Delhi");
  outputParagraph.textContent = "Player 1 is the Winner";
});

function checkWinner(){
    for(let data of winner){
        const btn1=boxes[data[0]].innerHTML;
        const btn2=boxes[data[1]].innerHTML;
        const btn3=boxes[data[2]].innerHTML;

        if(btn1!="" && btn2!="" && btn3!=""){
            if(btn1 === btn2 && btn2 === btn3){
                console.log("The Winner is "+btn1);
                for(let box of boxes){
                box.disabled=true;
                }
            }
        }
    }
};
boxes.forEach((box)=>{
   // console.log(box.innerHTML);                //box haar ek value ko store karega
    //box.innerHTML= "aq"
    // box.addEventListener("click",()=>{
    //     console.log(box.innerHTML);
    box.addEventListener("click",()=>{             //adding event
        if(player){
            box.innerHTML="O";
            player=false;
            box.style.color = "black";
            box.style.backgroundColor = "beige";
        }
        else{
            box.innerHTML="X";
            player=true;
            box.style.color = "black";
            box.style.backgroundColor = "white";
        }
        box.disabled=true;                     //by default disabled ki value is false
        checkWinner();
    });
});

// const reset = document.querySelectorAll(".box-2");
// console.log(reset);
//  boxxx.disabled=true;       

const resetButton=document.querySelector(".reset-box");
resetButton.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML=""; //clear all
    });
    players=true; //start again with 0
    console.clear();
});







