<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Login Page</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans">
		<link rel="stylesheet" type="text/css" href="css/shopping_cart.css">
	</head>
	
	<body>
		<nav class="navbar navbar-default navbar-style">
			<div class="container-fluid">
			    <div class="navbar-header">
			    	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span> 
				    </button>
			        <a class="navbar-brand" href="shopping_cart.jsp"><b style="color:white">Sarasani's</b></a>
			    </div>
			    <div class="collapse navbar-collapse" id="myNavbar">
			        <ul class="nav navbar-nav pull-right">
			            <li><a href="my_cart.jsp"><span class="glyphicon glyphicon-shopping-cart"></span> My Cart</a></li>
			        </ul>
			    </div>
			  </div>
		</nav>
		<div class="container-fluid">
		    <div class=" col-sm-5 col-xs-12">
		    	<h1 class="text-center">Please Login</h1>
		        <form:form role="form" action="/Assignment/addUser.do" method="post">
		            <div class="form-group">
		              <form:input type="text" class="form-control" name="userid" path="userId" id="usr1" placeholder="Username" required="required"/>
		            </div>
		            <div class="form-group">
		              <form:input type="password" class="form-control" name="psw" path="password" id="pwd1" placeholder="Password" required="required"/>
		            </div>
		            <p style="color:red">${error}</p>
		            <div class="form-group col-sm-5" style="padding:0px">
		              <button type="submit" class="form-control btn btn-primary" id="login">Login</button>
		            </div>
		            <div class="form-group col-sm-5 col-sm-offset-2" style="padding:8px">
		              <a href="forgot.html">Forgot Password</a>
		            </div>
		            <div class="form-group col-sm-2 col-xs-3" style="padding:0px">
		              <a href="https://www.facebook.com/"><img src="images/facebook-icon.png"></a>
		            </div>
		            <div class="form-group col-sm-2 col-xs-3" style="padding:0px">
		              <a href="https://accounts.google.com/ServiceLogin?service=oz&passive=1209600&continue=https://plus.google.com/?gpsrc%3Dgplp0#identifier"><img src="images/gmail-icon.png"></a>
		            </div>
		            <div class="form-group col-sm-2 col-xs-3" style="padding:0px">
		              <a href="https://twitter.com/"><img src="images/twitter-icon.png"></a>
		            </div>
		        </form:form>
		    </div>
		    <div class="col-sm-5 col-xs-12">
		    	<h1 class="text-center">New User</h1>
		    	<form:form role="form" action="/Assignment/register.do" method="post">
		            <div class="form-group">
		              <input type="email" class="form-control" id="mail" placeholder="Email" required>
		            </div>
		            <div class="form-group">
		              <form:input type="text" path="userId" class="form-control" name="userid" id="usr2" placeholder="Username" required="required"/>
		            </div>
		            <p style="color:red">${error1}</p>
		            <div class="form-group">
		              <form:input type="password" path="password" class="form-control" name="psw" id="pwd2" placeholder="Password" required="required"/>
		            </div>
		            <div class="form-group">
		              <input type="password" class="form-control" name="cnfpsw" id="cnfpwd" placeholder="Confirm Password" required>
		            </div>
		            <p style="color:red;display:none" id="passwordError">Password doesn't match</p>
		            <div class="form-group">
		              <button type="submit" class="form-control btn btn-primary" style="width:50%" id="login">Create Account</button>
		            </div>
		        </form:form>
		    </div>
		</div>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/login.js"></script>
	</body>
</html>