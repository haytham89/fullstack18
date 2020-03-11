
/*
 * Output list
 **/
var outputString = '<ul>';

for( let i=0; i < 10; i++ ){
    outputString += '<li>' + i + '</li>';
}
outputString += '</ul>';

document.getElementById('output').innerHTML = outputString;

/*
 * Output table
 **/
var outputTableString = '<table class="table bg-primary col-6 mx-auto"><thead><tr><th>The number</th></tr></thead><tbody>';

for( let i=0; i < 10; i++ ){
    outputTableString += '<tr><td>' + i + '</td></tr>';
}
outputTableString += '</tbody></table>';

document.getElementById('outputTable').innerHTML = outputTableString;



/*
 * Output outputBigTable
 **/
var outputBigTableString = '<table class="table bg-success col-6 mx-auto"><tbody>';

for( let i=0; i < 10; i++ ){
    outputBigTableString += '<tr>';

    for( let m=0; m < 10; m++ ){
        outputBigTableString += '<td>' + m + '</td>';
    }

    outputBigTableString += '</tr>';
}
outputBigTableString += '</tbody></table>';

document.getElementById('outputBigTable').innerHTML = outputBigTableString;





