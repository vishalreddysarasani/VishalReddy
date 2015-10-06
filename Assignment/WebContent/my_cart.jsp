<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>My Cart</title>
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
			        	<li><a href="login.jsp"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
			        </ul>
			    </div>
			  </div>
		</nav>
		<div class="container-fluid" id="adding-to-cart">
			<div class="table-responsive">
				<table class="table table-striped">
				    <thead>
				      	<tr class="row">
				        	<th class="col-sm-4">Product image</th>
				        	<th class="col-sm-4">Item</th>
				        	<th class="col-sm-4">Price</th>
				      	</tr>
				    </thead>
				    <tbody class="cart-table">
				    	
				    </tbody>
				</table>
			</div>
			<div class="col-sm-3 col-xs-12 pull-right totalcost"></div>
			<div class="col-sm-12 col-xs-12" style="margin-top:20px">
				<a href="shopping_cart.jsp"><button type="button" class="btn btn-primary pull-left mobile-button">continue shopping
			    </button></a>
			    <a href="login.jsp"><button type="button" class="btn btn-primary pull-right mobile-button">proceed to checkout
			    </button></a>
			</div>
		</div>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/my_cart.js"></script>
	</body>
</html>