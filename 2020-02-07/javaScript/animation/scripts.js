var square_element;

function create_square() {
	square_element = document.createElement("div");
    square_element.classList.add("square_class");
    square_element.id = "my-square";
    square_element.classList.add("square_class_2");
    document.querySelector("body").appendChild(square_element);
    square_element.style.top = '10px';
    square_element.style.left = '10px';
    square_element.style.backgroundColor = '#0f0';
    square_element.setAttribute("onClick", "moveSquare()"); 
    create_stop_button();
}

var t; 

function moveSquare() {
	
	square_top = square_element.offsetTop;
	square_left = square_element.offsetLeft;
	
	/*if( square_top > 100 ) {
		square_top = 10;
		square_left = 10;
	}*/
	
	square_element.style.top = (square_top + 10) + "px";
	square_element.style.left = (square_left + 10) + "px";
	
	
	
		
	t = setTimeout( function(){
		moveSquare()
	}, 100 );
}

create_square();


var stop_element;

function create_stop_button() {
	stop_element = document.createElement("div");
    stop_element.classList.add("stop_class");
    document.querySelector("body").appendChild(stop_element);
    stop_element.style.position = 'absolute';
    stop_element.style.bottom = '10px';
    stop_element.style.right = '10px';
    stop_element.style.width = '30px';
    stop_element.style.height = '30px';
    stop_element.style.backgroundColor = '#f00';
    stop_element.setAttribute("onClick", "clearTimeout(t)"); 
}
