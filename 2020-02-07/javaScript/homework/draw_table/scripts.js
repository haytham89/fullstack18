var animal_names = ['Dog', 'Mouse', 'Cat', 'Cow', 'Sheep', 'Bird' ];
var animal_foods = ['Bonso', 'Cheese', 'Mice', 'Grass', 'Grass', 'Worms' ];

var table_head_string = '<table class="table table-striped">';
table_head_string += '<thead class="thead-dark">';
table_head_string += '<tr>';
table_head_string += '<th>#</th>';
table_head_string += '<th>Name</th>';
table_head_string += '<th>Food</th>';
table_head_string += '<th>Delete</th>';
table_head_string += '</tr>';
table_head_string += '</thead>';
table_head_string += '<tbody>';

table_string = '';
for( let i = 0; i < animal_names.length; i++ ) {
	table_string += '<tr>';
	table_string += '<th>' + (i+1) + '</th>';
	table_string += '<th>' + animal_names[i] + '</th>';
	table_string += '<th>' + animal_foods[i] + '</th>';
	table_string += '<th><i class="fa fa-trash" onClick="deleteRow(' + i + ');"></i></th>';
	table_string += '</tr>';
}
table_footer_string = '</tbody>';
table_footer_string += '</table>';

document.getElementById('output').innerHTML = table_head_string + table_string + table_footer_string;


function deleteRow(index) {
	
	animal_names.splice(index,1);
	animal_foods.splice(index,1);
	
	table_string = '';
	for( let i = 0; i < animal_names.length; i++ ) {
		table_string += '<tr>';
		table_string += '<th>' + (i+1) + '</th>';
		table_string += '<th>' + animal_names[i] + '</th>';
		table_string += '<th>' + animal_foods[i] + '</th>';
		table_string += '<th><i class="fa fa-trash" onClick="deleteRow(' + i + ');"></i></th>';
		table_string += '</tr>';
	}
	document.getElementById('output').innerHTML = table_head_string + table_string + table_footer_string;
}