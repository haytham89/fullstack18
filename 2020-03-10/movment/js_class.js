function createBall() {
    var ball_object = document.createElement("div");
    ball_object.classList.add("ball");
    document.querySelector("body").appendChild(ball_object);
    move_ball(ball_object);
}

console.log(screen.availHeight, window.innerHeight);

var theTop = 0;
var theLeft = 0;
var t;

createBall();

function move_ball(ball_object) {
    ball_object.style.top = theTop + 'px';
    ball_object.style.left = theLeft + 'px';
    theTop += 5;
    theLeft += 5;
    let divHeight = ball_object.offsetHeight;
    if( theTop >= window.innerHeight - divHeight ) {
        clearTimeout(t);
    }
    else {
        t = setTimeout(function(){
            move_ball(ball_object)
        }, 100);
    }

    
}

function stopDiv() {
    clearTimeout(t);
}

function startDiv() {
    move_ball(  document.querySelector(".ball")   );
}