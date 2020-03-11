
var people = [ 'Tal', 'Lior', 'Aviv', 'Noam' ];
var phones = [ '03-8989898', '03-834598', '03-8986786798', '03-8989123' ];
var emails = [ 'tt@tt.tt', 'rr@rr.rr', 'hh@hh.hh', 'mm@mm.mm' ];

var peopleString = '<table class="table"><tr><th>Name</th><th>Phone</th><th>Email</th></tr>';

for( let index = 0; index < people.length; index++ ) {
    peopleString += '<tr>';
    peopleString += '<td>' + people[index] + '</td>';
    peopleString += '<td>' + phones[index] + '</td>'
    peopleString += '<td>' + emails[index] + '</td>'
    peopleString += '</tr>'
}

peopleString += '</table>'

document.getElementById('output').innerHTML = peopleString;
