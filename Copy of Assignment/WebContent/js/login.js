$(document).ready(function(){
	$('#cnfpwd').focusout(function(){
	var password = $('#pwd2').val();
	var confirmPassword = $('#cnfpwd').val();
	if(password!==confirmPassword){
		$('#passwordError').show();
		
	}});
});