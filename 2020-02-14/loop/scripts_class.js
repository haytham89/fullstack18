
for( var i = 0; i < 20; i++ ) {
    console.log(i);
}

console.log( "Outside loop of i: " + i );



for ( let x = 0; x < 10; x++ ) {
    console.log(x);
}

//console.log( "Outside loop of x: " + x );

console.log( "Loop inside loop" );

//Looop inside loop
var counter = 1;

for( let i = 0; i < 5; i++ ) {
    
    for ( let x = 0; x < 5; x++ ) {
	    console.log(i + ":" + x);
        console.log(counter);
        counter++;
	}
}




console.log('----  While Loop -------');
var m = 0;
while( m < 10 ) {
    console.log(m);
    m++;
}

for(let m=0; m < 10; m++){

}

/**
 *  DO/WHILE loop
 */
var index = 0;
do {
    console.log("I am here anyway for 1 cycle: " + index);
    index++;
} while ( index < 10 );

