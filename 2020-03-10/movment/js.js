window.onload = function () {
    createBall();
}





function createBall() {
    var elem = document.createElement("div");
    elem.classList.add("ball");
   // document.querySelector("body").appendChild(elem);

    let container = document.createElement("div");
    container.classList.add("container");
    container.style.width = '50%';
    container.style.height = '500px';
    container.style.margin = '1% auto';
    container.style.border = '1px solid black';
    container.style.position = 'absolute';
    container.style.top = '1%';
    container.style.left = '1%';
    container.style.right = '1%';
    document.querySelector("body").appendChild(container);
    document.querySelector(".container").appendChild(elem);
    
    moveBall(elem, container);
}
















var myTop = 50;
var myLeft = 50;

function moveBall(ball, container) {

    ball.style.top = myTop + "px";
    ball.style.left = myLeft + "px";
    
    myTop += 5;
    myLeft += 5;
    
    if( myLeft > container.offsetHeight - ball.offsetHeight ) {
        return;
    }

    setTimeout(function(){
        moveBall(ball, container);
    }, 100);
}


