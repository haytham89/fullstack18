/* worker_1 = {
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
}; */

var workers_from_localStorage = localStorage.getItem('the_workers');

var workers = [];

if( workers_from_localStorage != null ) {
    workers = JSON.parse(workers_from_localStorage);
}





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
	localStorage.setItem( 'the_workers', JSON.stringify(workers)  );
	draw_table();
	
	//console.log( workers );
		
	return false;	
}

function delete_worker_by_key( the_key ) {
	workers.splice(the_key,1);
    localStorage.setItem( 'the_workers', JSON.stringify(workers)  );
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
    
    let header_th_tasks = document.createElement('th');
    header_th_tasks.innerText = 'Tasks';
    
    let header_th_delete = document.createElement('th');
    header_th_delete.innerText = 'Delete';
    
	
	table.appendChild(thead);
	thead.appendChild(header_tr);
	header_tr.appendChild(header_th_index);
	header_tr.appendChild(header_th_name);
	header_tr.appendChild(header_th_phone);
	header_tr.appendChild(header_th_email);
	header_tr.appendChild(header_th_tasks);
    header_tr.appendChild(header_th_delete);
    

    //Event to header_tr
    header_tr.addEventListener( 'mouseover', function(){
        console.log('I am on header_tr');
    })
	
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
		
		let td_tasks = document.createElement('td');
        
        let task_list = create_elemets_of_tasks_by_worker( workers[i].tasks );

		td_tasks.appendChild(task_list);
		tr.appendChild(td_tasks);
		
		let td_delete = document.createElement('td');
        tr.appendChild(td_delete);
        
        // The delete button
        let delete_button = document.createElement('button');
        delete_button.innerText = 'x';
        delete_button.setAttribute('onclick', 'delete_worker_by_key(' + i + ')');
        delete_button.setAttribute('data-my-attr', 'abcdefg');

        td_delete.appendChild(delete_button);
		
		tbody.appendChild(tr);
	}
	
	
	
	document.querySelector('.workers_table').appendChild(table);
}


function create_elemets_of_tasks_by_worker( tasks_of_worker ) {

    let task_ul = document.createElement('ul');
    for( let i=0; i < tasks_of_worker.length; i++ ) {

        let task_li = document.createElement('li');
        task_li.innerText = tasks_of_worker[i].todo + ' - ' + tasks_of_worker[i].when;
        task_ul.appendChild(task_li);
        
    }
    return task_ul;

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



