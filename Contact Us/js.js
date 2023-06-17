var first = document.forms['form']['first'];
var last = document.forms['form']['last'];
var email = document.forms['form']['E-mail'];
var phone = document.forms['form']['phone_number'];

var first_name_error = document.getElementById('first_name_error');
var last_name_error = document.getElementById('last_name_error');
var email_error = document.getElementById('Email_error');
var phone_number_error = document.getElementById('phone_namber_error');
 
first.addEventListener('click',firstVerify);
last.addEventListener('click',lastVerify);
email.addEventListener('click',emailVerify);
phone.addEventListener('click',phoneVerify);

function validated()
{
	if (first.value.length < 3 )
	{
		first.style.border = "1px solid red";
		first_name_error.style.display="block";
		first.focus();
		return false;
	}
	if (last.value.length < 3 )
	{
		last.style.border = "1px solid red";
		last_name_error.style.display="block";
		last.focus();
		return false;
	}
	if (email.value.length < 8 )
	{
		email.style.border = "1px solid red";
		email_error.style.display="block";
		email.focus();
		return false;
	}
	if (phone.value.length < 11 )
	{
		phone.style.border = "1px solid red";
		phone_number_error.style.display="block";
		phone.focus();
		return false;
	}
}
	function firstVerify()
	{
			first.style.border = "1px solid silver";
			first_name_error.style.display="none";
	}
	function lastVerify()
	{
			last.style.border = "1px solid silver";
			last_name_error.style.display="none ";
	}
	function emailVerify()
	{
		email.style.border = "1px solid silver";
		email_error.style.display="none";
	}
	function phoneVerify()
	{
		phone.style.border = "1px solid silver";
		phone_number_error.style.display="none";
	}