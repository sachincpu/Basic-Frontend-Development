var numSquares=6;

var colors=randomColor(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor=colorPicker();

var message=document.querySelector("#message");

var colorDislay=document.getElementById("colorDisplay");

var h1=document.querySelector("h1");

var resetButton=document.querySelector("#reset");

var easy=document.getElementById("easy");

var hard=document.querySelector("#hard");

colorDisplay.textContent = pickedColor; 

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares=3;
    colors=randomColor(numSquares);
    pickedColor=colorPicker();
    colorDislay.textContent=pickedColor;
    for(var i=0; i<squares.length; i++)
        {
            if(colors[i]){
                squares[i].style.backgroundColor=colors[i];
            }
            else{
                squares[i].style.display="none";
            }
        }
})

hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares=6;
    colors=randomColor(numSquares);
    pickedColor=colorPicker();
    colorDislay.textContent=pickedColor;
    for(var i=0; i<squares.length; i++)
        {
                squares[i].style.backgroundColor=colors[i];
                squares[i].style.display="block";
            
        }    
})

resetButton.addEventListener("click",function(){
    colors=randomColor(numSquares);
    
    pickedColor=colorPicker();
    
    colorDisplay.textContent = pickedColor;
    
    for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];}
    
    h1.style.backgroundColor="steelblue";
    
    message.textContent="";
    
    resetButton.textContent="NEW COLOR";
}
)

for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
    var clickedColor=this.style.backgroundColor;
        //compare it with picked color
        if(pickedColor===clickedColor){
            message.textContent="GREAT!";
            changeColors(clickedColor);
             h1.style.backgroundColor = clickedColor;
            resetButton.textContent="PLAY AGAIN?"
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent="TRY AGAIN!"
        }
    });
}

function changeColors(color){
    //loop through the squares and change each color to match given color
    for(var i=0; i<squares.length; i++)
        {
            squares[i].style.backgroundColor = color;
        }
}

function colorPicker(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColor(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i=0; i<num; i++){
        //get random color and push into array
        arr.push(generateRandomColor());
    }
    //return the array
    return arr;
}

function generateRandomColor(){
    var r = Math.floor(Math.random() * 256);
    
    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

