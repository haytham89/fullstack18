
var my_date_object = new Date();
console.log( my_date_object );


var year = my_date_object.getFullYear();
var month = my_date_object.getMonth() + 1;
var day = my_date_object.getDate();
var hour = my_date_object.getHours();
var minutes = my_date_object.getMinutes();
var sec = my_date_object.getSeconds();

console.log( day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + sec );

//console.log( my_date_object.toLocaleString() );


/**
 *  Find which is earlier or later by miliseconds from 1.1.1970 00:00
 */
var date_1 = new Date('07/13/2019');
date_1.setHours(10);
date_1.setMinutes(30);


var date_2 = new Date('07/15/2019');
date_2.setHours(10);
date_2.setMinutes(45);

/**
 *  OR like this
 */
//new Date(year, month, day, hours, minutes, seconds, milliseconds); //Months are from 0-11 -> January to December

console.log( date_2.getTime() + " : " + date_1.getTime() );

difference_in_miliseconds = Math.abs( date_2.getTime() - date_1.getTime() );

difference_in_hours = difference_in_miliseconds / ( 1000 * 60 * 60 );

difference_in_days = difference_in_miliseconds / ( 1000 * 60 * 60 * 24);

console.log( "Miliseconds: " + difference_in_miliseconds );
console.log( "Days: " + difference_in_days );
console.log( "Hours: " + difference_in_hours );