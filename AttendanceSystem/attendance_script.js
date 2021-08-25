var date_id = document.getElementById("date_id");
var today = new Date();
var d = today.getDate();
var m = today.getMonth();
var y = today.getFullYear();
var final_date = d + "." + m + "." + y;
date_id.innerHTML = final_date;

var id_id = document.getElementById("ID_id");
var name_id = document.getElementById("name_id");
var subject_id = document.getElementById("subject_id");
var submit_id = document.getElementById("submit_id");
var table_body = document.getElementById("table_body");

submit_id.addEventListener('click',function(e){
    e.preventDefault();
    if (id_id.value=="" || name_id.value=="" || subject_id.value=="") {
        alert("Input fild must be filled...");
    }
    else{
        let new_row = document.createElement('tr');

        let student_new_id = document.createElement('td');
        student_new_id.innerHTML = id_id.value;
        new_row.appendChild(student_new_id);

        let student_new_name = document.createElement('td');
        student_new_name.innerHTML = name_id.value;
        new_row.appendChild(student_new_name);

        let student_new_sub = document.createElement('td');
        student_new_sub.innerHTML = subject_id.value;
        new_row.appendChild(student_new_sub);

        table_body.appendChild(new_row); 
    }   
    
    id_id.value="";
    name_id.value="";
    subject_id.value="";
})