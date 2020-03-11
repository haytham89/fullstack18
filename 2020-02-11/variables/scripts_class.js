var x = 10;
var y = 30;
var t = '20';

var fullName = 'Tal Gerro';

var userLoggedOn = false;

// Array
//var names_of_students = [ 'Tal', 'Shira', 'Yael' ];


y = y * 5;

//alert(y);

//console.log(x);
console.log(y);
//console.log(x,y);
//alert(x);

document.getElementById('my-output').innerHTML = y;


/* Shirshur - Concatenation */
var my_name = "Tal";
var my_last_name = "Gerro";
var my_phone = '04-8845769';
var i_say = 'Let\'s learn together';
var i_say = "Let's learn togetherrrrrrr";
console.log(i_say)



var the_all_string = "My name is: " + my_name;

console.log(the_all_string); 



var firstName = 'Tal';
var lastName = 'Gerro';
var myWords = 'Hello class!';

var theWholeSpeech = 'My name is: ' + firstName + ' ' + lastName + ' and I say: ' + myWords;

console.log( theWholeSpeech );
document.getElementById('my-output').innerHTML = theWholeSpeech;


x = 5;
y = 8;
t = '4';

var added_this = x + y;
console.log(added_this);
console.log( typeof(added_this) );

var added_that = x + t;
console.log(added_that);
console.log(typeof(added_that));

var multiply_that = t * 1;
console.log(multiply_that);
console.log(typeof(multiply_that));

console.log('-----  Prompts -------');

//var yourFirstName = prompt('Please enter your first name');
//console.log(yourFirstName);

//var yourLastName = prompt('Please enter your last name');
//console.log(yourLastName);

//Your name is: Tal Gerro.


var widthOfDiv = prompt('Please enter width in pixels');
var heightOfDiv = prompt('Please enter height in pixels');

var htmlOfDiv = '<div style="width:' + widthOfDiv + 'px;height:' + heightOfDiv + 'px;background-color: red;"></div>';
document.getElementById('my-second-output').innerHTML = htmlOfDiv;













