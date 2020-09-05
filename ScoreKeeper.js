var P1=document.getElementById("p1");
var P2=document.querySelector("#p2");

var P1Dis=document.getElementById("p1Display");

var P2Dis=document.getElementById("p2Display");

var Res=document.querySelector("#res");

var numInput=document.querySelector("input[type=number]");

var gameOver=false;

var WinningScore=5;

var playingNum=document.querySelector("p span");

var p1Score=0;
var p2Score=0;

P1.addEventListener("click",function(){
    if(!gameOver){
    p1Score++;
        if(p1Score==WinningScore)
            {
                P1Dis.classList.add("winner");
                gameOver=true;
            }
    P1Dis.textContent=p1Score;
    }
});

P2.addEventListener("click",function(){
    if(!gameOver){
    p2Score++;
       if(p2Score==WinningScore)
            {
                P2Dis.classList.add("winner");
                gameOver=true;
            }  
    P2Dis.textContent=p2Score;
    }
});

Res.addEventListener("click",function(){
    reset();
});

function reset(){
    p1Score=0;
    p2Score=0;
    P1Dis.textContent=p1Score;
    P2Dis.textContent=p2Score;
    P1Dis.classList.remove("winner");
    P2Dis.classList.remove("winner");
    gameOver=!gameOver;
};

numInput.addEventListener("change",function(){
    playingNum.textContent=numInput.value;
    WinningScore=numInput.value;
    reset();
});