var leave = document.forms['form']['leave'];
var go = document.forms['form']['going'];
var Destination = document.forms['form']['Destina'];
var depart = document.forms['form']['depart'];
var returning = document.forms['form']['return'];

var leave_error = document.getElementById('leaving_error');
var go_error = document.getElementById('Going_error');
var Destination_error = document.getElementById('Destination_error');
var Depart_error = document.getElementById('Departing_error');
var returning_error = document.getElementById('returning_error');
 
leave.addEventListener('click',leave_verify);
go.addEventListener('click',go_verify);
Destination.addEventListener('click',Destination_verify);
depart.addEventListener('click',depart_verify);
returning.addEventListener('click',returning_verify);

function validated()
{
	if (leave.value.length < 3 )
	{
		leave.style.border = "1px solid red";
		leave_error.style.display="block";
		return false;
	}
	if (go.value.length < 3 )
	{
		go.style.border = "1px solid red";
		go_error.style.display="block";
		return false;
	}	
	if (Destination.value.length < 3 )
	{
		Destination.style.border = "1px solid red";
		Destination_error.style.display="block";
		return false;
	}
	if (depart.value.length < 3 )
	{
		depart.style.border = "1px solid red";
		Depart_error.style.display="block";
		return false;
	}
	if (returning.value.length < 3 )
	{
		returning.style.border = "1px solid red";
		returning_error.style.display="block";
		return false;
	}
}
function leave_verify()
{
	leave.style.border = "1px solid silver";
	leave_error.style.display="none";
}
function go_verify()
{
	go.style.border = "1px solid silver";
	go_error.style.display="none";
}
function Destination_verify()
{
	Destination.style.border = "1px solid silver";
	Destination_error.style.display="none";
}
function depart_verify()
{
	depart.style.border = "1px solid silver";
	Depart_error.style.display="none";
}
function returning_verify()
{
	returning.style.border = "1px solid silver";
	returning_error.style.display="none";
}