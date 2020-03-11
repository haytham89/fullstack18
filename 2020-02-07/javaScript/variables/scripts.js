
var x = 10;
var y = 6;
var z = 3.5;
var t = "4";
var s = "Hello";
var is_it_raining = true;



var names_of_students = [ 'Tal', 'Shira', 'Yael' ];

//alert(x);
console.log(x);

window.onload = function(){
	document.getElementById('output').innerHTML = s;
}

/* Shirshur - Concatenation */
var my_name = "Tal";
var my_last_name = "Gerro";
var my_phone = '04-884569d';
var i_say = 'Let\'s learn together';
var i_say = "Let's learn together";

var the_all_string = "My name is" + i_say;

console.log(the_all_string);

added_this = x + t;

console.log(added_this);
console.log(typeof(added_this));

added_this = x + y;
console.log(added_this);
console.log(typeof(added_this));

/**
 *  Propmpt
 */
width_entered = prompt('Please enter WIDTH');
height_entered = prompt('Please enter height');

console.log("The width: " + width_entered + " and the height is: " + height_entered);

var the_area = width_entered*height_entered;
var the_perimeter = width_entered + width_entered + height_entered + height_entered;

console.log(typeof(width_entered));

console.log( the_area );

console.log(typeof(the_area));

console.log( the_perimeter );
console.log(typeof(the_perimeter));

var the_perimeter_2 = 2*width_entered + 2*height_entered;
console.log( the_perimeter_2 );







