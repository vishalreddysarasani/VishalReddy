<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
	<head>
		<meta charset="UTF-8">
		<title>Sarasani's Home</title>
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
			            <% if(session.getAttribute("loggedIn")=="yes"){ %>
			        	<li><a href="LogoutServlet"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
			        	<%} 
			        	else {%>
			        	<li><a href="login.jsp"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
			        	<%} %>
			        </ul>
			    </div>
			  </div>
		</nav>
		<div class="container-fluid" style="padding:0px">
			<nav>
				<div class="navbar-header" style="bacKground-color:black">
				    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				        <span class="icon-bar" style="background-color:red"></span>
				        <span class="icon-bar" style="background-color:red"></span>
				        <span class="icon-bar" style="background-color:red"></span>
				    </button>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="padding:0px">
					<ul class="nav nav-pills nav-stacked nav-justified" id="products-my-tabs" role="tablist">
						<li class="active" role="presentation" id="type1"><a href="#type1-body" aria-controls="type1-body" role="tab" data-toggle="tab">Home</a></li>
						<li  role="presentation" id="type2"><a href="#type2-body" aria-controls="type2-body" role="tab" data-toggle="tab">Sports</a></li>
						<li  role="presentation" id="type3"><a href="#type3-body" aria-controls="type3-body" role="tab" data-toggle="tab">Books</a></li>
						<li  role="presentation" id="type4"><a href="#type4-body" aria-controls="type4-body" role="tab" data-toggle="tab">Electronics</a></li>
						<li  role="presentation" id="type5"><a href="#type5-body" aria-controls="type5-body" role="tab" data-toggle="tab">Clothing</a></li>
		            </ul>
	        	</div>
	            <div class="tab-content">
	            	<div role="tabpanel" class="tab-pane products-type-body active" id="type1-body">
		            	<div class="row">
		                    <div class="col-sm-3 col-xs-4">
		                    	<div class="filter-heading">
		                    		<b>Price</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" class="product-filter" value="h0-499">0-499</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" class="product-filter" value="h500-999">500-999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" class="product-filter" value="h1000-2999">1000-2999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" class="product-filter" value="hover-3000">Over 3000</label>
		                        </div>
		                    </div>
		                    <div class="col-sm-9 col-xs-8 products-list" style="margin-top:15px;border-left:thin solid black">
		                    	
		                	</div>
		                </div>
		            </div>
		            <div role="tabpanel" class="tab-pane products-type-body" id="type2-body">
		            	<div class="row">
		                    <div class="col-sm-3 col-xs-4">
		                    	<div class="filter-heading">
		                    		<b>Brand</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="sadidas">Adidas</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="snike">Nike</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="swilson">Wilson</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="spuma">Puma</label>
		                        </div>
		                    	<div class="filter-heading">
		                    		<b>Price</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="s0-499">0-499</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="s500-999">500-999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="s1000-2999">1000-2999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="sover-3000">Over 3000</label>
		                        </div>
		                    </div>
		                    <div class="col-sm-9 col-xs-8 products-list" style="margin-top:15px;border-left:thin solid black">
		                    	
		                	</div>
		                </div>
		            </div>
		            <div role="tabpanel" class="tab-pane products-type-body" id="type3-body">
		            	<div class="row">
		                    <div class="col-sm-3 col-xs-4">
		                    	<div class="filter-heading">
		                    		<b>Price</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="b0-499">0-499</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="b500-999">500-999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="b1000-2999">1000-2999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="bover-3000">Over 3000</label>
		                        </div>
		                    </div>
		                    <div class="col-sm-9 col-xs-8 products-list" style="margin-top:15px;border-left:thin solid black">
		                    	
		                	</div>
		                </div>
		            </div>
		            <div role="tabpanel" class="tab-pane products-type-body" id="type4-body">
		            	<div class="row">
		                    <div class="col-sm-3 col-xs-4">
		                    	<div class="filter-heading">
		                    		<b>Brand</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="samsung">Samsung</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="nokia">Nokia</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="dell">Dell</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="hp">Hp</label>
		                        </div>
		                    	<div class="filter-heading">
		                    		<b>Price</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="e0-499">0-499</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="e500-999">500-999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="e1000-2999">1000-2999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="eover-3000">Over 3000</label>
		                        </div>
		                    </div>
		                    <div class="col-sm-9 col-xs-8 products-list" style="margin-top:15px;border-left:thin solid black">
		                    	
		                	</div>
		                </div>
		            </div>
		            <div role="tabpanel" class="tab-pane products-type-body" id="type5-body">
		            	<div class="row">
		                    <div class="col-sm-3 col-xs-4">
		                    	<div class="filter-heading">
		                    		<b>Brand</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="cadidas">Adidas</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="cnike">Nike</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="cwilson">Wilson</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="brand-filter" class="product-filter" value="cpuma">Puma</label>
		                        </div>
		                    	<div class="filter-heading">
		                    		<b>Price</b>
		                    	</div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="c0-499">0-499</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="c500-999">500-999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="c1000-2999">1000-2999</label>
		                        </div>
		                        <div class="checkbox">
		                        	<label><input type="checkbox" name="price-filter" class="product-filter" value="cover-3000">Over 3000</label>
		                        </div>
		                    </div>
		                    <div class="col-sm-9 col-xs-8 products-list" style="margin-top:15px;border-left:thin solid black">
		                    	
		                	</div>
		                </div>
		            </div>
	            </div>
	        </nav>
		</div>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="js/shopping_cart.js"></script>
	
	</body>
</html>