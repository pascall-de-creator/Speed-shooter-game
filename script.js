var crosshair = document.getElementById("crosshair")
var target = document.getElementById("target")
var scoreText = document.getElementById("scoreText")
var endScreen = document.getElementById("endScreen")
var endScore = document.getElementById("endScore")
var score = 0
var remainingTime = 15
var interval = 1700
var timer = setInterval(move, [interval]);
var timer = setInterval(reduceTime, [interval]);

onmousemove = function(e){
  crosshair.style.left = e.clientX - 15+"px";
  crosshair.style.top = e.clientY - 15+"px";
}
function move(){
  let height = window.innerHeight;
  let width = window.innerWidth;
  let randXAxis = Math.floor(Math.random() * width);
  let randYAxis = Math.floor(Math.random()* height);
  let xLoc, yLoc
  
  if (randXAxis >= width - 80){
    xLoc = randXAxis - 80
    if (randYAxis >= height - 80){
      yLoc = randYAxis - 80
    }
    else {
      yLoc = randYAxis
    }
  }  
  else{
    xLoc = randXAxis
    if (randYAxis >= height - 80){
      yLoc = randYAxis - 80
    }
    else {
      yLoc = randYAxis
    }
  }
  
  
  target.style.left = xLoc + "px";
  target.style.top = yLoc + "px";
}
function addScore(){
  score += 5
  scoreText.innerText = "Score: "+ score
  interval -= 50
  remainingTime ++
}
function reduceTime(){
  remainingTime --
  if (remainingTime <= 0){
    gameOver()
  }
}
function gameOver(){
  endScore.innerText = "Score: " + score
  target.style.display = "none"
  endScreen.style.display = "flex"
}
function restart(){
  target.style.display = "block"
  endScreen.style.display = "none"
  score = 0
  scoreText.innerText = "Score: "+ score
  remainingTime = 15
  interval = 1700
}