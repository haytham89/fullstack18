
function ballCalc(){  
  let volume;
  let radius = document.getElementById('radius').value;
  if (isNaN(radius)) {
      alert('you enter invaild number');
  }
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 

function drawCircle(){
    resetdraw()
var radius = document.getElementById("radius").value;
var canvas = document.getElementById("Canvas");  
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
if (radius>canvas.width/2 || radius>canvas.height/2){
    alert("input radius is too large to draw")
}
let context = canvas.getContext("2d");
context.beginPath();
context.fill();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();
}


function resetdraw(){
    let canvas = document.getElementById("Canvas"); 
    let context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.clearRect(0,0, canvas.width, canvas.height);
}








