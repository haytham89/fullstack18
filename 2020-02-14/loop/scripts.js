for( var i = 0; i < 20; i++ ) {
	console.log(i);
}

console.log( "Outside loop of i: " + i );


for ( let x = 0; x < 10; x++ ) {
    console.log(x);
}

//console.log( "Outside loop of x: " + x );


//Looop inside loop
for( var i = 0; i < 5; i++ ) {
	for ( let x = 0; x < 5; x++ ) {
	    console.log(i + ":" + x);
	}
}


/**
 *  BREAK the loop completely
 */
var pupils = ['Michael', 'Tal', 'Dan', 'Elad', 'Shira', 'David'];
for ( let i = 0; i < 6; i++ ) {
    if( i == 3 ) {
		break;
	}
    console.log( pupils[i] );
}


/**
 *  CONTINUE the loop and skip the next lines in the loop
 */
var pupils = ['Michael', 'Tal', 'Dan', 'Elad', 'Shira', 'David'];
for ( let i = 0; i < 6; i++ ) {
    if( i == 3 ) {
		continue;
	}
    console.log( pupils[i] );
}

console.log( '-------------' );


/**
 *  WHILE loop
 */
var counter = 0
while( pupils[counter] ) {
	console.log( "Inside while: " + pupils[counter] );
	counter++;
}

console.log( '-------------' );

/**
 *  DO/WHILE loop
 */
index = 0;
//index = 7;
do {
    console.log("I am here anyway for 1 cycle: " + index);
    index++;
} while ( pupils[index] );





