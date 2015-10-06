<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="Hello" method="post">
User name:<br>
<input type="text" name="userid">
<br>
User password:<br>
<input type="password" name="psw">
<br>
<p style="color:red">${error}</p>
<br>
<input type="submit" value="Submit">
<br>
<a href="CreateAccount.html"><button type="button">Create Account</button></a>
</form>
</body>
</body>
</html>