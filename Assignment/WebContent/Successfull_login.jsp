<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Welcome <% out.print(request.getParameter("userid").toLowerCase()); %> your session name is <%out.print(request.getSession().getAttribute("name")); %></h1>
<br>
<a href="LogoutServlet"><button>Logout</button></a>
<br>
<a href="SuccessfullLogin"><button>Profile</button></a>
</body>
</html>