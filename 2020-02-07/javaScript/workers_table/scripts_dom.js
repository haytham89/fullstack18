worker_1 = {
	name : "David",
	phone : "04-888888",
	email : "tt@tt.tt",
	tasks: [
        { todo: "Copy that", when: "01/18/2019" },
        { todo: "Send it", when: "03/18/2019" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


worker_2 = {
	name : "Jane",
	phone : "03-6666666",
	email : "gg@gg.gg",
	tasks: [
        { todo: "Copy that", when: "02/19/2019" },
        { todo: "Send it", when: "02/23/2019" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


worker_3 = {
	name : "Dan",
	phone : "02-5555555",
	email : "hh@hh.hh",
	tasks: [
        { todo: "Copy that", when: "06/18/2019" },
        { todo: "Send it", when: "02/22/2019" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


worker_4 = {
	name : "Susan",
	phone : "09-7777777",
	email : "uu@uu.uu",
	tasks: [
        { todo: "Copy that", when: "02/18/2017" },
        { todo: "Send it", when: "02/18/2017" },
        { todo: "Calculate this", when: "02/18/2019" }
    ]
};


var workers = [worker_1, worker_2, worker_3, worker_4];
draw_table();


function add_new_worker() {
	
	let worker_name = document.getElementById('worker_name').value;
	let worker_phone = document.getElementById('worker_phone').value;
	let worker_email = document.getElementById('worker_email').value;
	
	if( worker_name.length < 2 ) {
		alert('Worker name too short');
		return false;
	}
	
	if( worker_phone.length < 9 ) {
		alert('Worker phone too short');
		return false;
	}
	
	let new_worker = {
		name : worker_name,
		phone : worker_phone,
		email : worker_email,
		tasks : []
	}
	
	workers.push( new_worker );
	
	draw_table();
	
	//console.log( workers );
		
	return false;	
}

function delete_worker_by_key( the_key ) {
	workers.splice(the_key,1);
	draw_table();
}


function draw_table() {
	
	document.querySelector('.workers_table').innerHTML = '';
	
	let table = document.createElement('table');
	table.id = 'my-table';
	table.classList.add("table", "table-striped", "m-0");
	let thead = document.createElement('thead');	
	thead.classList.add('thead-dark');
	let header_tr = document.createElement('tr');
	let header_th_index = document.createElement('th');
	header_th_index.innerText = '#';
	let header_th_name = document.createElement('th');
	header_th_name.innerText = 'Name';
	let header_th_phone = document.createElement('th');
	header_th_phone.innerText = 'Phone';
	let header_th_email = document.createElement('th');
	header_th_email.innerText = 'Email';
	
	table.appendChild(thead);
	thead.appendChild(header_tr);
	header_tr.appendChild(header_th_index);
	header_tr.appendChild(header_th_name);
	header_tr.appendChild(header_th_phone);
	header_tr.appendChild(header_th_email);
	
	let tbody = document.createElement('tbody');
	table.appendChild(tbody);
	
	for( let i=0; i < workers.length; i++ ) {
		let tr = document.createElement('tr');
		
		let td_index = document.createElement('td');
		td_index.innerText = (i+1);
		tr.appendChild(td_index);
		
		let td_name = document.createElement('td');
		td_name.innerText = workers[i].name;
		tr.appendChild(td_name);
		
		let td_phone = document.createElement('td');
		td_phone.innerText = workers[i].phone;
		tr.appendChild(td_phone);
		
		let td_email = document.createElement('td');
		td_email.innerText = workers[i].email;
		tr.appendChild(td_email);
		
		tbody.appendChild(tr);
	}
	
	
	
	document.querySelector('.workers_table').appendChild(table);
}


function draw_tasks_of_workers(the_key) {
	
	let the_wokers_task = workers[the_key].tasks;
	
	let tasks_html = '<ul>';
	for( let i=0; i < the_wokers_task.length; i++ ) {
		tasks_html += '<li>Task ' + (i+1) + ': ' + the_wokers_task[i].todo + ' By: ' + the_wokers_task[i].when + '</li>';
	}
	tasks_html += '</ul>';
	
	return tasks_html;
}



